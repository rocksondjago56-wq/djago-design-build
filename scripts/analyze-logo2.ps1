Add-Type -AssemblyName System.Drawing

$imagePath = "c:\Users\RAZER\Desktop\DJAGO\src\DJAGO_Design_Build_2 Editable.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imagePath)

Write-Host "Raw Width: $($bmp.Width), Height: $($bmp.Height)"

# Find non-transparent bounds
$minX = $bmp.Width
$maxX = 0
$minY = $bmp.Height
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.A -gt 25) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$w = $maxX - $minX + 1
$h = $maxY - $minY + 1
Write-Host "Tight Non-transparent bounds: X=[$minX, $maxX], Y=[$minY, $maxY], Width=$w, Height=$h, AspectRatio=$($w / $h)"

# Save a tightly trimmed transparent PNG of the full brand lockup
$crop = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($crop)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$g.DrawImage($bmp, 
    (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), 
    (New-Object System.Drawing.Rectangle($minX, $minY, $w, $h)), 
    [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$assetsDir = "c:\Users\RAZER\Desktop\DJAGO\src\assets"
$outputPath = Join-Path $assetsDir "djago-full-lockup.png"
$crop.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved tightly cropped full logo to $outputPath"

$crop.Dispose()
$bmp.Dispose()
