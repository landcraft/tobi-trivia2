# Tobi's Daily Trivia

A fun, colorful, and engaging trivia application designed specifically for children aged 7-10 years old. The app features daily trivia questions that are educational, humorous, and moderately challenging to keep kids entertained while learning.

## Features

- 🧠 **Kid-Friendly Questions**: Trivia questions tailored for 7-10 year olds
- 🎨 **Colorful Design**: Bright, engaging interface that attracts children
- 🏆 **Score Tracking**: Keep track of correct answers and streaks
- 📊 **Progress Indicators**: Visual progress bars and badges
- 🌍 **UK/Europe/US Focus**: Questions relevant to these regions
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🔄 **Question Refresh**: Get new questions anytime with the refresh button
- 🐳 **Multi-Architecture Docker**: Supports AMD64 and ARM64 (Apple Silicon, Raspberry Pi)

## Tech Stack

- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Radix UI components
- Lucide React icons
- Docker with multi-architecture support
- Nginx for production serving

## Quick Start

### Using Pre-built Docker Image (Recommended)

```bash
# Pull and run the latest multi-architecture image
docker run -p 3000:80 ghcr.io/yourusername/tobi-trivia:latest
```

The app will be available at `http://localhost:3000`

### Using Docker Compose

```bash
# Clone the repository
git clone <your-repo-url>
cd tobi-trivia

# Run with pre-built image
docker-compose up

# Or build locally if needed
docker-compose --profile local-build up trivia-app-local
```

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Multi-Architecture Support

This project supports multiple CPU architectures:
- **AMD64** (Intel/AMD processors)
- **ARM64** (Apple Silicon M1/M2, Raspberry Pi 4+, AWS Graviton)

Docker automatically selects the correct image for your platform.

## Docker Deployment

See [README-Docker.md](README-Docker.md) for detailed Docker setup instructions.

## Self-Hosting

This application is designed to be self-hosted and works great on:
- Docker containers (recommended)
- Raspberry Pi (ARM64 support included)
- Apple Silicon Macs (M1/M2)
- Traditional x86_64 servers
- Static hosting services (Netlify, Vercel, etc.)

## Contributing

Feel free to add more trivia questions or improve the user interface to make it even more engaging for kids!

## License

MIT License - feel free to use this project for educational purposes.