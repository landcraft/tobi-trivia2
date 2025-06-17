# Use Node.js 18 alpine as base image
FROM --platform=$BUILDPLATFORM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage - serve directly with Node.js
FROM node:18-alpine

# Install serve globally
RUN npm install -g serve

# Copy built assets from builder stage
COPY --from=builder /app/dist /app

# Set working directory
WORKDIR /app

# Expose port 3000
EXPOSE 3000

# Start serve
CMD ["serve", "-s", ".", "-l", "3000"]