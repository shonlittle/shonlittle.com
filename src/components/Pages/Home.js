/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-06
 */

// Add third-party dependencies.
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

/**
 * Home component.
 * @example
 * return (
 *   <Home />
 * )
 * @returns {React.ReactElement} component.
 */
const Home = () => {
  // Set navigation hook.
  const navigate = useNavigate();

  // Render component.
  return (
    <Box sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Software Engineering (Top Half) */}
      <Box
        sx={{
          height: '50%',
          backgroundImage: 'url("/images/software.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Button variant="contained" size="large" onClick={() => navigate('/software')}>
          Software Engineering Portfolio
        </Button>
      </Box>

      {/* Acting (Bottom Half) */}
      <Box
        sx={{
          height: '50%',
          backgroundImage: 'url("/images/acting.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Button
          variant="contained"
          size="large"
          href="http://littlearts.com/shon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Acting Portfolio
        </Button>
      </Box>
    </Box>
  );
};

// No props are used, so propTypes and defaultProps are not needed.

// Export component.
export default Home;
