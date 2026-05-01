# 🦷 DentalFix — Premium Dental Clinic Website

<p align="center">
  <b>A modern, responsive, and conversion-focused dental clinic website</b><br/>
  Designed to enhance patient engagement and streamline appointment booking.
</p>

<p align="center">
  <a href="https://dentalfix.onrender.com"><b>🌐 Live Demo</b></a> •
  <a href="https://github.com/derekdesouza13/DentalFix"><b>📦 Repository</b></a>
</p>

---

## ✨ Overview

**DentalFix** is a high-quality frontend web application built to simulate a real-world dental clinic platform.  
It focuses on **clean UI/UX, responsiveness, and patient conversion**, making it ideal for showcasing production-ready frontend skills.

---

## 🚀 Key Features

### 🏥 Patient-Focused Design
- Clean and modern **Hero Section** with strong CTAs
- Fully responsive layout (mobile-first approach)
- Professional blue & white healthcare theme

---

### 📅 Appointment Booking System
- User-friendly booking form
- Select treatment, doctor, and preferred time
- Instant UI-based confirmation feedback

---

### 💬 Free Consultation
- Quick inquiry form
- Upload image UI (for dental concerns)
- WhatsApp contact integration (UI simulation)

---

### 💰 Braces Pricing Tool
- Interactive selection:
  - Metal Braces
  - Ceramic Braces
  - Invisible Aligners
- Dynamic pricing and benefits display

---

### ⭐ Patient Testimonials
- Before/After transformation cards
- Ratings and user feedback
- Designed for high trust and conversion

---

### ⚙️ Additional Features
- Sticky navigation with smooth scrolling
- Google Maps integration (clinic location)
- Floating WhatsApp action button
- Smooth animations using Framer Motion

---

## 🛠️ Tech Stack

| Technology        | Usage                      |
|------------------|----------------------------|
| React (Vite)     | Frontend framework         |
| Tailwind CSS     | Styling                    |
| Framer Motion    | Animations                 |
| Lucide / Icons   | UI Icons                   |

---

## 📁 Project Structure


DentalFix/

├── public/

├── src/

│ ├── components/

│ ├── assets/

│ ├── App.jsx

│ └── main.jsx

├── index.html

├── package.json

└── vite.config.js


---

## ⚙️ Getting Started (Run Locally)

### 1️⃣ Clone the Repository

`bash

git clone https://github.com/derekdesouza13/DentalFix.git

cd DentalFix

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Start Development Server
npm run dev

### 4️⃣ Open in Browser

Visit:

http://localhost:5173

### 🚀 Build for Production

npm run build

Output will be generated in the dist/ folder.

### 🌍 Deployment

This project is deployed using Render.

Build Settings:

Build Command:

npm install && npm run build

Publish Directory:

dist

---

## 🎨 Customization Guide

You can easily customize the DentalFix project to match any dental clinic's branding and details.

---

### 🏥 Change Clinic Name

Open the following files:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/components/Hero.jsx`

Replace **"DentalFix"** with your desired clinic name.

You can also use global search in your editor:

DentalFix


---

### 🎨 Change Colors (Tailwind)

This project uses Tailwind CSS for styling.

#### Option 1: Quick Changes

Search and replace Tailwind color classes like:

text-blue-500
bg-blue-600


---

#### Option 2: Global Theme (Recommended)

Edit the file:

tailwind.config.js


Example:
``js
theme: {
  extend: {
    colors: {
      primary: "#0A84FF",
      secondary: "#1E293B",
      accent: "#38BDF8",
    },
  },
}

Then use:

bg-primary
text-primary


#### 📞 Change Contact Information

Update details in:

src/components/Footer.jsx
src/components/Contact.jsx

Modify:

Address
Phone number
Email
Working hours


📅 Modify Appointment Form

Edit:

src/components/AppointmentForm.jsx

You can:

Add/remove fields
Change treatment options
Connect to backend later


💰 Update Pricing / Services

Edit:

src/components/Pricing.jsx

Update:

Braces types
Pricing ranges
Descriptions


🖼️ Replace Images

Go to:

src/assets/

Replace placeholder images with real clinic photos.


💬 WhatsApp Integration

Find the WhatsApp link and replace:

https://wa.me/XXXXXXXXXX

with the clinic’s phone number.