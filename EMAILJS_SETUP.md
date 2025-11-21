# EmailJS Setup Guide for AuraForm Contact Form

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for auraformstudio.business@gmail.com)
   - Or any other email service you prefer
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```html
Subject: 🎨 New Contact Form Submission - {{service}}

From: {{from_name}} <{{from_email}}>
Reply-To: {{reply_to}}

Hi AuraForm Studio Team!

You have a new contact form submission:

👤 CLIENT INFORMATION
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Organization: {{company}}

🎯 PROJECT DETAILS
Service: {{service}}
Budget: {{budget}}
Timeline: {{timeline}}

💭 PROJECT VISION
{{message}}

📧 Submission received at {{submission_time}}

---
AuraForm Studio - Where Creativity Meets Excellence
```

4. **Copy the Template ID** (you'll need this)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy the Public Key** (you'll need this)

### 5. Update Configuration
1. Open `src/services/emailService.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key_here',
  SERVICE_ID: 'your_actual_service_id_here',
  TEMPLATE_ID: 'your_actual_template_id_here'
};
```

### 6. Test the Integration
1. Start your React app: `npm start`
2. Fill out and submit the contact form
3. Check your email (auraformstudio.business@gmail.com)
4. Verify the email arrives with all form data

## 📧 Email Template Variables

The following variables are automatically filled:

- `{{from_name}}` - Client's full name
- `{{from_email}}` - Client's email
- `{{phone}}` - Client's phone number
- `{{company}}` - Client's organization
- `{{service}}` - Selected service with pricing
- `{{budget}}` - Budget range
- `{{timeline}}` - Project timeline
- `{{message}}` - Client's project description
- `{{submission_time}}` - Timestamp in Indian timezone

## 🎨 Advanced Customization

### Custom Email Template (HTML)
For a more professional look, you can create an HTML template:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-item { background: #f8f9ff; padding: 10px; margin: 5px 0; border-left: 4px solid #667eea; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎨 New Contact Form Submission</h1>
        <p>AuraForm Studio</p>
    </div>
    <div class="content">
        <h2>👤 Client Information</h2>
        <div class="info-item"><strong>Name:</strong> {{from_name}}</div>
        <div class="info-item"><strong>Email:</strong> {{from_email}}</div>
        <div class="info-item"><strong>Phone:</strong> {{phone}}</div>
        <div class="info-item"><strong>Organization:</strong> {{company}}</div>
        
        <h2>🎯 Project Details</h2>
        <div class="info-item"><strong>Service:</strong> {{service}}</div>
        <div class="info-item"><strong>Budget:</strong> {{budget}}</div>
        <div class="info-item"><strong>Timeline:</strong> {{timeline}}</div>
        
        <h2>💭 Project Vision</h2>
        <div class="info-item">{{message}}</div>
        
        <p><em>Received at {{submission_time}}</em></p>
    </div>
</body>
</html>
```

## 🔧 Troubleshooting

### Common Issues:
1. **EmailJS returns 400 error**: Check your service/template IDs
2. **No email received**: Check spam folder, verify email service setup
3. **Template variables not working**: Ensure variable names match exactly

### Testing:
- Use EmailJS test feature in dashboard
- Check browser console for any JavaScript errors
- Verify all three IDs (Public Key, Service ID, Template ID) are correct

## 📊 Free Plan Limits
- **200 emails/month** on free plan
- Upgrade to paid plans for higher limits
- Perfect for small to medium business needs

## 🎯 Benefits of EmailJS
- ✅ No server required
- ✅ Direct from React app
- ✅ Real-time email delivery
- ✅ Professional templates
- ✅ Easy setup and maintenance
- ✅ Reliable delivery

Once set up, your contact form will automatically send professional emails to your business address whenever someone submits the form!
