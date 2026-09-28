Add-Type -AssemblyName System.Drawing

$imagePath = "c:\Users\RAZER\Desktop\DJAGO\src\DJAGO_Design_Build_3 Editable Logo.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imagePath)

$eMinX = $bmp.Width
$eMaxX = 0
$eMinY = $bmp.Height
$eMaxY = 0

for ($y = 44; $y -lt 258; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.A -gt 25) {
            if ($x -lt $eMinX) { $eMinX = $x }
            if ($x -gt $eMaxX) { $eMaxX = $x }
            if ($y -lt $eMinY) { $eMinY = $y }
            if ($y -gt $eMaxY) { $eMaxY = $y }
        }
    }
}

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

Write-Host "Emblem bounds: X=[$eMinX, $eMaxX], Y=[$eMinY, $eMaxY], Width=$($eMaxX - $eMinX + 1), Height=$($eMaxY - $eMinY + 1)"
Write-Host "Wordmark bounds: X=[$wMinX, $wMaxX], Y=[$wMinY, $wMaxY], Width=$($wMaxX - $wMinX + 1), Height=$($wMaxY - $wMinY + 1)"

$bmp.Dispose()
