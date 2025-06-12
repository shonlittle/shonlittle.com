/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-05
 */

// Add third-party dependencies.
import React from 'react';
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * ErrorBoundary component
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error in ErrorBoundary:', error, errorInfo);
    // Optionally log to an external service
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" color="error" gutterBottom>
            Something went wrong.
          </Typography>
          <Typography variant="body1">Our team has been notified. Please try refreshing the page.</Typography>
        </Box>
      );
    }

    return children;
  }
}

// Export component.
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

ErrorBoundary.defaultProps = {
  children: null,
};

export default ErrorBoundary;
