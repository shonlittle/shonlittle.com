/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Slide,
  useScrollTrigger,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useNavigation(setIsMenuOpen);

  // Get theme and check if screen is mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // Render component.
  return (
    // Temporarily disable HideOnScroll to make AppBar always visible
    // <HideOnScroll>
    <AppBar
      position="fixed"
      sx={{
        ...theme.mixins.glassEffect,
        paddingY: 1,
        zIndex: 1300,
        top: 0,
        left: 0,
        right: 0,
      }}
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

        {/* Desktop Navigation */}
        {!isMobile && (
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
        )}

        {/* Mobile Navigation - Hamburger Icon */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsMenuOpen(true)}
            sx={{
              ml: 2,
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Navigation - Drawer */}
        <Drawer
          anchor="right"
          open={isMobile && isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: '70%',
              maxWidth: '300px',
              boxSizing: 'border-box',
              ...theme.mixins.glassEffect,
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              py: 2,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
            role="presentation"
          >
            <Typography
              variant="gradient"
              component="h6"
              sx={{
                fontWeight: 700,
                px: 3,
                mb: 3,
              }}
            >
              Shon Little
            </Typography>

            <List>
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
                <ListItem
                  button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '1.1rem',
                        fontWeight: 400,
                        color: 'text.secondary',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
    // </HideOnScroll>
  );
};

// Set component property types.
HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export component.
export default Navigation;
