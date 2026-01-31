# EmailJS Setup Guide for Contact Page

This guide will help you set up EmailJS to handle contact form submissions from your ChemDist Global website.

## Prerequisites

- An EmailJS account (free at https://www.emailjs.com/)
- Access to your email account (Gmail, Outlook, Yahoo, etc.)
- Your `.env.local` file in the project root

## Step 1: Create an EmailJS Account

1. Visit https://www.emailjs.com/
2. Click "Sign Up Free"
3. Complete the registration process
4. Verify your email address

## Step 2: Set Up Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** from the left sidebar
3. Click **Add Service**
4. Choose your email provider:
   - **Gmail** (recommended)
   - Outlook
   - Yahoo
   - Custom SMTP server
5. Follow the provider-specific instructions
6. Grant EmailJS permission to send emails from your account
7. Name your service (e.g., "ChemDist Contact Form")
8. Copy the **Service ID** (you'll need this later)

### For Gmail Users:

- You may need to generate an [App Password](https://support.google.com/accounts/answer/185833)
- Use the app password instead of your regular Gmail password

## Step 3: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Name the template (e.g., "Contact Form Submission")
4. Set up the template with the following structure:

### Email Template Variables

Copy and paste this template content:

```
Subject: New Contact Form Inquiry - {{inquiry_type}}

From: {{from_name}} <{{from_email}}>
Company: {{company}}
Language: {{locale}}

Message:
{{message}}

---
This is an automated message from ChemDist Global contact form.
Language: {{locale}}
```

### Template Variables Reference:

- `{{to_email}}` - Your email (set as default recipient)
- `{{from_name}}` - Visitor's full name
- `{{from_email}}` - Visitor's email address
- `{{company}}` - Visitor's company name
- `{{inquiry_type}}` - Type of inquiry (technical/sales/logistics/compliance)
- `{{message}}` - The contact message
- `{{locale}}` - Language locale (en/ar)

5. Save the template
6. Copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** settings (click your profile icon)
2. Navigate to the **API** tab
3. Copy your **Public Key**

## Step 5: Configure Environment Variables

1. Open or create `.env.local` in your project root
2. Add the following environment variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with your actual EmailJS credentials:

- `your_service_id_here` - Your Email Service ID
- `your_template_id_here` - Your Email Template ID
- `your_public_key_here` - Your Public Key

## Step 6: Test the Contact Form

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/en/contact` or `http://localhost:3000/ar/contact`

3. Fill out the contact form with test data

4. Click "Submit Technical Inquiry"

5. Check your email to confirm the message was received

## Email Recipients

The contact form is currently configured to send emails to `sales@chemdist-global.com`. To change the recipient:

1. Edit the `handleSubmit` function in `app/[locale]/contact/page.tsx`
2. Change the `to_email` parameter:
   ```typescript
   const templateParams = {
     to_email: "your-email@chemdist-global.com", // Change this
     // ... rest of parameters
   };
   ```

Alternatively, you can set a default recipient in your EmailJS Email Template settings.

## Troubleshooting

### Form Submission Fails

- Verify your environment variables are correctly set
- Check that your EmailJS service is active
- Ensure your email provider has authorized EmailJS

### Emails Not Being Received

- Check your spam/junk folder
- Verify the recipient email address is correct
- Check EmailJS dashboard for delivery logs

### Environment Variables Not Loading

- Make sure you're using `.env.local` (not `.env`)
- Restart your development server after adding env variables
- Check that variables start with `NEXT_PUBLIC_` to be accessible in the browser

## Rate Limiting

EmailJS has rate limits:

- **Free Plan**: 200 emails/month
- **Pro Plan**: 10,000+ emails/month

Monitor your usage in the EmailJS dashboard.

## Security Notes

- The Public Key is exposed in the browser (this is safe and expected)
- Never expose your Service ID or Template ID in client-side code
- EmailJS handles validation and security on their servers
- All data is transmitted via HTTPS

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact Support: support@emailjs.com
- Community Forum: https://github.com/emailjs-com/emailjs-sdk

## Next Steps

Once EmailJS is configured:

1. Test with different inquiry types
2. Monitor email delivery in EmailJS dashboard
3. Set up additional email templates if needed
4. Configure email forwarding for team collaboration

CONTACT FORM

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 30px;
        }
        .field {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
        }
        .field:last-of-type {
            border-bottom: none;
        }
        .field-label {
            font-weight: bold;
            color: #2563eb;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .field-value {
            color: #333;
            font-size: 14px;
        }
        .message-box {
            background-color: #f9fafb;
            border-left: 4px solid #2563eb;
            padding: 15px;
            border-radius: 4px;
            margin-top: 10px;
        }
        .inquiry-badge {
            display: inline-block;
            padding: 4px 12px;
            background-color: #2563eb;
            color: white;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: capitalize;
        }
        .footer {
            background-color: #f9fafb;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="field-label">Full Name</div>
                <div class="field-value">{{from_name}}</div>
            </div>

            <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:{{from_email}}">{{from_email}}</a></div>
            </div>

            <div class="field">
                <div class="field-label">Company</div>
                <div class="field-value">{{company}}</div>
            </div>

            <div class="field">
                <div class="field-label">Inquiry Type</div>
                <div class="field-value">
                    <span class="inquiry-badge">{{inquiry_type}}</span>
                </div>
            </div>

            <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">
                    {{message}}
                </div>
            </div>

            <div class="field">
                <div class="field-label">Language</div>
                <div class="field-value">{{locale}}</div>
            </div>
        </div>

        <div class="footer">
            <p>Received via Chemlink Trading Contact Form</p>
        </div>
    </div>

</body>
</html>
