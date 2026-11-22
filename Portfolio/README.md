# Cyberpunk Portfolio Website

A full-stack portfolio website with a dark, neon, cyberpunk-inspired UI built with React, Node.js, Express, and TailwindCSS.

## Features

- 🎨 **Cyberpunk Theme**: Dark UI with neon pink, blue, purple, and cyan accents
- ✨ **Smooth Animations**: Framer Motion for page transitions and hover effects
- 📱 **Fully Responsive**: Works seamlessly on all device sizes
- 🎯 **Interactive Sections**: 
  - Hero section with animated profile image
  - About section with skills and timeline
  - Projects showcase with modals
  - Contact form connected to backend
- 🌟 **Visual Effects**: 
  - Particle background
  - Neon glows and shadows
  - Hover animations
  - Smooth scrolling

## Tech Stack

### Frontend
- React 19
- Vite
- TailwindCSS
- Framer Motion
- React Router DOM

### Backend
- Node.js
- Express
- CORS
- dotenv

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add: `PORT=3001` (or your preferred port)

## Running the Application

### Development Mode

1. **Start the frontend** (in one terminal):
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

2. **Start the backend server** (in another terminal):
   ```bash
   npm run server
   ```
   The backend will run on `http://localhost:3001`

### Production Build

1. **Build the frontend**:
   ```bash
   npm run build
   ```

2. **Start the server**:
   ```bash
   npm run server
   ```

## Project Structure

```
Portfolio/
├── server.js              # Express backend server
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── SectionWrapper.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── Footer.jsx
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   ├── index.css          # Global styles
│   └── App.css            # App-specific styles
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json
```

## Customization

### Colors
Edit `tailwind.config.js` to customize neon colors and shadows.

### Content
- Update personal information in `src/sections/Hero.jsx`
- Modify skills and timeline in `src/sections/About.jsx`
- Add your projects in `src/sections/Projects.jsx`
- Update contact information in `src/sections/Contact.jsx`

### Profile Image
Replace the emoji placeholder in `Hero.jsx` with your actual profile image:
```jsx
<img src="/path-to-your-image.jpg" alt="Profile" />
```

## API Endpoints

### POST `/contact`
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message!"
}
```

## Future Enhancements

- [ ] Email integration (Nodemailer, SendGrid)
- [ ] Resume download functionality
- [ ] Blog section
- [ ] Dark/Light mode toggle
- [ ] More particle effects
- [ ] 3D elements

## License

MIT

## Credits

Inspired by Cyberpunk Edgerunners aesthetic.
