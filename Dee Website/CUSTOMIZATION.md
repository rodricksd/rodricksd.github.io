# Customization Guide

This guide will help you customize the placeholder content in your portfolio website.

## Quick Customization Checklist

### 1. Home Section (`client/src/sections/Home.js`)
- [ ] Update the main headline (line 9)
- [ ] Update the subtitle/role (line 12)
- [ ] Update the description paragraph (line 15)
- [ ] Customize button text if needed

### 2. Projects Section (`client/src/sections/Projects.js`)
- [ ] Replace project titles (lines 8-38)
- [ ] Update project descriptions
- [ ] Update technologies arrays
- [ ] Replace GitHub URLs (lines 17, 25, 33)
- [ ] Replace demo URLs (lines 18, 26, 34)
- [ ] Replace placeholder images (lines 19, 27, 35)
  - Option 1: Use actual project screenshots
  - Option 2: Use image hosting service
  - Option 3: Add images to `client/public/images/` and reference as `/images/project1.jpg`

### 3. Skills Section (`client/src/sections/Skills.js`)
- [ ] Update skill categories (lines 7-42)
- [ ] Update skill names and proficiency levels (0-100%)
- [ ] Add or remove skills as needed
- [ ] Adjust skill categories to match your expertise

### 4. Contact Section (`client/src/sections/Contact.js`)
- [ ] Update email address (line 79)
- [ ] Update LinkedIn profile URL (line 93)
- [ ] Update GitHub profile URL (line 107)
- [ ] Configure contact form backend (currently logs to console)
  - Consider integrating with email service (SendGrid, Nodemailer)
  - Or connect to a database to store messages

### 5. Navigation (`client/src/components/Navigation.js`)
- [ ] Update site title/logo text (line 30)
- [ ] Customize navigation items if needed

### 6. Styling (`client/tailwind.config.js`)
- [ ] Customize color scheme (primary colors, lines 6-16)
- [ ] Adjust theme colors to match your brand
- [ ] Update global styles in `client/src/index.css` if needed

### 7. Metadata (`client/public/index.html`)
- [ ] Update page title (line 11)
- [ ] Update meta description (line 13)
- [ ] Add favicon if desired

## Adding Project Images

1. Create an `images` folder in `client/public/`:
   ```
   client/public/images/
   ```

2. Add your project screenshots with descriptive names:
   - `project1.jpg`
   - `project2.jpg`
   - `project3.jpg`

3. Update the image URLs in `Projects.js`:
   ```javascript
   image: '/images/project1.jpg'
   ```

## Deploying to Google Cloud Run

1. Make sure all customization is complete
2. Build the Docker image:
   ```bash
   docker build -t gcr.io/YOUR_PROJECT_ID/portfolio-website .
   ```

3. Push to Google Container Registry:
   ```bash
   docker push gcr.io/YOUR_PROJECT_ID/portfolio-website
   ```

4. Deploy to Cloud Run:
   ```bash
   gcloud run deploy portfolio-website \
     --image gcr.io/YOUR_PROJECT_ID/portfolio-website \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

## Testing Responsive Design

Test your website at different viewport sizes:
- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px and above

You can use browser dev tools to test different screen sizes.

## Notes

- All placeholder text is clearly marked and easy to find
- Images use placeholder service (via.placeholder.com) - replace with actual images
- Contact form currently logs submissions - integrate with email service for production
- All links are placeholder URLs - update with your actual profiles and project links

