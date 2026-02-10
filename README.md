# Pixel Genie – Creative Agency Website

A modern, responsive website for **Pixel Genie**, a full-service creative agency based in Bangalore. Built with React and designed with premium aesthetics including smooth animations, dark theme, and interactive UI elements.

## 🌐 About the Project

Pixel Genie is a creative studio offering services ranging from video production and branding to digital marketing and corporate gifting. This website serves as the agency's online presence, showcasing their services, portfolio, client testimonials, and contact information.

### Key Features

- **Animated Hero Section** – Full-screen video background with dynamic text animations
- **Service Pages** – 6 dedicated service pages with full-size hero background images
- **Client Showcase** – Infinite marquee carousel displaying trusted client logos
- **Testimonials** – Client testimonials with smooth scroll animations
- **Industries Section** – Grid layout highlighting industries served
- **Contact Form** – Integrated with [FormSubmit](https://formsubmit.co/) for email delivery
- **WhatsApp & Call CTA** – Quick-access buttons in the navbar
- **Responsive Design** – Fully optimized for desktop, tablet, and mobile
- **Smooth Animations** – Page transitions and scroll-triggered animations via Framer Motion

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **React Router DOM 7** | Client-side routing |
| **Framer Motion 12** | Animations & transitions |
| **Bootstrap 5** | Responsive grid & utility classes |
| **React Bootstrap** | Bootstrap components for React |
| **Font Awesome 7** | Icons (social media, UI elements) |
| **React Icons** | Additional icon library |
| **FormSubmit** | Contact form email delivery (no backend needed) |
| **Google Fonts** | Typography (Outfit, Syne) |

## 📁 Project Structure

```
pixel-genie-react/
├── public/
│   ├── images/                  # All media assets (images, videos)
│   │   ├── clients/             # Client logo images
│   │   └── ...                  # Service & portfolio media
│   └── index.html               # HTML entry point
├── src/
│   ├── components/
│   │   ├── layout/              # Shared layout components
│   │   │   ├── Header.js        # Navigation bar with glass-pill design
│   │   │   └── Footer.js        # Footer with contact form & social links
│   │   ├── pages/               # Individual service pages
│   │   │   ├── VideoProduction.js
│   │   │   ├── Branding.js
│   │   │   ├── DigitalMarketing.js
│   │   │   ├── Website.js
│   │   │   ├── CorporateGifts.js
│   │   │   └── Advertising.js
│   │   └── sections/            # Homepage sections
│   │       ├── Hero.js          # Video hero banner
│   │       ├── About.js         # About the agency
│   │       ├── Services.js      # Services overview grid
│   │       ├── Industries.js    # Industries served
│   │       ├── Clients.js       # Client logo marquee
│   │       ├── Testimonials.js  # Client testimonials
│   │       └── Contact.js       # Contact section
│   ├── css/                     # Stylesheets
│   ├── App.js                   # Root component with routing
│   └── index.js                 # App entry point
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Prakashsuriya/Pixel-Genie.git
   cd pixel-genie-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000).

### Production Build

To create an optimized production bundle:

```bash
npm run build
```

The output will be in the `build/` folder, ready for deployment.

## 📄 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the dev server on port 3000 |
| `npm run build` | Creates optimized production build |
| `npm test` | Runs the test suite |

## 📬 Contact Form

The contact form in the footer uses **FormSubmit** to send emails directly to `info@pixelgenie.in` — no backend server required. Submissions are delivered via AJAX with success/error feedback shown to the user.

## 📱 Social Links

- [Instagram](https://www.instagram.com/pixelgenieoff)
- [Facebook](https://www.facebook.com/share/1BkoAV3XKs/)
- [X (Twitter)](https://x.com/PixelGenieoff)
- [LinkedIn](https://www.linkedin.com/company/109363312/)
