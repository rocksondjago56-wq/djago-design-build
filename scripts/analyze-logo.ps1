Add-Type -AssemblyName System.Drawing

$imagePath = "c:\Users\RAZER\Desktop\DJAGO\src\DJAGO_Design_Build_3 Editable Logo.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imagePath)

Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

# Let's find bounding box of non-transparent pixels (Alpha > 20)
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

Write-Host "Total non-transparent bounds: X=[$minX, $maxX], Y=[$minY, $maxY], W=$($maxX - $minX + 1), H=$($maxY - $minY + 1)"

# Now let's analyze horizontal scanline alpha density to find the gap between the emblem and the "DJAGO" wordmark
$scanlines = @()
for ($y = $minY; $y -le $maxY; $y++) {
    $count = 0
    for ($x = $minX; $x -le $maxX; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.A -gt 25) {
            $count++
        }
    }
    $scanlines += [PSCustomObject]@{ Y = $y; Count = $count }
}

# Find row where Count drops to near 0 or minimum between top emblem and text
$minGapY = -1
$minGapCount = 999999
for ($y = ($minY + 100); $y -lt ($maxY - 50); $y++) {
    $c = $scanlines[$y - $minY].Count
    if ($c -lt $minGapCount) {
        $minGapCount = $c
        $minGapY = $y
    }
}

Write-Host "Potential separator row between emblem and wordmark: Y=$minGapY (count=$minGapCount)"

$bmp.Dispose()
