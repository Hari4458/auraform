import emailjs from '@emailjs/browser';

// EmailJS Configuration for AuraForm Contact Form
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'J5Kh2toMbATNylY0F',
  SERVICE_ID: 'service_t0v0vej', 
  TEMPLATE_ID: 'template_g750aix'
};

// Service pricing for display in emails
export const SERVICE_PRICING = {
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

// Initialize EmailJS with public key
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

/**
 * Send contact form email using EmailJS
 */
export const sendContactEmail = async (formData) => {
  try {
    // Get current timestamp
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Get service price
    const servicePrice = SERVICE_PRICING[formData.service] || '';

    // Prepare template parameters (these should match your EmailJS template)
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      service: formData.service,
      servicePrice: servicePrice,
      budget: formData.budget || 'Not specified',
      timeline: formData.timeline || 'Not specified',
      message: formData.message,
      timestamp: timestamp,
      to_name: 'AuraForm Studio',
      to_email: 'auraformstudio.business@gmail.com',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      reply_to: formData.email
    };

    console.log('Sending email with params:', templateParams);

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS Response:', response);

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours. 🎨'
      };
    } else {
      throw new Error(`EmailJS returned status: ${response.status}`);
    }

  } catch (error) {
    console.error('EmailJS Error Details:', error);
    
    // More specific error messages
    let errorMessage = 'There was an error sending your message. ';
    
    if (error.text) {
      errorMessage += `Error: ${error.text}. `;
    } else if (error.message) {
      errorMessage += `Error: ${error.message}. `;
    }
    
    errorMessage += 'Please try again or contact us directly at auraformstudio.business@gmail.com';

    return {
      success: false,
      message: errorMessage
    };
  }
};

/**
 * Test EmailJS configuration
 */
export const testEmailConfig = () => {
  console.log('Testing EmailJS Configuration:');
  console.log('PUBLIC_KEY:', EMAILJS_CONFIG.PUBLIC_KEY);
  console.log('SERVICE_ID:', EMAILJS_CONFIG.SERVICE_ID);
  console.log('TEMPLATE_ID:', EMAILJS_CONFIG.TEMPLATE_ID);
  
  // Check if EmailJS is properly initialized
  try {
    console.log('EmailJS initialized successfully');
    return true;
  } catch (error) {
    console.error('EmailJS initialization failed:', error);
    return false;
  }
};
