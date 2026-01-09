# EmailJS Setup Guide for Shantanu Solutions

## Quick Setup (5 Minutes)

Follow these steps to get your contact form sending real emails:

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE)
3. Sign up with your email or Google account

### Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Click **Connect Account** and authorize EmailJS
5. **Copy the Service ID** (looks like: `service_abc1234`)

### Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

You have a new inquiry from your website!

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project Type: {{project_type}}
Budget: {{budget}}

Message:
{{message}}

---
This email was sent from your Shantanu Solutions contact form.
```

4. **Copy the Template ID** (looks like: `template_xyz5678`)

### Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (looks like: `AbCdEfGhIjKlMnOp`)
3. **Copy the Public Key**

### Step 5: Update Your Website

1. Open the file: `src/components/Contact.jsx`
2. Find these lines (around line 98-100):

```javascript
const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key
```

3. Replace with your actual values:

```javascript
const serviceId = "service_abc1234"; // Your Service ID from Step 2
const templateId = "template_xyz5678"; // Your Template ID from Step 3
const publicKey = "AbCdEfGhIjKlMnOp"; // Your Public Key from Step 4
```

4. Save the file

### Step 6: Test Your Form

1. Make sure your dev server is running (`npm run dev`)
2. Go to http://localhost:5173/
3. Scroll to the contact form
4. Fill out all fields with test data
5. Click "Send Message"
6. Check your email inbox - you should receive the form submission!

## Email Template Variables

Your template can use these variables:

- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone number
- `{{project_type}}` - Type of project they selected
- `{{budget}}` - Budget range they selected
- `{{message}}` - Their detailed message
- `{{to_name}}` - Your business name (Shantanu Solutions)

## Optional: Auto-Reply to Customers

Want to send an automatic "Thank you" email to customers?

1. Create a **second template** in EmailJS
2. Use this content:

```
Subject: Thank you for contacting Shantanu Solutions!

Hi {{from_name}},

Thank you for reaching out to us! We've received your inquiry about {{project_type}}.

We'll review your message and get back to you within 24 hours.

In the meantime, feel free to check out our portfolio at [your website URL].

Best regards,
Shantanu Solutions Team

---
This is an automated response. Please do not reply to this email.
```

3. Add this code after the first `emailjs.send()` in Contact.jsx:

```javascript
// Send auto-reply to customer
await emailjs.send(
  serviceId,
  "template_autoreply_id", // Your auto-reply template ID
  {
    to_email: formData.email,
    to_name: formData.name,
    from_name: "Shantanu Solutions",
    project_type: formData.projectType,
  },
  publicKey
);
```

## Free Tier Limits

EmailJS Free Plan includes:

- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ All email providers
- ✅ No credit card required

If you need more, upgrade to:

- **Personal Plan**: $7/month - 1,000 emails
- **Professional Plan**: $15/month - 5,000 emails

## Troubleshooting

### "Failed to send email"

- Check that your Service ID, Template ID, and Public Key are correct
- Make sure you authorized your email account in EmailJS
- Check the browser console for specific error messages

### "Email not received"

- Check your spam/junk folder
- Verify the email address in your EmailJS service settings
- Test with a different email address

### "Template variables not showing"

- Make sure variable names match exactly (case-sensitive)
- Use double curly braces: `{{variable_name}}`
- Check for typos in variable names

## Security Note

The Public Key is safe to use in frontend code - it's designed for client-side use. Your email credentials are never exposed.

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**That's it!** Your contact form is now fully functional and will send you emails for every inquiry. 🎉
