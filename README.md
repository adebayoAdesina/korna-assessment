# Korna Assessment UI Replica

A responsive, high-fidelity React application replicating the user interface of a blog platform (inspired by Medium) from the provided design references. Built with React and Styled Components for modern, maintainable CSS-in-JS styling. Features a navigation bar, tabbed post feeds, article cards with metadata, and a sidebar with recommendations.

## Design References

- [Design Reference 1](https://drive.google.com/file/d/11L711oIr68CzIYaWQRaR8L0lGfmRqoFL/view)
- [Design Reference 2](https://drive.google.com/file/d/1K_bfbQ7BM79_kDt_DDG5IjkjSweo7EsU/view)

## Technologies Used

- **React** (v19.1.1) - JavaScript library for building user interfaces
- **Styled Components** (v6.1.19) - CSS-in-JS library for component-level styling
- **@iconify/react** (v6.0.2) - Icon library for scalable vector icons
- **Create React App** - Build setup and development tools

## Features

- Responsive design that adapts to different screen sizes
- High-fidelity UI replication from design specifications
- Component-based architecture with reusable UI elements
- Modern CSS-in-JS approach with Styled Components
- Clean, maintainable codebase structure
- Navigation bar with branding and menu options
- Main layout with tabbed sections ("For you" and "Featured") for post filtering
- Post cards displaying article previews including title, excerpt, author, read time, and formatted view counts
- Sidebar featuring "Staff Picks" recommendations and "Who to Follow" suggestions
- Utility functions for formatting numbers (e.g., view counts) and time (e.g., read time)
- Global theme with consistent colors and styling

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd korna-assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes, and you may also see any lint errors in the console.

## Project Structure

```
src/
├── asset/               # Static assets (e.g., icons like medium.svg)
├── components/          # Reusable UI components
│   ├── Layout.jsx       # Main layout with tabs and post rendering
│   ├── Layout.styles.js # Styles for Layout component
│   ├── NavBar.jsx       # Navigation bar component
│   ├── NavBar.styles.js # Styles for NavBar component
│   ├── PostCard.jsx     # Component for individual post previews
│   ├── PostCard.styles.js # Styles for PostCard component
│   ├── SideBar.jsx      # Sidebar with recommendations
│   └── SideBar.style.js # Styles for SideBar component
├── constant/            # Application constants (e.g., appImages.js)
├── data/                # Mock data for the application
│   ├── postData.js      # Sample post data array
│   ├── staffPicksData.js # Data for staff picks section
│   └── whoToFollowData.js # Data for who to follow section
├── utils/               # Utility functions
│   ├── colors.js        # Color constants for theming
│   ├── formatNumber.js  # Function to format numbers (e.g., views)
│   └── formatTime.js    # Function to format time (e.g., read time)
├── views/               # Page-level components
│   └── Index.js         # Main index page component
├── App.js               # Root application component
├── App.styles.js        # Global styles and theme setup
├── App.test.js          # Tests for App component
├── index.js             # Application entry point
├── reportWebVitals.js   # Web vitals reporting utility
└── setupTests.js        # Test configuration
public/                  # Public assets and HTML template
├── favicon.ico
├── index.html           # Main HTML file
├── logo192.png
├── logo512.png
├── manifest.json        # PWA manifest
└── robots.txt           # Robots file for SEO
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - **Note: this is a one-way operation!** Ejects from Create React App

## Next Steps

- Integrate dynamic data fetching (e.g., from an API) instead of static mock data
- Add search and filtering functionality for posts
- Implement user authentication and personalized feeds
- Enhance responsiveness and accessibility (e.g., ARIA labels, keyboard navigation)
- Add more interactive features like liking posts or following users
- Expand testing coverage with unit and integration tests
- Optimize performance (e.g., lazy loading, code splitting)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and for assessment purposes.
