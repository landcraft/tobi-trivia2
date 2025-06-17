# Tobi's Daily Trivia - Docker Setup

This guide explains how to build and run the Tobi's Daily Trivia app using Docker.

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and run the production app
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop the app
docker-compose down
```

The app will be available at `http://localhost:3000`

### Using Docker directly

```bash
# Build the image
docker build -t tobi-trivia .

# Run the container
docker run -p 3000:80 tobi-trivia
```

## Development Mode

```bash
# Run development server with hot reload
docker-compose --profile dev up trivia-app-dev
```

Development server will be available at `http://localhost:5173`

## Publishing to GitHub Container Registry

1. Build and tag the image:
```bash
docker build -t ghcr.io/yourusername/tobi-trivia:latest .
```

2. Push to GitHub Container Registry:
```bash
docker push ghcr.io/yourusername/tobi-trivia:latest
```

## Environment Variables

The app runs in production mode by default. No additional environment variables are required for the basic trivia functionality.

## Features

- Multi-stage Docker build for optimized image size
- Nginx for serving static files
- Client-side routing support
- Static asset caching
- Security headers
- Development mode support