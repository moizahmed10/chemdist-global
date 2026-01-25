# This script helps format the Google private key correctly for .env.local

Write-Host "=== Google Private Key Formatter ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Please paste your ENTIRE private_key value from the JSON file"
Write-Host "(including the -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY----- parts)"
Write-Host ""
Write-Host "Press Enter after pasting, then press Ctrl+Z and Enter to finish:"
Write-Host ""

# Read multi-line input
$privateKey = @()
try {
    while ($true) {
        $line = Read-Host
        if ($line -eq $null) { break }
        $privateKey += $line
    }
} catch {
    # Ctrl+Z pressed
}

$privateKeyText = $privateKey -join ""

# Remove any quotes if user accidentally included them
$privateKeyText = $privateKeyText.Trim('"').Trim("'")

# Format with \n for literal newlines (not actual newlines)
$privateKeyText = $privateKeyText -replace "`n", "\n"
$privateKeyText = $privateKeyText -replace "`r", ""

# Ensure it starts and ends correctly
if (-not $privateKeyText.StartsWith("-----BEGIN PRIVATE KEY-----")) {
    Write-Host "ERROR: Private key should start with '-----BEGIN PRIVATE KEY-----'" -ForegroundColor Red
    exit 1
}

# Output the properly formatted key
Write-Host ""
Write-Host "=== Formatted Private Key ===" -ForegroundColor Green
Write-Host ""
Write-Host "Copy this ENTIRE line (including the quotes) and replace the GOOGLE_PRIVATE_KEY value in .env.local:"
Write-Host ""
Write-Host "`"$privateKeyText`"" -ForegroundColor Yellow
Write-Host ""
Write-Host "The formatted key has been copied to your clipboard!" -ForegroundColor Green

# Copy to clipboard
"`"$privateKeyText`"" | Set-Clipboard
