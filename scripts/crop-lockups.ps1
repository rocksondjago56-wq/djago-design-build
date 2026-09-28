Add-Type -AssemblyName System.Drawing

$srcImage = "c:\Users\RAZER\Desktop\DJAGO\src\DJAGO_Design_Build_2 Editable.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcImage)

# In previous analysis, separator row between emblem and wordmark was Y=258
# Let's find exact bounds of the wordmark (Y >= 258)
$wMinX = $bmp.Width
$wMaxX = 0
$wMinY = $bmp.Height
$wMaxY = 0

for ($y = 258; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.A -gt 25) {
            if ($x -lt $wMinX) { $wMinX = $x }
            if ($x -gt $wMaxX) { $wMaxX = $x }
            if ($y -lt $wMinY) { $wMinY = $y }
            if ($y -gt $wMaxY) { $wMaxY = $y }
        }
    }
}

$wW = $wMaxX - $wMinX + 1
$wH = $wMaxY - $wMinY + 1
Write-Host "Wordmark bounds: X=[$wMinX, $wMaxX], Y=[$wMinY, $wMaxY], Width=$wW, Height=$wH"

# Crop wordmark
$wordmarkCrop = New-Object System.Drawing.Bitmap($wW, $wH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gW = [System.Drawing.Graphics]::FromImage($wordmarkCrop)
$gW.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gW.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gW.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gW.DrawImage($bmp, 
    (New-Object System.Drawing.Rectangle(0, 0, $wW, $wH)), 
    (New-Object System.Drawing.Rectangle($wMinX, $wMinY, $wW, $wH)), 
    [System.Drawing.GraphicsUnit]::Pixel)
$gW.Dispose()

$assetsDir = "c:\Users\RAZER\Desktop\DJAGO\src\assets"
$wordmarkCrop.Save((Join-Path $assetsDir "djago-wordmark.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved djago-wordmark.png"

# Emblem bounds from earlier: X=[220, 500], Y=[44, 257], Width=281, Height=214
$eX = 220; $eY = 44; $eW = 281; $eH = 214
$emblemCrop = New-Object System.Drawing.Bitmap($eW, $eH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gE = [System.Drawing.Graphics]::FromImage($emblemCrop)
$gE.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gE.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gE.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gE.DrawImage($bmp, 
    (New-Object System.Drawing.Rectangle(0, 0, $eW, $eH)), 
    (New-Object System.Drawing.Rectangle($eX, $eY, $eW, $eH)), 
    [System.Drawing.GraphicsUnit]::Pixel)
$gE.Dispose()

# Now let's create a beautiful horizontal lockup:
# Target height for both components: let's scale both so height is harmonious (e.g. Emblem height 200, Wordmark height 140)
# Gap between emblem and wordmark: 30px
$targetEmblemH = 200
$targetEmblemW = [int]($eW * ($targetEmblemH / $eH))

$targetWordmarkH = 140
$targetWordmarkW = [int]($wW * ($targetWordmarkH / $wH))

$gap = 36
$totalW = $targetEmblemW + $gap + $targetWordmarkW
$totalH = [Math]::Max($targetEmblemH, $targetWordmarkH)

$horizBmp = New-Object System.Drawing.Bitmap($totalW, $totalH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gH = [System.Drawing.Graphics]::FromImage($horizBmp)
$gH.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gH.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gH.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gH.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Draw emblem centered vertically
$emblemY = [int](($totalH - $targetEmblemH) / 2)
$gH.DrawImage($emblemCrop, 
    (New-Object System.Drawing.Rectangle(0, $emblemY, $targetEmblemW, $targetEmblemH)), 
    (New-Object System.Drawing.Rectangle(0, 0, $eW, $eH)), 
    [System.Drawing.GraphicsUnit]::Pixel)

# Draw wordmark centered vertically
$wordmarkX = $targetEmblemW + $gap
$wordmarkY = [int](($totalH - $targetWordmarkH) / 2)
$gH.DrawImage($wordmarkCrop, 
    (New-Object System.Drawing.Rectangle($wordmarkX, $wordmarkY, $targetWordmarkW, $targetWordmarkH)), 
    (New-Object System.Drawing.Rectangle(0, 0, $wW, $wH)), 
    [System.Drawing.GraphicsUnit]::Pixel)

$gH.Dispose()
$horizBmp.Save((Join-Path $assetsDir "djago-horizontal-lockup.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved djago-horizontal-lockup.png (Width=$totalW, Height=$totalH)"

$horizBmp.Dispose()
$emblemCrop.Dispose()
$wordmarkCrop.Dispose()
$bmp.Dispose()
