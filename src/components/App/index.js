/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-05
 */

// Add third-party dependencies.
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

// Add local dependencies.
import store from "./store";
// import Layout from "../Layout";
import Home from "../Pages/Home";

/**
 * App component.
 * @example
 * return (
 *   <App />
 * )
 * @returns {React.ReactElement} component.
 */
const App = () => {
  // Render component.
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Box>
          {/* <Layout /> */}
          <Home />
        </Box>
      </BrowserRouter>
    </Provider>
  );
};

// Export component.
export default App;
