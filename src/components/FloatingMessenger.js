import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const FloatingMessenger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! 👋 I'm AuraBot, your AI-powered assistant for AuraForm Studio. I'm here to help you learn about our creative services, portfolio, pricing, and how we can bring your vision to life. What would you like to know?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Website knowledge base for the AI
    const websiteContext = `
    You are AuraBot, an AI assistant for AuraForm Studio. You should ONLY answer questions about AuraForm Studio and redirect users back to the website topics if they ask about anything else.

    AURAFORM STUDIO INFORMATION:
    
    SERVICES:
    - Logo Design (custom icon creation, multiple variations, vector files, brand guidelines) - Starting at ₹219
    - AI Design (AI-generated concepts, smart design automation, intelligent variations, rapid prototyping) - Starting at ₹249
    - Creative Design (custom illustrations, digital artwork, creative concepts) - Starting at ₹419
    - Poster Design (event posters, movie posters, promotional materials) - Starting at ₹249
    - Photo Collage Design (custom layouts, photo enhancement, creative composition) - Starting at ₹209
    - Greeting Card Design (holiday cards, birthday cards, custom messages) - Starting at ₹349
    - Invitation Design (wedding invitations, party invitations, corporate events) - Starting at ₹349
    - Business Card Design (double-sided design, premium finishes, QR code integration) - Starting at ₹249
    - Creative Consulting (creative strategy, concept development, design direction) - Starting at ₹449
    - Video Editing (professional editing, color correction, sound enhancement, motion graphics) - Starting at ₹449
    - Animation (2D animation, motion graphics, logo animation, explainer videos) - Starting at ₹349
    - Frontend Development (React development, responsive design, SEO optimization, performance tuning) - Starting at ₹999
    
    ABOUT THE COMPANY:
    - AuraForm Studio is a creative design agency
    - Dedicated to transforming visions into stunning digital experiences
    - Combines artistic creativity with technical excellence
    - Passionate team helping businesses bring creative ideas to life
    - Located in Design Realm, Creative District
    
    CONTACT INFORMATION:
    - Phone: +1 (555) 123-4567
    - Email: hello@auraformstudio.com
    - Hours: Monday - Friday, 9AM - 6PM
    - Location: Design Realm, Creative District
    - Virtual meetings available
    - Response time: Within 24 hours
    
    PORTFOLIO:
    - Diverse projects including modern websites and brand identities
    - Showcases commitment to creativity and excellence
    - Available in the Gallery section of the website
    - Examples of work with various clients and industries
    
    PRICING STRUCTURE:
    - Starter projects: Great for small businesses
    - Professional packages: Comprehensive solutions
    - Enterprise solutions: Full-scale projects
    - Custom quotes based on project requirements
    - Flexible packages to suit different budgets
    
    PROJECT PROCESS:
    1. Initial Consultation (1-2 days)
    2. Concept Development (3-5 days)
    3. Design & Development (1-4 weeks)
    4. Review & Refinements (3-5 days)
    5. Final Delivery
    
    TECHNOLOGIES USED:
    - Frontend: React, HTML5, CSS3, JavaScript
    - Design: Adobe Creative Suite, Figma
    - Development: Modern frameworks and tools
    - Hosting: Reliable cloud solutions
    
    IMPORTANT: If users ask about topics unrelated to AuraForm Studio, politely redirect them back to questions about the company's services, portfolio, pricing, or contact information. Always maintain a friendly, professional tone and use emojis appropriately.
    `;

    // Function to call OpenRouter API
    const getAIResponse = async (userMessage, conversationHistory) => {
        try {
            const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
                model: "meta-llama/llama-3.2-3b-instruct:free",
                messages: [
                    {
                        role: "system",
                        content: websiteContext
                    },
                    ...conversationHistory.slice(-6).map(msg => ({
                        role: msg.sender === 'user' ? 'user' : 'assistant',
                        content: msg.text
                    })),
                    {
                        role: "user",
                        content: userMessage
                    }
                ],
                max_tokens: 300,
                temperature: 0.7
            }, {
                headers: {
                    'Authorization': 'Bearer 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',
                    'Content-Type': 'application/json'
                }
            });

            return response.data.choices[0].message.content;
        } catch (error) {
            console.error('API Error:', error);
            return getFallbackResponse(userMessage);
        }
    };

    // Fallback responses if API fails
    const getFallbackResponse = (message) => {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offer')) {
            return "� AuraForm Studio offers comprehensive creative services:\n\n• Web Design & Development\n• Brand Identity & Logo Design\n• UI/UX Design\n• Digital Marketing\n• Creative Consultation\n\nWe specialize in creating stunning, modern designs that capture your brand's essence. What specific service interests you most?";
        }
        
        if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
            return "📞 Here's how to reach AuraForm Studio:\n\n• Phone: +1 (555) 123-4567\n• Email: hello@auraformstudio.com\n• Hours: Monday - Friday, 9AM - 6PM\n• Location: Design Realm, Creative District\n\nWe respond within 24 hours and offer virtual meetings!";
        }
        
        if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
            return "💰 Our flexible pricing options:\n\n• Starter projects: Perfect for small businesses\n• Professional packages: Comprehensive solutions\n• Enterprise solutions: Full-scale projects\n\nEach project gets a custom quote based on your specific needs. Contact us for a personalized estimate!";
        }
        
        return "� I'd love to help you learn more about AuraForm Studio! I can tell you about our services, portfolio, pricing, contact information, or project process. What would you like to know?";
    };

    const handleSendMessage = async () => {
        if (inputMessage.trim() === '') return;

        // Add user message
        const userMessage = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputMessage;
        setInputMessage('');
        setIsTyping(true);

        try {
            // Get AI response
            const aiResponse = await getAIResponse(currentInput, messages);
            
            const botResponse = {
                id: Date.now() + 1,
                text: aiResponse,
                sender: 'bot',
                timestamp: new Date()
            };
            
            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            const errorResponse = {
                id: Date.now() + 1,
                text: "I apologize, but I'm experiencing some technical difficulties. Please try asking about AuraForm Studio's services, portfolio, or contact information, and I'll do my best to help!",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorResponse]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const quickButtons = [
        "What services do you offer?",
        "Tell me about your portfolio",
        "How can I contact you?",
        "What are your pricing options?",
        "What's your project process?"
    ];

    const handleQuickButton = (question) => {
        if (inputMessage.trim() === '') {
            setInputMessage(question);
            setTimeout(() => handleSendMessage(), 100);
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <div className={`floating-messenger ${isOpen ? 'open' : ''}`}>
                <div 
                    className="messenger-icon" 
                    onClick={toggleChat}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                        src={isHovered ? "/logos/hover.png" : "/logos/peek.png"}
                        alt="AuraBot" 
                        className="bot-image"
                    />
                    <div className="pulse-ring"></div>
                </div>
                {!isOpen && <div className="messenger-tooltip">AuraBot</div>}
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="chat-header-info">
                            <div className="bot-avatar">🤖</div>
                            <div>
                                <h4>AuraBot AI</h4>
                                <span>Powered by AI • Always ready to help</span>
                            </div>
                        </div>
                        <button className="close-chat" onClick={toggleChat}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((message) => (
                            <div key={message.id} className={`message ${message.sender}`}>
                                <div className="message-content">
                                    {message.text.split('\n').map((line, index) => (
                                        <div key={index}>{line}</div>
                                    ))}
                                </div>
                                <div className="message-time">
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        ))}
                        
                        {isTyping && (
                            <div className="message bot">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Action Buttons */}
                    {messages.length === 1 && (
                        <div className="quick-buttons">
                            <div className="quick-buttons-header">
                                <span>Quick questions:</span>
                            </div>
                            {quickButtons.map((button, index) => (
                                <button 
                                    key={index} 
                                    className="quick-button"
                                    onClick={() => handleQuickButton(button)}
                                >
                                    {button}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="chat-input">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything about AuraForm Studio..."
                            className="message-input"
                            disabled={isTyping}
                        />
                        <button 
                            onClick={handleSendMessage}
                            className="send-button"
                            disabled={inputMessage.trim() === '' || isTyping}
                        >
                            {isTyping ? (
                                <i className="fas fa-circle-notch fa-spin"></i>
                            ) : (
                                <i className="fas fa-paper-plane"></i>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingMessenger;
