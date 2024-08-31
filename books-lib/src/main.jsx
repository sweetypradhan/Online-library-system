import { StrictMode } from 'react'; // Import StrictMode to enable additional checks and warnings
import { createRoot } from 'react-dom/client'; // Import createRoot for rendering the React application
import App from './App'; // Import the main App component
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import router functions for managing routes
import Home from './components/Home'; // Import Home component for the home page
import AddBook from './components/AddBook'; // Import AddBook component for adding new books
import BrowseBook from './components/BrowseBook'; // Import BrowseBook component for browsing books
import Error from './components/Error'; // Import Error component for handling routing errors
import Fiction from './components/Fiction'; // Import Fiction component for the Fiction category
import NonFiction from './components/NonFiction'; // Import NonFiction component for the Non-Fiction category
import SciFi from './components/SciFi'; // Import SciFi component for the Sci-Fi category
import BookDetails from './components/BookDetails'; // Import BookDetails component for viewing detailed information about a book
import { Provider } from 'react-redux'; // Import Provider to connect Redux store to the React application
import store from './utils/store'; // Import the Redux store configuration

// Define the application's routing configuration
const appRouter = createBrowserRouter([
  {
    path: '/', // Root path of the application
    element: <App />, // Main App component renders for the root path
    errorElement: <Error />, // Component to render if there's an error in routing
    children: [
      {
        path: '/', // Path for the home page
        element: <Home />, // Component to render for the home page
      },
      {
        path: '/BrowseBook', // Path for browsing books
        element: <BrowseBook />, // Component to render for browsing books
      },
      {
        path: 'AddBook', // Path for adding new books
        element: <AddBook />, // Component to render for adding new books
      },
      {
        path: 'Fiction', // Path for the Fiction category
        element: <Fiction />, // Component to render for the Fiction category
      },
      {
        path: 'NonFiction', // Path for the Non-Fiction category
        element: <NonFiction />, // Component to render for the Non-Fiction category
      },
      {
        path: 'SciFi', // Path for the Sci-Fi category
        element: <SciFi />, // Component to render for the Sci-Fi category
      },
      {
        path: 'books/:id', // Dynamic route for viewing book details (where :id is a placeholder for the book's ID)
        element: <BookDetails />, // Component to render for viewing book details
      },
    ],
  },
]);

// Render the React application
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Enables additional checks and warnings */}
    <Provider store={store}> {/* Provides the Redux store to the React application */}
      <RouterProvider router={appRouter} /> {/* Provides the router configuration to the application */}
    </Provider>
  </StrictMode>
);

