@echo off
echo Starting AuraForm Studio React Development Server...
cd /d "%~dp0"
set NODE_ENV=development
node node_modules/react-scripts/scripts/start.js
pause
