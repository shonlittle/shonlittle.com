/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-06
 */

// Add third-party dependencies.
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

/**
 * Home component.
 * @example
 * return (
 *   <Home />
 * )
 * @returns {React.ReactElement} component.
 */
const Home = ({ title }) => {
  // Render component.
  return (
    <Box>
      <Typography variant="h1">{title}</Typography>
      return{" "}
      <button
        onClick={() => {
          throw new Error("This is your first error!");
        }}
      >
        Break the world
      </button>
      ;
    </Box>
  );
};

// Set component property types.
Home.propTypes = {
  title: PropTypes.string,
};

// Set component default properties.
Home.defaultProps = {
  title: "Home",
};

// Export component.
export default Home;
