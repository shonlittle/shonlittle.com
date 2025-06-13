/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Slide, useScrollTrigger, AppBar, Toolbar, Button } from '@mui/material';

// Add local dependencies.
import useNavigation from '../../../hooks/useNavigation';

/**
 * Component to hide on scroll.
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Children components to render.
 * @returns {React.ReactElement} Rendered component.
 */
const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

/**
 * Navigation component.
 * @example
 * return (
 *   <Navigation />
 * )
 * @returns {React.ReactElement} component.
 */
const Navigation = () => {
  // Scroll to section by id
  const [, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useNavigation(setIsMenuOpen);
  // Render component.
  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={theme => ({
          ...theme.mixins.glassEffect,
          paddingY: 1,
        })}
      >
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, mx: 'auto', width: '100%' }}>
          <Typography
            variant="gradient"
            component="h6"
            sx={{
              fontWeight: 700,
            }}
          >
            Shon Little
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
              <Button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                variant="hover"
                sx={{
                  color: 'text.secondary',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 400,
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 2,
                    backgroundColor: 'primary.main',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

// Set component property types.
HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export component.
export default Navigation;
