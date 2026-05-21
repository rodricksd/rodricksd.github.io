# Multi-stage build for React app with Express server

# Stage 1: Build React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy client package files
COPY client/package*.json ./client/

# Install client dependencies
WORKDIR /app/client
RUN npm install

# Copy client source code
COPY client/ ./

# Build React app
RUN npm run build

# Stage 2: Create production image with Express server
FROM node:18-alpine

WORKDIR /app

# Copy server package files
COPY server/package*.json ./

# Install server dependencies
RUN npm install --production

# Copy server code
COPY server/ ./

# Copy built React app from builder stage
COPY --from=builder /app/client/build ./client/build

# Expose port (Cloud Run will set PORT environment variable)
EXPOSE 8080

# Set environment variable for Cloud Run
ENV PORT=8080
ENV NODE_ENV=production

# Start server
CMD ["node", "server.js"]

