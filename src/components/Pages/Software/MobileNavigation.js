/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-13
 */

// Add third-party dependencies.
import { useState } from 'react';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Add local dependencies.
import useNavigation from '../../../hooks/useNavigation';

/**
 * MobileNavigation component - A simplified navigation bar specifically for mobile devices.
 * @returns {React.ReactElement} component.
 */
const MobileNavigation = () => {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useNavigation(setIsMenuOpen);

  // Get theme
  const theme = useTheme();

  // Render component.
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '0 16px',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              color: 'white',
            }}
          >
            Shon Little
          </Typography>

          {/* Mobile Navigation - Hamburger Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsMenuOpen(true)}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation - Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '70%',
            maxWidth: '300px',
            boxSizing: 'border-box',
            backgroundColor: theme.palette.background.paper,
          },
          zIndex: 10000,
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
            variant="h6"
            component="div"
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
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: '1.1rem',
                      fontWeight: 400,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

// Export component.
export default MobileNavigation;
