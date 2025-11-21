# WiFi Network Setup Guide - AuraForm Studio

## Quick Start

Your React app is now configured to be accessible on your WiFi network! Follow these steps:

### Method 1: Using the WiFi Script (Recommended)
1. **Double-click** `start-wifi.bat` to launch the server
2. The script will automatically:
   - Find your local IP address
   - Start the development server on 0.0.0.0:3000
   - Display your network URL

### Method 2: Using Command Line
1. Open Command Prompt or PowerShell
2. Navigate to your project folder
3. Run: `npm start` or `npm run dev`
4. The server will automatically bind to your local IP

## Accessing Your App

Once the server is running, you'll see:
- **Local access**: http://localhost:3000
- **Network access**: http://[YOUR-IP]:3000

### Finding Your IP Address
- **Windows**: Open Command Prompt and type `ipconfig`
- **Mac/Linux**: Open Terminal and type `ifconfig` or `ip addr`

## Connecting Other Devices

1. **Ensure all devices are on the same WiFi network**
2. **On your phone/tablet/other computer**:
   - Open a web browser
   - Enter: `http://[YOUR-IP]:3000`
   - Replace `[YOUR-IP]` with your actual IP address

## Troubleshooting

### Firewall Issues
- **Windows**: Allow Node.js through Windows Firewall
- **Mac**: Allow incoming connections in Security & Privacy settings

### Port Already in Use
- Change the port in `.env` file: `PORT=3001`
- Restart the server

### Can't Access from Other Devices
1. Check that all devices are on the same WiFi
2. Verify the IP address is correct
3. Ensure firewall allows connections on port 3000
4. Try disabling VPN if using one

## Example URLs
If your computer's IP is `192.168.1.100`, other devices should visit:
```
http://192.168.1.100:3000
```

## Security Note
This setup is intended for local development only. The development server is not suitable for production use.
