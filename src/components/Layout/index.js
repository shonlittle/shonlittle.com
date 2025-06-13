/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-06
 */

// Add third-party dependencies.
import { Box } from '@mui/material';

// Add local dependencies.
import Themes from '../Themes';
import Router from '../App/Router';

/**
 * Layout component.
 * @example
 * return (
 *   <Layout />
 * )
 * @returns {React.ReactElement} component.
 */
const Layout = () => {
  // Render component.
  return (
    <Themes>
      <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
        <Box component="main" sx={{ display: 'flex', flex: 1 }}>
          <Router />
        </Box>
      </Box>
    </Themes>
  );
};

// Export component.
export default Layout;
