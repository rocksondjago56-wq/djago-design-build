Add-Type -AssemblyName System.Drawing

$srcImage = "c:\Users\RAZER\Desktop\DJAGO\src\DJAGO_Design_Build_3 Editable Logo.png"
$publicDir = "c:\Users\RAZER\Desktop\DJAGO\public"
$iconsDir = Join-Path $publicDir "icons"
$assetsDir = "c:\Users\RAZER\Desktop\DJAGO\src\assets"

if (-not (Test-Path $iconsDir)) { New-Item -ItemType Directory -Path $iconsDir -Force }
if (-not (Test-Path $assetsDir)) { New-Item -ItemType Directory -Path $assetsDir -Force }

$bmp = [System.Drawing.Bitmap]::FromFile($srcImage)

# Exact emblem coordinates
# X: [220, 500], Y: [44, 257], Width: 281, Height: 214
$eX = 220
$eY = 44
$eW = 281
$eH = 214

# Crop the raw emblem
$emblemCrop = New-Object System.Drawing.Bitmap($eW, $eH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gCrop = [System.Drawing.Graphics]::FromImage($emblemCrop)
$gCrop.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gCrop.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gCrop.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gCrop.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$gCrop.DrawImage($bmp, 
    (New-Object System.Drawing.Rectangle(0, 0, $eW, $eH)), 
    (New-Object System.Drawing.Rectangle($eX, $eY, $eW, $eH)), 
    [System.Drawing.GraphicsUnit]::Pixel)
$gCrop.Dispose()

# Save master emblem and full logo to src/assets
$emblemCrop.Save((Join-Path $assetsDir "djago-emblem.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save((Join-Path $assetsDir "djago-logo-full.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved master djago-emblem.png and djago-logo-full.png in src/assets"

# Helper to create graphics paths for rounded rectangles (squircles)
function Add-RoundedRectToPath {
    param(
        [System.Drawing.Drawing2D.GraphicsPath]$path,
        [System.Drawing.RectangleF]$rect,
        [float]$radius
    )
    $diameter = $radius * 2.0
    $arc = New-Object System.Drawing.RectangleF($rect.X, $rect.Y, $diameter, $diameter)
    
    # top-left
    $path.AddArc($arc, 180, 90)
    # top-right
    $arc.X = $rect.Right - $diameter
    $path.AddArc($arc, 270, 90)
    # bottom-right
    $arc.Y = $rect.Bottom - $diameter
    $path.AddArc($arc, 0, 90)
    # bottom-left
    $arc.X = $rect.Left
    $path.AddArc($arc, 90, 90)
    $path.CloseFigure()
}

# Function to render emblem into a square bitmap
function Create-SquareIcon {
    param (
        [int]$size,
        [double]$paddingRatio,
        [string]$bgHex = "",
        [bool]$roundedSquircle = $false,
        [string]$outputPath
    )

    $targetBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($targetBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $g.Clear([System.Drawing.Color]::Transparent)

    if ($bgHex -ne "") {
        $color = [System.Drawing.ColorTranslator]::FromHtml($bgHex)
        $brush = New-Object System.Drawing.SolidBrush($color)
        
        if ($roundedSquircle) {
            $radius = [float]($size * 0.22)
            $rectF = New-Object System.Drawing.RectangleF(0, 0, [float]$size, [float]$size)
            $path = New-Object System.Drawing.Drawing2D.GraphicsPath
            Add-RoundedRectToPath -path $path -rect $rectF -radius $radius
            $g.FillPath($brush, $path)

            # Optional subtle border
            $borderPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml("#262b33"), [float]([Math]::Max(1, $size * 0.02)))
            $g.DrawPath($borderPen, $path)
            $borderPen.Dispose()
            $path.Dispose()
        } else {
            $g.FillRectangle($brush, 0, 0, $size, $size)
        }
        $brush.Dispose()
    }

    # Available draw area
    $availW = $size * (1.0 - (2.0 * $paddingRatio))
    $availH = $size * (1.0 - (2.0 * $paddingRatio))

    # Scale maintaining aspect ratio
    $scale = [Math]::Min($availW / $eW, $availH / $eH)
    $drawW = [int]($eW * $scale)
    $drawH = [int]($eH * $scale)
    $drawX = [int](($size - $drawW) / 2)
    $drawY = [int](($size - $drawH) / 2)

    $destRect = New-Object System.Drawing.Rectangle($drawX, $drawY, $drawW, $drawH)
    $srcRect = New-Object System.Drawing.Rectangle(0, 0, $eW, $eH)
    $g.DrawImage($emblemCrop, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    $g.Dispose()
    $targetBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Generated $outputPath ($size x $size)"
    return $targetBmp
}

# 1. PWA & Mobile Web Icons
$icon192 = Create-SquareIcon -size 192 -paddingRatio 0.08 -outputPath (Join-Path $iconsDir "icon-192.png")
$icon512 = Create-SquareIcon -size 512 -paddingRatio 0.08 -outputPath (Join-Path $iconsDir "icon-512.png")

# Maskable icons (must have solid background and safe zone padding 20%)
$maskable192 = Create-SquareIcon -size 192 -paddingRatio 0.20 -bgHex "#0d0f12" -outputPath (Join-Path $iconsDir "icon-maskable-192.png")
$maskable512 = Create-SquareIcon -size 512 -paddingRatio 0.20 -bgHex "#0d0f12" -outputPath (Join-Path $iconsDir "icon-maskable-512.png")

# Apple Touch Icon (180x180 with solid dark brand background #0d0f12, 14% padding)
$appleIcon = Create-SquareIcon -size 180 -paddingRatio 0.14 -bgHex "#0d0f12" -outputPath (Join-Path $publicDir "apple-touch-icon.png")
$appleIcon.Save((Join-Path $iconsDir "apple-touch-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)

# 2. Browser Favicons
# We provide both:
# Transparent versions
$fav16 = Create-SquareIcon -size 16 -paddingRatio 0.02 -outputPath (Join-Path $publicDir "favicon-16x16.png")
$fav32 = Create-SquareIcon -size 32 -paddingRatio 0.04 -outputPath (Join-Path $publicDir "favicon-32x32.png")
$fav48 = Create-SquareIcon -size 48 -paddingRatio 0.04 -outputPath (Join-Path $publicDir "favicon-48x48.png")

# Squircle dark badge version (guarantees gold and silver elements look stunning on both white and dark browser tabs)
$favBadge32 = Create-SquareIcon -size 32 -paddingRatio 0.12 -bgHex "#0d0f12" -roundedSquircle $true -outputPath (Join-Path $publicDir "favicon-badge-32.png")
$favBadge48 = Create-SquareIcon -size 48 -paddingRatio 0.12 -bgHex "#0d0f12" -roundedSquircle $true -outputPath (Join-Path $publicDir "favicon-badge-48.png")

# 3. Create Windows .ICO file (favicon.ico)
function Create-IcoFile {
    param (
        [System.Drawing.Bitmap[]]$images,
        [string]$outputPath
    )
    $msList = @()
    foreach ($img in $images) {
        $ms = New-Object System.IO.MemoryStream
        $img.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
        $msList += $ms
    }

    $fs = [System.IO.File]::Create($outputPath)
    $bw = New-Object System.IO.BinaryWriter($fs)

    # ICONDIR header
    $bw.Write([uint16]0)       # Reserved
    $bw.Write([uint16]1)       # 1 = ICO
    $bw.Write([uint16]$images.Length) # Image count

    # Directory entries
    $offset = 6 + ($images.Length * 16)
    for ($i = 0; $i -lt $images.Length; $i++) {
        $w = [byte]($images[$i].Width -band 0xFF)
        $h = [byte]($images[$i].Height -band 0xFF)
        $bw.Write($w)          # Width
        $bw.Write($h)          # Height
        $bw.Write([byte]0)     # Color palette count (0 for >=8bpp)
        $bw.Write([byte]0)     # Reserved
        $bw.Write([uint16]1)   # Color planes
        $bw.Write([uint16]32)  # Bits per pixel
        $bw.Write([uint32]$msList[$i].Length) # Size of image data
        $bw.Write([uint32]$offset)            # Offset of image data
        $offset += $msList[$i].Length
    }

    # Image data
    for ($i = 0; $i -lt $images.Length; $i++) {
        $bytes = $msList[$i].ToArray()
        $bw.Write($bytes, 0, $bytes.Length)
        $msList[$i].Dispose()
    }

    $bw.Flush()
    $bw.Close()
    $fs.Close()
    Write-Host "Created $outputPath successfully!"
}

# Build favicon.ico from 16, 32, 48
Create-IcoFile -images @($fav16, $fav32, $fav48) -outputPath (Join-Path $publicDir "favicon.ico")

# 4. Generate SVG favicon wrapping high-res emblem with dark squircle background option
$base64Emblem = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes((Join-Path $iconsDir "icon-512.png")))

# Modern crisp SVG favicon with dark rounded background ensuring gold & silver pop on all tab themes
$svgFavicon = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%">
  <rect width="128" height="128" rx="28" fill="#0d0f12" />
  <rect x="2" y="2" width="124" height="124" rx="26" fill="none" stroke="#262b33" stroke-width="2" />
  <image href="data:image/png;base64,$base64Emblem" x="12" y="12" width="104" height="104" preserveAspectRatio="xMidYMid meet" />
</svg>
"@
[System.IO.File]::WriteAllText((Join-Path $publicDir "favicon.svg"), $svgFavicon)
Write-Host "Updated public/favicon.svg"

# Also update icon-192.svg and icon-512.svg
[System.IO.File]::WriteAllText((Join-Path $iconsDir "icon-192.svg"), $svgFavicon)
[System.IO.File]::WriteAllText((Join-Path $iconsDir "icon-512.svg"), $svgFavicon)

# Clean up
$fav16.Dispose()
$fav32.Dispose()
$fav48.Dispose()
$favBadge32.Dispose()
$favBadge48.Dispose()
$icon192.Dispose()
$icon512.Dispose()
$maskable192.Dispose()
$maskable512.Dispose()
$appleIcon.Dispose()
$emblemCrop.Dispose()
$bmp.Dispose()

Write-Host "ALL ICONS GENERATED AND SAVED!"
