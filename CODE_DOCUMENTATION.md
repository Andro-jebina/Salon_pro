# Crystal Salon - Complete Code Documentation

## 🎉 Welcome to Crystal Salon!

Thank you for your kind words! I'm thrilled you love the website. Below is a comprehensive, inch-by-inch explanation of how this multi-page salon website was created and how it works.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Development Setup](#development-setup)
5. [Core Architecture](#core-architecture)
6. [Component Breakdown](#component-breakdown)
7. [Routing System](#routing-system)
8. [Styling & Design](#styling--design)
9. [Data Management](#data-management)
10. [Build & Deployment](#build--deployment)
11. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

**Crystal Salon** is a premium, multi-page React application built for a beauty salon business. It features:

- **Multi-page navigation** with React Router
- **Responsive design** using Bootstrap 5
- **Crystal color theme** (#6C63FF, #FF6F91, #F8F9FF, #1A1A2E)
- **Parallax effects** and smooth animations
- **Booking system** with localStorage persistence
- **Service details pages** with before/after galleries
- **Professional UI** matching real salon brands

---

## 🛠 Technology Stack

### Core Technologies
```json
{
  "React": "18.x",
  "React Router DOM": "6.x",
  "Bootstrap": "5.x",
  "Vite": "4.x",
  "Node.js": "18.x+",
  "npm": "9.x+"
}
```

### Why These Technologies?

1. **React**: Component-based architecture for reusable UI elements
2. **React Router**: Client-side routing for multi-page experience
3. **Bootstrap**: Responsive grid system and pre-built components
4. **Vite**: Fast development server and optimized build tool
5. **ES6+**: Modern JavaScript features for clean, maintainable code
6. **EmailJS**: Frontend email sending without backend infrastructure

---

## 📧 EmailJS Integration

### Setup Process

1. **Install EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```

2. **Create EmailJS Account**:
   - Sign up at [EmailJS.com](https://www.emailjs.com/)
   - Connect your email service (Gmail, Outlook, etc.)
   - Create email templates for salon owner and customer

3. **Configure Templates**:
   - **Owner Template**: Receives booking notifications
   - **Customer Template**: Sends booking confirmations

4. **Integration in Code**:
   ```jsx
   import emailjs from '@emailjs/browser';

   const EMAILJS_CONFIG = {
     serviceId: 'your_service_id',
     ownerTemplateId: 'salon_owner_booking',
     userTemplateId: 'customer_confirmation',
     publicKey: 'your_public_key'
   };
   ```

### Email Flow

1. **User submits booking form**
2. **EmailJS sends two emails simultaneously**:
   - Notification to salon owner (`androjebina2005@gmail.com`)
   - Confirmation to customer (user's email)
3. **Booking stored in localStorage**
4. **Success message displayed**

### EmailJS Free Plan Limits
- 200 emails per month
- 50 emails per day
- Rate limit: 1 email per 3 seconds

---

## 📁 Project Structure

```
salon2/
├── public/                    # Static assets
│   ├── favicon.ico           # Browser tab icon
│   └── index.html            # Main HTML template
├── src/                      # Source code
│   ├── assets/              # Images, fonts, etc.
│   ├── components/          # Reusable UI components
│   │   ├── Booking.jsx      # Booking form component
│   │   ├── Footer.jsx       # Footer with contact info
│   │   ├── Gallery.jsx      # Before/after image gallery
│   │   ├── Hero.jsx         # Hero section with parallax
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Offers.jsx       # Special offers cards
│   │   ├── Services.jsx     # Services grid
│   │   └── Testimonials.jsx # Client testimonials carousel
│   ├── pages/               # Page components
│   │   ├── About.jsx        # About page
│   │   ├── Booking.jsx      # Booking page
│   │   ├── Contact.jsx      # Contact page
│   │   ├── Home.jsx         # Home page
│   │   ├── ServiceDetails.jsx # Individual service page
│   │   └── ServicesPage.jsx # Services listing page
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── index.css            # Base styles
│   └── main.jsx             # App entry point
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # This documentation
```

---

## 🚀 Development Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Git (optional, for version control)

### Installation Steps

1. **Clone/Create the project:**
   ```bash
   mkdir salon2
   cd salon2
   ```

2. **Initialize the project:**
   ```bash
   npm create vite@latest . -- --template react
   ```

3. **Install dependencies:**
   ```bash
   npm install react-router-dom bootstrap
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   - Navigate to `http://localhost:5177`
   - The app will hot-reload on file changes

---

## 🏗 Core Architecture

### Entry Point: `main.jsx`

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**How it works:**
1. Imports React and ReactDOM for rendering
2. Imports Bootstrap CSS for styling
3. Imports custom CSS (`index.css`)
4. Renders the `App` component into the DOM element with id 'root'

### Main App Component: `App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import ServiceDetails from './pages/ServiceDetails'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
```

**How it works:**
1. **BrowserRouter**: Enables client-side routing
2. **Routes & Route**: Define URL paths and their corresponding components
3. **Navbar & Footer**: Persistent across all pages
4. **Dynamic Routing**: `/services/:id` captures service ID for details page

---

## 🧩 Component Breakdown

### Navigation Component: `Navbar.jsx`

```jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${
      isScrolled ? 'navbar-scrolled' : ''
    }`} style={{
      background: isScrolled ? '#1A1A2E' : 'rgba(26, 26, 46, 0.9)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{
          color: '#F8F9FF',
          fontSize: '1.5rem'
        }}>
          Crystal Salon
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/services', label: 'Services' },
              { path: '/booking', label: 'Book Now' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <Link
                  className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                  to={path}
                  style={{
                    color: '#F8F9FF',
                    fontWeight: '500',
                    padding: '0.5rem 1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
```

**Key Features:**
- **Scroll Detection**: Changes appearance when user scrolls
- **Active Link Highlighting**: Shows current page
- **Responsive Design**: Collapses on mobile
- **Smooth Transitions**: CSS transitions for hover effects

### Hero Component: `Hero.jsx`

```jsx
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.5
        heroRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-section position-relative overflow-hidden" style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #6C63FF 0%, #FF6F91 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div
        className="hero-background position-absolute top-0 start-0 w-100 h-100"
        ref={heroRef}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      ></div>

      <div className="hero-content text-center text-white position-relative z-index-1">
        <h1 className="display-1 fw-bold mb-4" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          fontSize: '4rem'
        }}>
          Crystal Salon
        </h1>
        <p className="lead mb-5" style={{
          fontSize: '1.5rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          Where Beauty Meets Perfection
        </p>
        <div className="hero-buttons">
          <Link to="/services" className="btn btn-lg me-3" style={{
            background: '#F8F9FF',
            color: '#6C63FF',
            border: 'none',
            borderRadius: '50px',
            padding: '15px 30px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}>
            Explore Services
          </Link>
          <Link to="/booking" className="btn btn-lg" style={{
            background: 'transparent',
            color: '#F8F9FF',
            border: '2px solid #F8F9FF',
            borderRadius: '50px',
            padding: '15px 30px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}>
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
```

**Key Features:**
- **Parallax Effect**: Background moves slower than content
- **Responsive Design**: Adapts to different screen sizes
- **Call-to-Action Buttons**: Links to services and booking
- **Scroll Indicator**: Visual cue to scroll down

### Services Component: `Services.jsx`

```jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    { id: 1, name: 'Facial', price: '₹999', icon: '🧴' },
    { id: 2, name: 'Haircut', price: '₹499', icon: '✂️' },
    { id: 3, name: 'Hair Spa', price: '₹1499', icon: '💆‍♀️' },
    { id: 4, name: 'Nail Art', price: '₹799', icon: '💅' }
  ]

  return (
    <section className="py-5" style={{ background: '#F8F9FF' }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#1A1A2E' }}>
          Our Services
        </h2>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-3" key={service.id}>
              <div className="service-card card border-0 shadow-sm h-100" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3" style={{
                    fontSize: '3rem'
                  }}>
                    {service.icon}
                  </div>
                  <h5 className="card-title fw-bold" style={{
                    color: '#6C63FF'
                  }}>
                    {service.name}
                  </h5>
                  <p className="card-text fs-4 fw-bold" style={{
                    color: '#FF6F91'
                  }}>
                    {service.price}
                  </p>
                  <Link to={`/services/${service.id}`} className="btn w-100 mt-3" style={{
                    background: 'linear-gradient(135deg, #6C63FF, #FF6F91)',
                    border: 'none',
                    borderRadius: '50px',
                    color: '#fff',
                    fontWeight: '600'
                  }}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
```

**Key Features:**
- **Dynamic Service Cards**: Maps through services array
- **Routing Links**: Each "View Details" button links to service page
- **Responsive Grid**: 1 column on mobile, 2 on tablet, 4 on desktop
- **Hover Effects**: Cards have smooth transitions

---

## 🛣 Routing System

### How React Router Works

1. **BrowserRouter**: Wraps the entire app to enable routing
2. **Routes**: Container for all Route components
3. **Route**: Defines a path and its corresponding component
4. **Link**: Navigation component that changes URL without page reload

### Route Configuration

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/services/:id" element={<ServiceDetails />} />
  <Route path="/booking" element={<Booking />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

### Dynamic Routing Example: ServiceDetails.jsx

```jsx
import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceDetails = () => {
  const { id } = useParams()

  const services = [
    {
      id: 1,
      name: 'Facial',
      price: '₹999',
      description: 'Rejuvenate your skin with our premium facial treatments...',
      benefits: ['Deep cleansing', 'Hydration', 'Anti-aging'],
      duration: '60 minutes',
      images: ['before.jpg', 'after.jpg']
    },
    // ... other services
  ]

  const service = services.find(s => s.id === parseInt(id))

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="container py-5">
      <h1>{service.name}</h1>
      {/* Service details */}
    </div>
  )
}

export default ServiceDetails
```

**How it works:**
- `useParams()` extracts the `id` from URL (`/services/1` → `id = "1"`)
- Finds the matching service from the array
- Renders service-specific content

---

## 🎨 Styling & Design

### CSS Architecture

#### Global Styles: `index.css`
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

html {
  scroll-behavior: smooth;
}
```

#### Component Styles: `App.css`
```css
/* Crystal Color Scheme Variables */
:root {
  --primary-color: #6C63FF;
  --secondary-color: #FF6F91;
  --light-bg: #F8F9FF;
  --dark-text: #1A1A2E;
}

/* Navbar Styles */
.navbar-scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

/* Service Cards Hover Effect */
.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(108, 99, 255, 0.2);
}

/* Button Animations */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(108, 99, 255, 0.3);
}

/* Scroll Indicator */
.scroll-mouse {
  width: 24px;
  height: 36px;
  border: 2px solid #F8F9FF;
  border-radius: 12px;
  position: relative;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: #F8F9FF;
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% { opacity: 0; transform: translateX(-50%) translateY(0); }
  50% { opacity: 1; transform: translateX(-50%) translateY(6px); }
  100% { opacity: 0; transform: translateX(-50%) translateY(12px); }
}
```

### Design Principles Applied

1. **Crystal Color Scheme**:
   - Primary: #6C63FF (Professional purple)
   - Secondary: #FF6F91 (Elegant pink)
   - Light: #F8F9FF (Clean background)
   - Dark: #1A1A2E (Text contrast)

2. **Glassmorphism Effects**:
   - `backdrop-filter: blur(10px)`
   - Semi-transparent backgrounds
   - Subtle borders

3. **Responsive Design**:
   - Bootstrap grid system
   - Mobile-first approach
   - Flexible layouts

4. **Animations & Transitions**:
   - Smooth hover effects
   - Parallax scrolling
   - Loading animations

---

## 💾 Data Management

## 💾 Data Management

### Local Storage for Booking Data

```jsx
// Saving booking data
const saveBooking = (bookingData) => {
  const existingBookings = JSON.parse(localStorage.getItem('salonBookings') || '[]')
  existingBookings.push({
    ...bookingData,
    id: Date.now(),
    status: 'confirmed',
    bookedAt: new Date().toISOString()
  })
  localStorage.setItem('salonBookings', JSON.stringify(existingBookings))
}

// Loading booking data
const loadBookings = () => {
  return JSON.parse(localStorage.getItem('salonBookings') || '[]')
}
```

### EmailJS Integration for Notifications

```jsx
import emailjs from '@emailjs/browser';

// Configuration
const EMAILJS_CONFIG = {
  serviceId: 'your_service_id',
  ownerTemplateId: 'salon_owner_booking',
  userTemplateId: 'customer_confirmation',
  publicKey: 'your_public_key'
};

// Send email to salon owner
await emailjs.send(
  EMAILJS_CONFIG.serviceId,
  EMAILJS_CONFIG.ownerTemplateId,
  {
    customer_name: bookingData.name,
    customer_email: bookingData.email,
    customer_phone: bookingData.phone,
    service: bookingData.service,
    date: bookingData.date,
    time: bookingData.time,
    booking_date: new Date().toLocaleDateString(),
    salon_email: 'androjebina2005@gmail.com'
  },
  EMAILJS_CONFIG.publicKey
);

// Send confirmation to customer
await emailjs.send(
  EMAILJS_CONFIG.serviceId,
  EMAILJS_CONFIG.userTemplateId,
  {
    to_name: bookingData.name,
    to_email: bookingData.email,
    service: bookingData.service,
    date: bookingData.date,
    time: bookingData.time,
    salon_contact: '+91 98765 43210',
    salon_address: '123 Beauty Street, Crystal City, CC 12345'
  },
  EMAILJS_CONFIG.publicKey
);
```

### Service Data Structure

```jsx
const services = [
  {
    id: 1,
    name: 'Facial',
    price: '₹999',
    icon: '🧴',
    description: 'Complete facial treatment for glowing skin',
    benefits: ['Deep cleansing', 'Hydration', 'Anti-aging'],
    duration: '60 minutes',
    images: ['before.jpg', 'after.jpg']
  }
]
```

### State Management Approach

- **Local Component State**: `useState` for form inputs, loading states, messages
- **URL State**: React Router params for service details
- **Persistent State**: localStorage for booking data
- **Email State**: EmailJS for sending notifications
- **No Global State**: Simple app doesn't need Redux/Context

---

## 📦 Build & Deployment

### Development Build
```bash
npm run dev
```
- Starts Vite development server
- Hot module replacement
- Source maps for debugging
- Runs on `http://localhost:5177`

### Production Build
```bash
npm run build
```
- Creates optimized production bundle
- Minifies CSS and JavaScript
- Generates static files in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally
- Tests the optimized version

### Deployment Options

1. **Static Hosting** (Netlify, Vercel, GitHub Pages):
   ```bash
   npm run build
   # Upload dist/ folder contents
   ```

2. **Traditional Hosting**:
   - Upload `dist/` folder to web server
   - Ensure server serves `index.html` for all routes (SPA routing)

---

## 🔧 Configuration Files

### `package.json`
```json
{
  "name": "salon2",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^3.11.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "bootstrap": "^5.2.3"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^3.1.0",
    "eslint": "^8.38.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "vite": "^4.3.2"
  }
}
```

### `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5177,
    open: true
  }
})
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

1. **"Module not found" errors**:
   - Ensure all imports are correct
   - Check file extensions (.jsx for React components)
   - Run `npm install` to install dependencies

2. **Routing not working**:
   - Ensure components are properly exported
   - Check Route paths match Link to paths
   - Verify BrowserRouter wraps the entire app

3. **Styling not applying**:
   - Check CSS imports in components
   - Verify className vs class attributes
   - Use browser dev tools to inspect elements

4. **Build errors**:
   - Run `npm run lint` to check for syntax errors
   - Ensure all dependencies are installed
   - Check Node.js version compatibility

5. **Images not loading**:
   - Use absolute URLs for external images
   - Place local images in `public/` folder
   - Use `import` for images in `src/`

### Development Tips

1. **Use React Developer Tools** browser extension
2. **Enable source maps** in browser dev tools
3. **Use ESLint** for code quality (`npm run lint`)
4. **Test on multiple devices** for responsiveness
5. **Use browser dev tools** for debugging

---

## 🚀 Future Enhancements

### Potential Features to Add

1. **Backend Integration**:
   - User authentication
   - Database for bookings
   - Admin dashboard

2. **Advanced Features**:
   - Online payment integration
   - Calendar booking system
   - Customer reviews system
   - Email notifications

3. **Performance Optimizations**:
   - Image lazy loading
   - Code splitting
   - Service worker for PWA

4. **SEO & Analytics**:
   - Meta tags for each page
   - Google Analytics integration
   - Social media sharing

---

## 📞 Support & Contact

If you need help with this codebase:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review the component documentation above
3. Examine the code comments in each file
4. Test individual components in isolation

---

## 🎉 Conclusion

This Crystal Salon website demonstrates modern React development practices:

- **Component-based architecture** for maintainable code
- **Client-side routing** for smooth navigation
- **Responsive design** for all devices
- **Professional styling** with modern CSS techniques
- **Data persistence** with localStorage
- **Clean code structure** following React best practices

The website is production-ready and can be easily extended with additional features. Each component is modular and reusable, making future development straightforward.

Thank you again for your kind words! I hope this documentation helps you understand every aspect of the codebase. If you have any questions, feel free to ask! 🌟

---

*Created with ❤️ for Crystal Salon*
*Documentation generated on April 1, 2026*