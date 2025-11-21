# EmailJS Template for AuraForm Contact Form

## Basic Template (Copy this to your EmailJS template)

### Subject Line:
```
🎨 New Contact Form Submission - {{service}}
```

### Email Body (Plain Text):
```
Hi AuraForm Studio!

You have received a new contact form submission:

👤 CLIENT DETAILS:
Name: {{firstName}} {{lastName}}
Email: {{email}}
Phone: {{phone}}
Company: {{company}}

🎯 PROJECT DETAILS:
Service: {{service}} {{servicePrice}}
Budget: {{budget}}
Timeline: {{timeline}}

💭 MESSAGE:
{{message}}

📅 Received: {{timestamp}}

Reply to this client: {{reply_to}}

---
AuraForm Studio Contact Form
```

### Email Body (HTML Version):
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .section { margin: 20px 0; }
        .label { font-weight: bold; color: #667eea; }
        .value { margin-bottom: 10px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎨 New Contact Form Submission</h1>
            <p>AuraForm Studio</p>
        </div>
        <div class="content">
            <div class="section">
                <h2>👤 Client Information</h2>
                <div class="value"><span class="label">Name:</span> {{firstName}} {{lastName}}</div>
                <div class="value"><span class="label">Email:</span> <a href="mailto:{{email}}">{{email}}</a></div>
                <div class="value"><span class="label">Phone:</span> <a href="tel:{{phone}}">{{phone}}</a></div>
                <div class="value"><span class="label">Company:</span> {{company}}</div>
            </div>

            <div class="section">
                <h2>🎯 Project Details</h2>
                <div class="value"><span class="label">Service:</span> {{service}} {{servicePrice}}</div>
                <div class="value"><span class="label">Budget:</span> {{budget}}</div>
                <div class="value"><span class="label">Timeline:</span> {{timeline}}</div>
            </div>

            <div class="section">
                <h2>💭 Project Message</h2>
                <div class="message-box">{{message}}</div>
            </div>

            <div class="section">
                <p><strong>📅 Received:</strong> {{timestamp}}</p>
                <p><strong>📧 Reply to:</strong> <a href="mailto:{{email}}">{{email}}</a></p>
            </div>
        </div>
    </div>
</body>
</html>
```

## EmailJS Setup Steps:

1. **Go to EmailJS Dashboard**: https://www.emailjs.com/
2. **Navigate to Email Templates**
3. **Edit your template (template_i0hqryi)**
4. **Replace the content** with the template above
5. **Make sure these variables are present:**
   - {{firstName}}
   - {{lastName}}
   - {{email}}
   - {{phone}}
   - {{company}}
   - {{service}}
   - {{servicePrice}}
   - {{budget}}
   - {{timeline}}
   - {{message}}
   - {{timestamp}}
   - {{reply_to}}

6. **Test the template** using EmailJS test feature
7. **Save and publish**

## Common Issues & Solutions:

### Issue 1: "Failed to send email"
**Solution**: Check that all three IDs are correct:
- Public Key: J5Kh2toMbATNylY0F
- Service ID: service_t0v0vej
- Template ID: template_i0hqryi

### Issue 2: "Template not found"
**Solution**: Make sure the template ID matches exactly

### Issue 3: "Service not found"  
**Solution**: Verify your email service is properly configured in EmailJS

### Issue 4: Variables not showing in email
**Solution**: Make sure variable names in template match exactly (case-sensitive)

## Testing:
1. Open browser console (F12)
2. Submit the form
3. Check console for any error messages
4. Verify EmailJS configuration logs

## Fallback Contact:
If EmailJS continues to fail, users can contact directly:
📧 auraformstudio.business@gmail.com
📱 +91 9361411124
