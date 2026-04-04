# EmailJS Setup Guide for Crystal Salon

## 📧 Email Notification Setup

This guide will help you set up EmailJS to send booking confirmation emails from your React salon website.

---

## 🔧 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

---

## ⚙️ Step 2: Connect Your Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account:
   - **Email**: `androjebina2005@gmail.com`
   - **Password**: Your email password (or app password for Gmail)
5. Give it a name like "Crystal Salon Email"
6. Save the service

**Note**: Your Service ID will be displayed after saving.

---

## 📝 Step 3: Create Email Templates

### Template 1: Salon Owner Notification

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up the template:

**Template Name**: `salon_owner_booking`

**To Email**: `androjebina2005@gmail.com`

**Subject**:
```
New Booking: {{service}} - {{customer_name}}
```

**HTML Body**:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .header { background: linear-gradient(135deg, #6C63FF, #FF6F91); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .booking-details { background: #f8f9ff; padding: 15px; border-radius: 10px; margin: 20px 0; }
        .highlight { color: #6C63FF; font-weight: bold; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎉 New Booking Received!</h1>
        <p>Crystal Salon - Booking Management System</p>
    </div>

    <div class="content">
        <h2>Booking Details:</h2>

        <div class="booking-details">
            <p><strong>Customer Name:</strong> <span class="highlight">{{customer_name}}</span></p>
            <p><strong>Email:</strong> {{customer_email}}</p>
            <p><strong>Phone:</strong> {{customer_phone}}</span></p>
            <p><strong>Service:</strong> <span class="highlight">{{service}}</span></p>
            <p><strong>Date:</strong> {{date}}</p>
            <p><strong>Time:</strong> {{time}}</p>
            <p><strong>Booking Date:</strong> {{booking_date}}</p>
        </div>

        <p>Please contact the customer to confirm the appointment.</p>
        <p>Best regards,<br>Crystal Salon System</p>
    </div>
</body>
</html>
```

**Template Variables** (copy these exactly):
- `{{customer_name}}`
- `{{customer_email}}`
- `{{customer_phone}}`
- `{{service}}`
- `{{date}}`
- `{{time}}`
- `{{booking_date}}`

---

### Template 2: Customer Confirmation

1. Create another new template

**Template Name**: `customer_confirmation`

**To Email**: `{{to_email}}` (This will be the customer's email)

**Subject**:
```
Booking Confirmed - Crystal Salon
```

**HTML Body**:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .header { background: linear-gradient(135deg, #6C63FF, #FF6F91); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .booking-details { background: #f8f9ff; padding: 15px; border-radius: 10px; margin: 20px 0; }
        .highlight { color: #6C63FF; font-weight: bold; }
        .contact-info { background: #1A1A2E; color: white; padding: 15px; border-radius: 10px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎉 Booking Confirmed!</h1>
        <p>Thank you for choosing Crystal Salon</p>
    </div>

    <div class="content">
        <h2>Dear {{to_name}},</h2>

        <p>Your appointment has been successfully booked! We're excited to serve you.</p>

        <div class="booking-details">
            <h3>Your Booking Details:</h3>
            <p><strong>Service:</strong> <span class="highlight">{{service}}</span></p>
            <p><strong>Date:</strong> {{date}}</p>
            <p><strong>Time:</strong> {{time}}</p>
        </div>

        <div class="contact-info">
            <h4>📍 Salon Information:</h4>
            <p><strong>Address:</strong> {{salon_address}}</p>
            <p><strong>Phone:</strong> {{salon_contact}}</p>
            <p><strong>Email:</strong> androjebina2005@gmail.com</p>
        </div>

        <p><strong>Important Notes:</strong></p>
        <ul>
            <li>Please arrive 10 minutes before your appointment</li>
            <li>Bring any relevant medical information if applicable</li>
            <li>Contact us if you need to reschedule or cancel</li>
        </ul>

        <p>We look forward to seeing you!</p>
        <p>Warm regards,<br><strong>Crystal Salon Team</strong></p>
    </div>
</body>
</html>
```

**Template Variables** (copy these exactly):
- `{{to_name}}`
- `{{to_email}}`
- `{{service}}`
- `{{date}}`
- `{{time}}`
- `{{salon_address}}`
- `{{salon_contact}}`

---

## 🔑 Step 4: Get Your API Keys

1. In your EmailJS dashboard, go to "Account"
2. Copy your **Public Key** (this is your USER ID)

---

## ⚙️ Step 5: Update Your React Code

In your `src/pages/Booking.jsx` file, make sure the EmailJS values are loaded from Vite environment variables.

Create a local `.env` or `.env.local` file with these keys:

```bash
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_OWNER_TEMPLATE_ID=salon_owner_booking
VITE_EMAILJS_USER_TEMPLATE_ID=customer_confirmation
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

Then restart the development server so Vite picks up the new env values.

---

## 🧪 Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Fill out the booking form with your email
3. Submit the form
4. Check both emails:
   - Your salon email should receive the booking notification
   - Your test email should receive the confirmation

---

## 🚨 Important Notes

### EmailJS Free Plan Limitations:
- 200 emails per month
- 50 emails per day
- Rate limit: 1 email per 3 seconds

### Security Considerations:
- Never expose your EmailJS credentials in client-side code for production
- Consider using environment variables for sensitive data
- For production apps, implement server-side email sending

### Troubleshooting:
- **Emails not sending**: Check your EmailJS dashboard for error logs
- **Templates not working**: Verify template variable names match exactly
- **Service connection failed**: Reconnect your email service in EmailJS

---

## 🔄 Alternative Solutions (For Production)

For production applications, consider these alternatives:

1. **Backend API**: Create a Node.js/Express server with Nodemailer
2. **Email Service Providers**: SendGrid, Mailgun, AWS SES
3. **Firebase Functions**: Serverless email sending
4. **Netlify Functions**: Serverless functions for form handling

---

## 📞 Support

If you encounter issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Verify all IDs and keys are correct
3. Test with EmailJS dashboard's "Test Email" feature
4. Check browser console for JavaScript errors

---

*Happy emailing! 📧✨*