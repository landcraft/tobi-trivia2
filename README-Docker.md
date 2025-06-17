# Tobi's Daily Trivia - Docker Setup

This guide explains how to build and run the Tobi's Daily Trivia app using Docker.

## Quick Start

### Pull from GitHub Container Registry (Recommended)

```bash
# Pull the latest image (supports AMD64 and ARM64)
docker pull ghcr.io/yourusername/tobi-trivia:latest

# Run the container
docker run -p 3000:80 ghcr.io/yourusername/tobi-trivia:latest
```

The app will be available at `http://localhost:3000`

### Using Docker Compose with Pre-built Image

```bash
# Create docker-compose.yml with the pre-built image
docker-compose up

# Run in background
docker-compose up -d

# Stop the app
docker-compose down
```

### Building Locally (Optional)

```bash
# Build for your current architecture
docker build -t tobi-trivia .

# Build for multiple architectures (requires buildx)
docker buildx build --platform linux/amd64,linux/arm64 -t tobi-trivia .
```

## Multi-Architecture Support

The Docker images are built for multiple CPU architectures:
- **linux/amd64** - Intel/AMD 64-bit processors
- **linux/arm64** - ARM 64-bit processors (Apple Silicon, Raspberry Pi 4+, AWS Graviton)

Docker will automatically pull the correct image for your platform.

## Development Mode

```bash
# Run development server with hot reload
docker-compose --profile dev up trivia-app-dev
```

Development server will be available at `http://localhost:5173`

## Publishing Multi-Architecture Images

The GitHub Actions workflow automatically builds and publishes multi-architecture images when you push to the main branch or create a release tag.

## Environment Variables

The app runs in production mode by default. No additional environment variables are required for the basic trivia functionality.

## Features

- Multi-architecture Docker images (AMD64 + ARM64)
- Multi-stage build for optimized image size
- Nginx for serving static files
- Client-side routing support
- Static asset caching
- Security headers
- Development mode support
- Automated CI/CD with GitHub Actions