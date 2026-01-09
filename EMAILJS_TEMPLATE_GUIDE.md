# 📧 EmailJS Template Creation Guide

## Step-by-Step: Creating Your Email Template

### Step 1: Access Email Templates

1. Log into your EmailJS dashboard at https://dashboard.emailjs.com/
2. Click on **"Email Templates"** in the left sidebar
3. Click the **"Create New Template"** button

### Step 2: Template Settings

You'll see a form with several fields. Here's exactly what to fill in:

#### **Template Name** (for your reference only)

```
Contact Form - Shantanu Solutions
```

#### **Subject Line**

```
New Contact Form Submission from {{from_name}}
```

> This will show as: "New Contact Form Submission from John Doe"

### Step 3: Email Content (Body)

Copy and paste this EXACT template into the **Content** field:

```
Hello,

You have received a new inquiry from your Shantanu Solutions website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Project Type: {{project_type}}
Budget Range: {{budget}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was automatically sent from your website contact form.
Reply directly to this email to respond to {{from_name}}.

Best regards,
Shantanu Solutions Contact System
```

### Step 4: Template Variables Explained

The `{{variable_name}}` placeholders will be automatically replaced with actual data from your form:

| Variable           | What It Shows      | Example                                 |
| ------------------ | ------------------ | --------------------------------------- |
| `{{from_name}}`    | Customer's name    | "John Doe"                              |
| `{{from_email}}`   | Customer's email   | "john@example.com"                      |
| `{{phone}}`        | Customer's phone   | "555-123-4567"                          |
| `{{project_type}}` | Type of project    | "Static Website"                        |
| `{{budget}}`       | Budget range       | "$500 - $2,000"                         |
| `{{message}}`      | Their message      | "I need a website for my restaurant..." |
| `{{to_name}}`      | Your business name | "Shantanu Solutions"                    |

### Step 5: Configure "To" Email

In the **"To email"** field, enter:

```
{{to_email}}
```

OR enter your email directly:

```
your-email@gmail.com
```

### Step 6: Configure "From" Settings

**From Name:**

```
{{from_name}} (via LaunchPad Contact Form)
```

**From Email:**

```
Use your connected email service
```

(This is automatically set from your Email Service)

**Reply To:**

```
{{from_email}}
```

> This allows you to click "Reply" and it goes directly to the customer!

### Step 7: Save Template

1. Click **"Save"** button
2. **Copy the Template ID** that appears (looks like: `template_abc123xyz`)
3. Keep this ID - you'll need it for your code!

---

## 📋 Quick Copy-Paste Template

Here's a simpler version if you prefer:

```
Subject: New Website Inquiry from {{from_name}}

Hi there!

New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project: {{project_type}}
Budget: {{budget}}

Message:
{{message}}

---
Sent from Shantanu Solutions contact form
```

---

## 🎨 Advanced: HTML Template (Optional)

For a prettier email, switch to **HTML mode** and use this:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #0284c7, #06b6d4);
        color: white;
        padding: 20px;
        border-radius: 8px 8px 0 0;
      }
      .content {
        background: #f9fafb;
        padding: 20px;
        border: 1px solid #e5e7eb;
      }
      .field {
        margin: 15px 0;
        padding: 10px;
        background: white;
        border-radius: 4px;
      }
      .label {
        font-weight: bold;
        color: #0284c7;
      }
      .footer {
        text-align: center;
        padding: 20px;
        color: #6b7280;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>🚀 New Contact Form Submission</h2>
      </div>

      <div class="content">
        <div class="field"><span class="label">Name:</span> {{from_name}}</div>

        <div class="field">
          <span class="label">Email:</span> {{from_email}}
        </div>

        <div class="field"><span class="label">Phone:</span> {{phone}}</div>

        <div class="field">
          <span class="label">Project Type:</span> {{project_type}}
        </div>

        <div class="field"><span class="label">Budget:</span> {{budget}}</div>

        <div class="field">
          <span class="label">Message:</span><br />
          {{message}}
        </div>
      </div>

      <div class="footer">Sent from Shantanu Solutions contact form</div>
    </div>
  </body>
</html>
```

---

## ✅ Testing Your Template

After saving:

1. Click **"Test it"** button in EmailJS
2. Fill in sample data
3. Send test email
4. Check your inbox!

---

## 🔧 What Goes Where - Summary

```
Template Name: Contact Form - Shantanu Solutions
Subject: New Contact Form Submission from {{from_name}}
To Email: your-email@gmail.com
From Name: {{from_name}} (via Contact Form)
Reply To: {{from_email}}

Content: [Use the template above]
```

---

## 💡 Pro Tips

1. **Always use `{{from_email}}` in Reply To** - Makes responding easy
2. **Keep subject line clear** - Helps with email filtering
3. **Test before going live** - Use the "Test it" button
4. **Save the Template ID** - You need it for your code!

---

**That's it!** Once you save the template, copy the Template ID and add it to your code in `src/components/Contact.jsx` (line 104).

Need help? The template variables MUST match exactly what's in your Contact.jsx file!
