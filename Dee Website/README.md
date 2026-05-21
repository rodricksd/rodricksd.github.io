# Portfolio Website

A modern, responsive personal portfolio website built with React and Express.js, designed for deployment on Google Cloud Run.

## Features

- **Single-page scrollable design** with smooth navigation
- **Home/Hero Section** with professional introduction and clear value proposition
- **Projects Showcase** displaying 3+ projects with technologies, GitHub links, and demo links
- **Skills Section** with proficiency indicators (progress bars)
- **Contact Section** with contact form and social media links
- **Fully Responsive** design for desktop, tablet, and mobile devices
- **Professional Polish** with consistent color scheme and typography

## Tech Stack

- **Frontend**: React 18 with Tailwind CSS
- **Backend**: Express.js
- **Deployment**: Docker container for Google Cloud Run
- **Icons**: React Icons

## Project Structure

```
/
├── client/          # React application
│   ├── src/
│   │   ├── components/  # Reusable components (Navigation)
│   │   ├── sections/    # Page sections (Home, Projects, Skills, Contact)
│   │   ├── App.js       # Main app component
│   │   └── index.js     # Entry point
│   └── package.json
├── server/          # Express backend
│   ├── server.js    # Express server
│   └── package.json
├── Dockerfile       # Docker configuration for Cloud Run
├── .dockerignore    # Files to exclude from Docker build
└── package.json     # Root package.json for scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker (for containerization)

### Installation

1. Install all dependencies:
```bash
npm run install-all
```

Or install separately:
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Development

Run both client and server in development mode:
```bash
npm run dev
```

Or run separately:
```bash
# Run React app (client)
npm run client

# Run Express server (server)
npm run server
```

The React app will be available at `http://localhost:3000`
The Express server will be available at `http://localhost:8080`

### Building for Production

Build the React app:
```bash
npm run build
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t portfolio-website .
```

### Run Docker Container

```bash
docker run -p 8080:8080 portfolio-website
```

The application will be available at `http://localhost:8080`

## Google Cloud Run Deployment

1. Build and tag the Docker image:
```bash
docker build -t gcr.io/YOUR_PROJECT_ID/portfolio-website .
```

2. Push to Google Container Registry:
```bash
docker push gcr.io/YOUR_PROJECT_ID/portfolio-website
```

3. Deploy to Cloud Run:
```bash
gcloud run deploy portfolio-website \
  --image gcr.io/YOUR_PROJECT_ID/portfolio-website \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Customization

### Update Personal Information

1. **Home Section** (`client/src/sections/Home.js`):
   - Update the title, subtitle, and description
   - Modify the call-to-action buttons

2. **Projects Section** (`client/src/sections/Projects.js`):
   - Update project details (title, description, technologies)
   - Replace placeholder images with actual project screenshots
   - Update GitHub and demo URLs

3. **Skills Section** (`client/src/sections/Skills.js`):
   - Update skill categories and proficiency levels
   - Add or remove skills as needed

4. **Contact Section** (`client/src/sections/Contact.js`):
   - Update email address
   - Update LinkedIn and GitHub profile URLs
   - Configure contact form backend integration if needed

### Styling

- Color scheme can be customized in `client/tailwind.config.js`
- Global styles are in `client/src/index.css`
- Component-specific styles use Tailwind CSS utility classes

## Environment Variables

- `PORT`: Server port (default: 8080)
- `NODE_ENV`: Environment mode (development/production)

## Health Check

The server includes a health check endpoint:
```
GET /health
```

Returns:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## License

ISC

## Author

Your Name

