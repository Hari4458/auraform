/**
 * AuraForm Contact Form Email Handler
 * Google Apps Script for processing contact form submissions
 */

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Send email notification
    const emailSent = sendContactEmail(data);
    
    if (emailSent) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      throw new Error('Failed to send email');
    }
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'There was an error processing your request. Please try again.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'AuraForm Contact Form API is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Send contact form email
 */
function sendContactEmail(formData) {
  try {
    const recipient = 'auraformstudio.business@gmail.com'; // Your business email
    const subject = `New Contact Form Submission - ${formData.service || 'General Inquiry'}`;
    
    // Generate email content
    const emailHtml = generateEmailTemplate(formData);
    const emailText = generatePlainTextEmail(formData);
    
    // Send email
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: emailHtml,
      body: emailText,
      replyTo: formData.email
    });
    
    // Optional: Send confirmation email to client
    sendConfirmationEmail(formData);
    
    // Log the submission (optional)
    logSubmission(formData);
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Send confirmation email to the client
 */
function sendConfirmationEmail(formData) {
  try {
    const subject = 'Thank you for contacting AuraForm Studio!';
    const confirmationHtml = generateConfirmationTemplate(formData);
    
    MailApp.sendEmail({
      to: formData.email,
      subject: subject,
      htmlBody: confirmationHtml,
      name: 'AuraForm Studio'
    });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}

/**
 * Log submission to Google Sheets (optional)
 */
function logSubmission(formData) {
  try {
    // You can create a Google Sheet to log all submissions
    // const sheetId = 'YOUR_SHEET_ID'; // Replace with your Google Sheet ID
    // const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // const timestamp = new Date();
    // sheet.appendRow([
    //   timestamp,
    //   formData.firstName,
    //   formData.lastName,
    //   formData.email,
    //   formData.phone,
    //   formData.company,
    //   formData.service,
    //   formData.budget,
    //   formData.timeline,
    //   formData.message
    // ]);
    
    console.log('Submission logged:', formData);
  } catch (error) {
    console.error('Error logging submission:', error);
  }
}
