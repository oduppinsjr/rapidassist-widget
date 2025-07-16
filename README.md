# 📄 Web Contact Widget (RapidAssist)

A lightweight, floating website contact widget for quickly connecting customers to a dispatch team — designed for roadside assistance, towing companies, and other service-based businesses.

This widget is hosted on **Google App Engine** and can be embedded into any website via a simple script include.

---

## 📌 Features

- Floating widget docked to the bottom-right corner of any website
- Responsive design for desktop and mobile users
- Customizable call-to-action text
- Pop-up form collects:
  - Customer name
  - Contact information
  - Vehicle make & model (or other service-specific details)
  - Message notes

- Sends form submissions to a designated dispatch or service team email address  
- Securely hosted on **Google App Engine**

---

## 📂 Deployment

1. Deploy the provided code to a new Google App Engine project.
2. Configure your email endpoint and environment variables as needed.
3. Deploy the application using the Google Cloud CLI or Google Cloud Console.
4. Copy the public App Engine URL for your deployed app.
5. Add the provided embed script to your website’s header or footer, pointing to your App Engine-hosted widget.

---

## ⚙️ Usage

- Website visitors click the floating widget icon to open the form.
- Submitted details are transmitted securely to your configured dispatch email address.
- Designed for seamless operation on both desktop and mobile browsers.

---

## 📌 Security & Privacy

- No customer data is permanently stored on the server.
- All form submissions are transmitted securely via your Google App Engine environment to a designated email address.
- Ensure your App Engine project and associated email services are properly secured and monitored.

---

## 📃 License

This project is provided for demonstration and educational purposes only.  
All rights reserved © 2025 Odell Duppins.

See [LICENSE.md](./LICENSE.md) for usage terms.

---

## 📌 About

**RapidAssist** (internal codename) is the product branding for this widget implementation.  
The `web-contact-widget` repository contains the core application code for deployment and customization on **Google App Engine**.

Developed and maintained by Odell Duppins.  
[Connect on LinkedIn](https://www.linkedin.com/in/oduppinsjr)
