# Tristar-App

This project is a movie search and favorites management application built with **Vite**, **Redux Toolkit Query (RTK Query)**, and **redux-persist** for storing favorite movies. The app allows users to search for movies, view movie details, and save their favorite movies.

## Features

- Search for movies via an API.
- View detailed information about movies.
- Mark movies as favorites and store them persistently using `redux-persist`.
- Navigate between pages using a router.
- Modular components for reusability and separation of concerns.

## Technologies

- **Vite**: Fast build tool for modern web projects.
- **Redux Toolkit**: For state management.
- **RTK Query**: For managing data fetching and caching.
- **redux-persist**: To persist favorite movies across sessions.
- **React Router**: For routing between different pages.
- **TypeScript**: For type-safe development.

## Project Structure

```bash
├── src
│ ├── api # API services using RTK Query
│ │ ├── moviesApi.ts # Movie-related API calls
│ └── components # Reusable components
│ ├── FavoritesLink # Link to favorites page
│ ├── GoBackButton # Reusable back button
│ ├── Movie # Movie card component
│ ├── MovieList # List of movies
│ ├── SearchMovieForm # Movie search form
│ ├── pages # Pages for routing
│ ├── Favorites # Favorites page
│ ├── Home # Home page
│ ├── Movie # Movie details page
│ ├── router # Application routing setup
│ ├── store # Redux store and slices
│ ├── hooks.ts # Custom Redux hooks
│ └── slices # Slices for different features
│ ├── App.tsx # Main application component
│ ├── main.tsx # Application entry point
├── .env # Environment variables
├── .husky # Pre-commit hooks
└── .prettierrc # Prettier configuration
```

## Getting Started

### Prerequisites

- **Node.js** (v14.x or later)
- **PNPM**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shadowfieng/tristar-app
   ```
2. Navigate to the project directory:
   ```bash
   cd tristar-app
   ```
3. Install dependencies:
   ```bash
   pnpm i
   ```
### Running the project
```bash
  pnpm dev
```