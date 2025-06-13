/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-06
 */

// Add third-party dependencies.
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// Add local dependencies.
import defaultTheme from './default';

// Create theme.
const appliedTheme = createTheme(defaultTheme);

/**
 * Themes component.
 * @example
 * return (
 *   <Themes />
 * )
 * @returns {React.ReactElement} component.
 */
const Themes = ({ children }) => {
  // Render component.
  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

// Set component property types.
Themes.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export component.
export default Themes;
