/**
 * Email Template Generator for AuraForm Contact Form
 */

/**
 * Generate HTML email template for business notification
 */
function generateEmailTemplate(formData) {
  const servicePrice = getServicePrice(formData.service);
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - AuraForm Studio</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .email-container {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            .header {
                background: rgba(255,255,255,0.1);
                padding: 30px;
                text-align: center;
                color: white;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: bold;
            }
            .content {
                background: white;
                padding: 40px;
            }
            .section {
                margin-bottom: 30px;
            }
            .section h2 {
                color: #667eea;
                font-size: 20px;
                margin-bottom: 15px;
                border-bottom: 2px solid #667eea;
                padding-bottom: 5px;
            }
            .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 20px;
            }
            .info-item {
                background: #f8f9ff;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #667eea;
            }
            .info-item strong {
                color: #333;
                display: block;
                margin-bottom: 5px;
            }
            .message-box {
                background: #f8f9ff;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #667eea;
                margin-top: 15px;
            }
            .priority {
                background: #fff3cd;
                border-left-color: #ffc107;
                padding: 15px;
                border-radius: 8px;
                margin-top: 15px;
            }
            .footer {
                background: #333;
                color: white;
                padding: 20px;
                text-align: center;
            }
            @media (max-width: 600px) {
                .info-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>🎨 New Contact Form Submission</h1>
                <p>AuraForm Studio - Design Adventure Awaits!</p>
            </div>
            
            <div class="content">
                <div class="section">
                    <h2>👤 Client Information</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Name:</strong>
                            ${formData.firstName} ${formData.lastName}
                        </div>
                        <div class="info-item">
                            <strong>Email:</strong>
                            <a href="mailto:${formData.email}">${formData.email}</a>
                        </div>
                        ${formData.phone ? `
                        <div class="info-item">
                            <strong>Phone:</strong>
                            <a href="tel:${formData.phone}">${formData.phone}</a>
                        </div>
                        ` : ''}
                        ${formData.company ? `
                        <div class="info-item">
                            <strong>Organization:</strong>
                            ${formData.company}
                        </div>
                        ` : ''}
                    </div>
                </div>

                <div class="section">
                    <h2>🎯 Project Details</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Service Type:</strong>
                            ${formData.service}${servicePrice ? ` (${servicePrice})` : ''}
                        </div>
                        ${formData.budget ? `
                        <div class="info-item">
                            <strong>Budget Range:</strong>
                            ${formData.budget}
                        </div>
                        ` : ''}
                        ${formData.timeline ? `
                        <div class="info-item">
                            <strong>Timeline:</strong>
                            ${formData.timeline}
                        </div>
                        ` : ''}
                    </div>
                    
                    ${formData.timeline === 'urgent' ? `
                    <div class="priority">
                        <strong>⚡ URGENT PROJECT - Rush Fee Applies</strong>
                        <p>Client has requested ASAP delivery. Priority handling required.</p>
                    </div>
                    ` : ''}
                </div>

                <div class="section">
                    <h2>💭 Project Vision</h2>
                    <div class="message-box">
                        <strong>Client's Message:</strong>
                        <p>${formData.message.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>

                <div class="section">
                    <h2>⚡ Quick Actions</h2>
                    <p>
                        <a href="mailto:${formData.email}?subject=Re: Your AuraForm Design Project&body=Hi ${formData.firstName},%0D%0A%0D%0AThank you for reaching out to AuraForm Studio! I've reviewed your project requirements and I'm excited to help bring your vision to life.%0D%0A%0D%0ABest regards,%0D%0AAuraForm Studio Team" 
                           style="background: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; display: inline-block; margin-right: 10px;">
                            📧 Reply to Client
                        </a>
                        ${formData.phone ? `
                        <a href="https://wa.me/${formData.phone.replace(/[^0-9]/g, '')}?text=Hi ${formData.firstName}! Thank you for contacting AuraForm Studio. I'd love to discuss your ${formData.service} project with you." 
                           style="background: #25d366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; display: inline-block;">
                            💬 WhatsApp
                        </a>
                        ` : ''}
                    </p>
                </div>
            </div>
            
            <div class="footer">
                <p>📧 Submission received at ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}</p>
                <p>🌟 AuraForm Studio - Where Creativity Meets Excellence</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text email for business notification
 */
function generatePlainTextEmail(formData) {
  const servicePrice = getServicePrice(formData.service);
  
  return `
🎨 NEW CONTACT FORM SUBMISSION - AURAFORM STUDIO

👤 CLIENT INFORMATION
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.company ? `Organization: ${formData.company}` : ''}

🎯 PROJECT DETAILS
Service Type: ${formData.service}${servicePrice ? ` (${servicePrice})` : ''}
${formData.budget ? `Budget Range: ${formData.budget}` : ''}
${formData.timeline ? `Timeline: ${formData.timeline}` : ''}

${formData.timeline === 'urgent' ? '⚡ URGENT PROJECT - Rush Fee Applies\n' : ''}

💭 PROJECT VISION
${formData.message}

📧 Submission received at ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}

---
AuraForm Studio - Where Creativity Meets Excellence
  `;
}

/**
 * Generate confirmation email template for client
 */
function generateConfirmationTemplate(formData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting AuraForm Studio!</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .email-container {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            .header {
                background: rgba(255,255,255,0.1);
                padding: 40px;
                text-align: center;
                color: white;
            }
            .header h1 {
                margin: 0;
                font-size: 32px;
                font-weight: bold;
            }
            .content {
                background: white;
                padding: 40px;
            }
            .highlight-box {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 25px;
                border-radius: 10px;
                text-align: center;
                margin: 25px 0;
            }
            .info-section {
                background: #f8f9ff;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #667eea;
                margin: 20px 0;
            }
            .social-links {
                text-align: center;
                margin: 30px 0;
            }
            .social-links a {
                display: inline-block;
                margin: 0 10px;
                padding: 10px 20px;
                background: #667eea;
                color: white;
                text-decoration: none;
                border-radius: 25px;
                transition: all 0.3s ease;
            }
            .footer {
                background: #333;
                color: white;
                padding: 30px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>🎨 Thank You!</h1>
                <p>Your design adventure begins now</p>
            </div>
            
            <div class="content">
                <h2>Hi ${formData.firstName}! 👋</h2>
                
                <p>Thank you for reaching out to <strong>AuraForm Studio</strong>! We're thrilled that you're considering us for your <strong>${formData.service}</strong> project.</p>
                
                <div class="highlight-box">
                    <h3>🚀 What happens next?</h3>
                    <p>We'll review your project details and get back to you within <strong>24 hours</strong> with a personalized proposal and next steps.</p>
                </div>
                
                <div class="info-section">
                    <h3>📋 Your Project Summary</h3>
                    <p><strong>Service:</strong> ${formData.service}</p>
                    ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ''}
                    ${formData.timeline ? `<p><strong>Timeline:</strong> ${formData.timeline}</p>` : ''}
                    <p><strong>Vision:</strong> ${formData.message.substring(0, 150)}${formData.message.length > 150 ? '...' : ''}</p>
                </div>

                <p>In the meantime, feel free to:</p>
                <ul>
                    <li>🎨 Check out our <a href="https://auraform.studio/gallery" style="color: #667eea;">latest work</a></li>
                    <li>📱 Follow us on social media for daily inspiration</li>
                    <li>💬 Message us on WhatsApp for immediate queries</li>
                </ul>

                <div class="social-links">
                    <a href="https://www.instagram.com/auraform_studio">📸 Instagram</a>
                    <a href="https://wa.me/919361411124">💬 WhatsApp</a>
                    <a href="https://in.linkedin.com/in/auraform-studio-967967377">💼 LinkedIn</a>
                </div>

                <p>We're excited to bring your vision to life! 🌟</p>
                
                <p>Best regards,<br>
                <strong>The AuraForm Studio Team</strong><br>
                📧 auraformstudio.business@gmail.com<br>
                📞 +91 9361411124</p>
            </div>
            
            <div class="footer">
                <p>🌟 AuraForm Studio - Where Creativity Meets Excellence</p>
                <p><a href="https://auraform.studio" style="color: #667eea;">auraform.studio</a></p>
            </div>
        </div>
    </body>
    </html>
  `;
}

/**
 * Get service price based on service type
 */
function getServicePrice(service) {
  const prices = {
    'logo': '₹219',
    'ai-design': '₹249',
    'creative': '₹419',
    'poster': '₹249',
    'collage': '₹209',
    'greeting': '₹349',
    'invitation': '₹349',
    'business': '₹249',
    'consulting': '₹449',
    'video': '₹449',
    'animation': '₹349',
    'frontend': '₹999'
  };
  
  return prices[service] || null;
}
