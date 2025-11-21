# AuraForm Contact Form - Google Apps Script Integration

This Google Apps Script handles contact form submissions from the AuraForm React website and sends formatted emails to the business and confirmation emails to clients.

## Setup Instructions

### 1. Create a New Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default `Code.gs` content with the code from this folder
4. Add the additional files: `EmailTemplate.gs` and update `appsscript.json`

### 2. Deploy as Web App

1. In the Google Apps Script editor, click "Deploy" > "New deployment"
2. Choose type: "Web app"
3. Set execute as: "Me"
4. Set access: "Anyone" (so your website can send data)
5. Click "Deploy"
6. Copy the web app URL - you'll need this for your React app

### 3. Enable Gmail API (if needed)

The script uses `MailApp.sendEmail()` which should work by default, but if you encounter issues:

1. Go to "Services" in the left sidebar
2. Click the "+" button
3. Add "Gmail API" if not already enabled

### 4. Test the Deployment

You can test the script by sending a POST request to your web app URL with sample form data.

### 5. Update Your React App

Replace the `WEB_APP_URL` in your React contact form with the URL you got from step 2.

## Features

### Email Notifications
- **Business Email**: Formatted HTML email with all form details sent to `auraformstudio.business@gmail.com`
- **Client Confirmation**: Professional confirmation email sent to the client
- **Service Pricing**: Automatically includes pricing information based on selected service

### Email Content Includes
- Client contact information
- Project details (service type, budget, timeline)
- Project description/vision
- Quick action buttons (Reply, WhatsApp)
- Priority flagging for urgent projects
- Professional branding and formatting

### Optional Features
- **Logging**: Uncomment the logging code in `Code.gs` to save submissions to a Google Sheet
- **Custom Reply-To**: Emails are set with the client's email as reply-to for easy responses

## Security Notes

- The web app is set to accept anonymous requests (required for website integration)
- Consider adding basic validation or rate limiting if needed
- The script only processes POST requests with JSON data

## Customization

### Modify Email Recipients
Update the `recipient` variable in the `sendContactEmail` function:

```javascript
const recipient = 'your-business-email@gmail.com';
```

### Customize Email Templates
Edit the HTML templates in `EmailTemplate.gs` to match your brand styling.

### Add Google Sheets Logging
Uncomment and configure the logging code in the `logSubmission` function to track all submissions in a spreadsheet.

## Troubleshooting

### Common Issues
1. **CORS Errors**: Make sure the web app is deployed with "Anyone" access
2. **Email Not Sending**: Check if Gmail API permissions are granted
3. **Script Timeout**: For large volumes, consider using HTML Service instead of MailApp

### Testing
- Use the web app URL in a tool like Postman to test with sample JSON data
- Check the execution log in Google Apps Script for any errors
- Verify emails are not going to spam folders

## File Structure

```
google-apps-script/
├── Code.gs              # Main script with form handling logic
├── EmailTemplate.gs     # Email template generators
├── appsscript.json     # Project configuration
└── README.md           # This file
```

## Sample Request

The script expects POST requests with JSON data in this format:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "company": "Example Corp",
  "service": "logo",
  "budget": "500-1000",
  "timeline": "1-week",
  "message": "I need a professional logo for my startup..."
}
```
