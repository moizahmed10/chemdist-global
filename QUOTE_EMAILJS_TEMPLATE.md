# EmailJS Template for Quote Form

## Template Name

`quote_form_submission`

## Email Subject

```
New Quote Request - {{product_name}} from {{from_name}}
```

## Email Template HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family:
          -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f5f5f5;
      }
      .container {
        max-width: 700px;
        margin: 20px auto;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .header {
        background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        color: white;
        padding: 30px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
        font-weight: bold;
      }
      .section {
        padding: 20px 30px;
        border-bottom: 1px solid #eee;
      }
      .section h2 {
        color: #2563eb;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin: 0 0 15px 0;
      }
      .row {
        display: flex;
        gap: 20px;
        margin-bottom: 12px;
        flex-wrap: wrap;
      }
      .field {
        flex: 1;
        min-width: 200px;
      }
      .label {
        font-size: 11px;
        font-weight: bold;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }
      .value {
        font-size: 14px;
        color: #333;
        font-weight: 500;
      }
      .footer {
        background-color: #f9fafb;
        padding: 20px 30px;
        text-align: center;
        font-size: 12px;
        color: #666;
      }
      .highlight {
        background-color: #f0f7ff;
        padding: 15px;
        border-left: 4px solid #2563eb;
        margin: 15px 0;
      }
      a {
        color: #2563eb;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>📋 New Quote Request</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">
          Chemlink Trading - Chemical Product Quote
        </p>
      </div>

      <!-- Contact Information -->
      <div class="section">
        <h2>Contact Information</h2>
        <div class="row">
          <div class="field">
            <div class="label">Full Name</div>
            <div class="value">{{from_name}}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value">
              <a href="mailto:{{from_email}}">{{from_email}}</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="field">
            <div class="label">Company</div>
            <div class="value">{{company_name}}</div>
          </div>
          <div class="field">
            <div class="label">Phone</div>
            <div class="value">{{phone}}</div>
          </div>
        </div>
      </div>

      <!-- Product Details -->
      <div class="section">
        <h2>Product Details</h2>
        <div class="row">
          <div class="field">
            <div class="label">Product Name</div>
            <div class="value">{{product_name}}</div>
          </div>
          <div class="field">
            <div class="label">Category</div>
            <div class="value">{{product_category}}</div>
          </div>
        </div>
        <div class="row">
          <div class="field">
            <div class="label">CAS Number</div>
            <div class="value">{{cas_number}}</div>
          </div>
        </div>
      </div>

      <!-- Quantity & Delivery -->
      <div class="section">
        <h2>Quantity & Delivery</h2>
        <div class="row">
          <div class="field">
            <div class="label">Quantity Required</div>
            <div class="value">{{quantity}} {{quantity_unit}}</div>
          </div>
          <div class="field">
            <div class="label">Packaging Preference</div>
            <div class="value">{{packaging}}</div>
          </div>
        </div>
        <div class="row">
          <div class="field">
            <div class="label">Delivery Date</div>
            <div class="value">{{delivery_date}}</div>
          </div>
          <div class="field">
            <div class="label">Frequency</div>
            <div class="value">{{frequency}}</div>
          </div>
        </div>
      </div>

      <!-- Delivery Address -->
      <div class="section">
        <h2>Delivery Location</h2>
        <div class="row">
          <div class="field">
            <div class="label">Country</div>
            <div class="value">{{country}}</div>
          </div>
          <div class="field">
            <div class="label">City/Postal</div>
            <div class="value">{{city}}</div>
          </div>
        </div>
        <div class="row">
          <div class="field" style="flex: 1 1 100%;">
            <div class="label">Address</div>
            <div class="value">{{address}}</div>
          </div>
        </div>
      </div>

      <!-- Application & Notes -->
      <div class="section">
        <h2>Additional Information</h2>
        <div class="label">Application</div>
        <div class="value" style="margin-bottom: 15px;">{{application}}</div>

        <div class="label">Special Notes</div>
        <div class="highlight">{{notes}}</div>

        <div class="label">Required Documents</div>
        <div class="value">{{required_docs}}</div>
      </div>

      <div class="section">
        <div class="label">Submitted Language</div>
        <div class="value">{{locale}}</div>
      </div>

      <div class="footer">
        <p>
          This quote request was submitted through Chemlink Trading's automated
          quote system.
        </p>
        <p style="margin: 10px 0 0 0; color: #999;">
          Please respond within 24 hours.
        </p>
      </div>
    </div>
  </body>
</html>
```

## Setup Instructions

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) → **Email Templates**
2. Click **Create New Template**
3. Name it: `quote_form_submission`
4. Set **Subject** to: `New Quote Request - {{product_name}} from {{from_name}}`
5. Copy and paste the HTML template above into the **Content** field
6. Click **Save**
7. Copy the **Template ID** (format: `template_xxxxx`)

## Environment Variables

Update your `.env.local` file with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
```

## Template Variables Reference

| Variable           | Source          | Description                                |
| ------------------ | --------------- | ------------------------------------------ |
| `to_email`         | Hardcoded       | Recipient email (info@chemlinktrading.com) |
| `from_name`        | Form Input      | Visitor's full name                        |
| `from_email`       | Form Input      | Visitor's email address                    |
| `company_name`     | Form Input      | Visitor's company name                     |
| `phone`            | Form Input      | Contact phone number                       |
| `product_name`     | Form Select     | Selected product name                      |
| `product_category` | Form Select     | Product category                           |
| `cas_number`       | Form State      | CAS number (auto-filled)                   |
| `application`      | Form Input      | Product application/use case               |
| `quantity`         | Form Input      | Quantity amount                            |
| `quantity_unit`    | Form Input      | Unit of measurement                        |
| `packaging`        | Form Input      | Packaging preference                       |
| `frequency`        | Form Input      | Order frequency                            |
| `delivery_date`    | Form Input      | Requested delivery date                    |
| `country`          | Form Select     | Delivery country                           |
| `city`             | Form Input      | City/Postal code                           |
| `address`          | Form Input      | Delivery address                           |
| `notes`            | Form Textarea   | Additional notes/special requests          |
| `required_docs`    | Form Checkboxes | Comma-separated required documents         |
| `locale`           | Auto            | Language (en/ar)                           |

## Testing

1. Restart your dev server: `npm run dev`
2. Navigate to the quote page
3. Fill out the form with test data
4. Submit the form
5. Check your email to verify the template works correctly

## Notes

- This template uses only simple variable substitution (no complex conditionals)
- All styling is inline to ensure compatibility across email clients
- The template is responsive and mobile-friendly
- Empty fields will show "Not specified" or "None selected"
