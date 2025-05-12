/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-05
 */

// Add third-party dependencies.
import React from "react";
import { Typography, Box } from "@mui/material";

/**
 * ErrorBoundary component
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error in ErrorBoundary:", error, errorInfo);
    // Optionally log to an external service
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h4" color="error" gutterBottom>
            Something went wrong.
          </Typography>
          <Typography variant="body1">
            Our team has been notified. Please try refreshing the page.
          </Typography>
        </Box>
      );
    }

    return this.props.children;
  }
}

// Export component.
export default ErrorBoundary;
