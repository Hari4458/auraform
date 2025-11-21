@echo off
REM AuraForm Contact Form Setup Script for Windows
REM This script helps you set up the Google Apps Script integration

echo 🎨 AuraForm Contact Form - Google Apps Script Setup
echo ==================================================
echo.

echo 📋 Setup Steps:
echo.
echo 1. 🌐 Go to Google Apps Script: https://script.google.com/
echo 2. ➕ Click 'New Project'
echo 3. 📝 Replace default Code.gs with content from: google-apps-script\Code.gs
echo 4. ➕ Add new file: EmailTemplate.gs (copy from google-apps-script\EmailTemplate.gs)
echo 5. ⚙️ Update appsscript.json with content from: google-apps-script\appsscript.json
echo 6. 🚀 Deploy as Web App:
echo    - Click Deploy ^> New deployment
echo    - Type: Web app
echo    - Execute as: Me
echo    - Access: Anyone
echo 7. 📋 Copy the Web App URL
echo 8. 🔧 Update Contact.js:
echo    - Replace 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE' with your actual URL
echo.

echo 📧 Email Configuration:
echo - Business emails will be sent to: auraformstudio.business@gmail.com
echo - Clients will receive confirmation emails
echo - Templates include service pricing and contact information
echo.

echo 🧪 Testing:
echo - Submit a test form to verify email delivery
echo - Check spam folders if emails don't arrive
echo - Monitor Google Apps Script execution logs for errors
echo.

echo ✅ Once setup is complete, your contact form will:
echo    • Send formatted business emails with all form details
echo    • Send professional confirmation emails to clients
echo    • Include service pricing and project information
echo    • Provide quick action buttons for responses
echo.

echo Need help? Check the README.md file for detailed instructions!
echo.

pause
