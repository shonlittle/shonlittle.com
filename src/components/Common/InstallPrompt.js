/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-13
 */

// Add third-party dependencies.
import { useState, useEffect } from 'react';
import { Button, Snackbar, Box, Typography, useMediaQuery } from '@mui/material';
import { Download as DownloadIcon, Close as CloseIcon } from '@mui/icons-material';

/**
 * InstallPrompt component.
 * Displays a prompt for users to install the PWA.
 * @example
 * return (
 *   <InstallPrompt />
 * )
 * @returns {React.ReactElement} component.
 */
const InstallPrompt = () => {
  // State to store the install prompt event
  const [installPrompt, setInstallPrompt] = useState(null);
  // State to control visibility of the prompt
  const [showPrompt, setShowPrompt] = useState(false);
  // Check if screen is mobile using a direct media query
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    // Handler for the beforeinstallprompt event
    const handleBeforeInstallPrompt = e => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setInstallPrompt(e);
      // Show the install prompt
      setShowPrompt(true);
    };

    // Add event listener for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if the app is already installed
    const isAppInstalled = window.matchMedia('(display-mode: standalone)').matches;
    if (isAppInstalled) {
      // Don't show the install prompt if the app is already installed
      setShowPrompt(false);
    }

    // Cleanup function to remove event listener
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  // Handler for the install button click
  const handleInstallClick = () => {
    if (!installPrompt) return;

    // Show the install prompt
    installPrompt.prompt();

    // Wait for the user to respond to the prompt
    installPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      // Clear the saved prompt since it can't be used again
      setInstallPrompt(null);
      setShowPrompt(false);
    });
  };

  // Handler for the dismiss button click
  const handleDismiss = () => {
    setShowPrompt(false);
  };

  // Render the component
  return (
    <Snackbar
      open={showPrompt && isMobile}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 2,
          padding: 2,
          background: theme => theme.palette.background.paper,
          border: theme => `1px solid ${theme.palette.primary.main}`,
          width: '100%',
          maxWidth: '350px',
          color: theme => theme.palette.text.primary,
        },
      }}
      message={
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 1 }}>
          <Typography
            variant="body1"
            component="span"
            sx={{
              fontWeight: 'medium',
              color: theme => theme.palette.text.primary,
              fontSize: '1rem',
            }}
          >
            Install this app on your device
          </Typography>
        </Box>
      }
      action={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            mt: 1,
            gap: 1,
          }}
        >
          <Button
            color="inherit"
            size="small"
            onClick={handleDismiss}
            startIcon={<CloseIcon />}
            sx={{
              color: 'text.secondary',
              minWidth: '90px',
            }}
          >
            Not now
          </Button>
          <Button
            color="primary"
            size="small"
            onClick={handleInstallClick}
            startIcon={<DownloadIcon />}
            variant="contained"
            sx={{
              borderRadius: 1.5,
              minWidth: '90px',
            }}
          >
            Install
          </Button>
        </Box>
      }
    />
  );
};

// Export component.
export default InstallPrompt;
