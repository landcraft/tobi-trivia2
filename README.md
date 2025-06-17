# Tobi's Daily Trivia

A fun, colorful, and engaging trivia application designed specifically for children aged 7-10 years old. The app features daily trivia questions that are educational, humorous, and moderately challenging to keep kids entertained while learning.

## Features

- 🧠 **Kid-Friendly Questions**: Trivia questions tailored for 7-10 year olds
- 🎨 **Colorful Design**: Bright, engaging interface that attracts children
- 🏆 **Score Tracking**: Keep track of correct answers and streaks
- 📊 **Progress Indicators**: Visual progress bars and badges
- 🌍 **UK/Europe/US Focus**: Questions relevant to these regions
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🐳 **Docker Ready**: Easy deployment with Docker containers

## Tech Stack

- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Radix UI components
- Lucide React icons
- Docker for containerization
- Nginx for production serving

## Quick Start

### Using Docker (Recommended)

```bash
# Clone the repository
git clone <your-repo-url>
cd tobi-trivia

# Build and run with Docker Compose
docker-compose up --build
```

The app will be available at `http://localhost:3000`

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

## Docker Deployment

See [README-Docker.md](README-Docker.md) for detailed Docker setup instructions.

### GitHub Container Registry

This project includes automated Docker image publishing to GitHub Container Registry. Images are automatically built and published when you push to the main branch.

To use the published image:

```bash
docker run -p 3000:80 ghcr.io/yourusername/tobi-trivia:latest
```

## Self-Hosting

This application is designed to be self-hosted. You can deploy it using:

- Docker containers (recommended)
- Static hosting services (Netlify, Vercel, etc.)
- Traditional web servers (Apache, Nginx)

## Contributing

Feel free to add more trivia questions or improve the user interface to make it even more engaging for kids!

## License

MIT License - feel free to use this project for educational purposes.