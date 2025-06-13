/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { Box, Container, Typography, alpha } from '@mui/material';
import { Favorite } from '@mui/icons-material';

/**
 * Footer component.
 * @example
 * return (
 *   <Footer />
 * )
 * @returns {React.ReactElement} component.
 */
const Footer = () => {
  // Render component.
  return (
    <Box
      component="footer"
      sx={theme => ({
        ...theme.mixins.glassEffect,
        borderTop: `1px solid ${alpha('#ffffff', 0.1)}`,
        py: 4,
        px: 2,
        position: 'relative',
        zIndex: 10,
      })}
    >
      <Container maxWidth="lg">
        <Box alignItems="center" display="flex" flexDirection="column">
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              color: '#a0a0a0',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#e0e0e0',
              },
            }}
          >
            © 2025 Shon Little. Crafted with
            <Favorite sx={{ fontSize: '1rem', color: '#ef4444' }} />
            and modern web technologies.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

// Export component.
export default Footer;
