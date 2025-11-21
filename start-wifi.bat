@echo off
echo ========================================
echo AuraForm Studio - WiFi Network Access
echo ========================================
echo.
echo Starting development server for WiFi access...
echo This will make your app available to all devices on your network
echo.

cd /d "%~dp0"
set NODE_ENV=development
set HOST=0.0.0.0
set PORT=3000

echo Finding your local IP address...
for /f "tokens=4" %%a in ('route print ^| findstr /c:" 0.0.0.0"') do set LOCAL_IP=%%a

echo.
echo ========================================
echo Your app will be accessible at:
echo Local:    http://localhost:3000
echo Network:  http://%LOCAL_IP%:3000
echo ========================================
echo.
echo Share this URL with other devices on your WiFi:
echo http://%LOCAL_IP%:3000
echo ========================================
echo.

npm start
