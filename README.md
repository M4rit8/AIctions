# Vue.js Clean Architecture GitHub Actions Explorer

This project is a study tool for JavaScript data structures and algorithms (based on Loiane Groner’s book), Clean Architecture, and GitHub Actions API integration using axios. It is scaffolded with Vite and Vue.js, and organized into Clean Architecture layers: entities, usecases, adapters, frameworks, and components.

## Features
- Web form to input GitHub repository and pipeline information
- Fetches and displays GitHub Actions pipeline data using axios
- Modular codebase following Clean Architecture principles
- Space for implementing and visualizing data structures and algorithms

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the development server:
   ```sh
   npm run dev
   ```
3. Open your browser at the provided local address.

## Project Structure
- `src/entities` – Core business models (e.g., pipeline, workflow)
- `src/usecases` – Application logic (e.g., fetch pipeline info)
- `src/adapters` – API adapters (e.g., GitHub API integration)
- `src/frameworks` – Framework-specific code (e.g., axios setup)
- `src/components` – Vue UI components

## Customization
- Extend the project with new data structures and algorithms as you study.
- Add more features or UI improvements as needed.

## License
MIT
