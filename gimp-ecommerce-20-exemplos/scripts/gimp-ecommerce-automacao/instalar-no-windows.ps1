$ErrorActionPreference = 'Stop'

$pluginName = 'gimp-ecommerce-automacao'
$sourceFile = Join-Path $PSScriptRoot "$pluginName.py"
$gimpPluginRoot = Join-Path $env:APPDATA 'GIMP\3.0\plug-ins'
$destinationDirectory = Join-Path $gimpPluginRoot $pluginName
$destinationFile = Join-Path $destinationDirectory "$pluginName.py"

if (-not (Test-Path -LiteralPath $sourceFile)) {
    throw "Arquivo do plug-in não encontrado: $sourceFile"
}

New-Item -ItemType Directory -Path $destinationDirectory -Force | Out-Null
Copy-Item -LiteralPath $sourceFile -Destination $destinationFile -Force

Write-Host ''
Write-Host 'Plug-in instalado com sucesso.' -ForegroundColor Green
Write-Host "Destino: $destinationFile"
Write-Host ''
Write-Host 'Feche e abra novamente o GIMP 3.' -ForegroundColor Yellow
Write-Host 'Depois abra uma imagem e procure em: Filters > E-commerce'
