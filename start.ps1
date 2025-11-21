Write-Host "Starting AuraForm Studio React Development Server..." -ForegroundColor Green
Set-Location $PSScriptRoot
$env:NODE_ENV = "development"

try {
    Write-Host "Running: npm run start" -ForegroundColor Yellow
    & npm run start
} catch {
    Write-Host "Error running npm start: $_" -ForegroundColor Red
    Write-Host "Trying alternative method..." -ForegroundColor Yellow
    
    try {
        & node node_modules/react-scripts/scripts/start.js
    } catch {
        Write-Host "Alternative method failed: $_" -ForegroundColor Red
        Write-Host "Please try running 'npm start' manually in a new terminal" -ForegroundColor Cyan
    }
}

Read-Host "Press Enter to exit"
