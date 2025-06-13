/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-06
 */

// Add third-party dependencies.
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

// Lazy load route components
const Home = React.lazy(() => import('../Pages/Home'));
const Software = React.lazy(() => import('../Pages/Software'));
const Email = React.lazy(() => import('../Pages/Email'));

// Loading fallback component
const LoadingFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

/**
 * Router component.
 * @example
 * return (
 *   <Router />
 * )
 * @returns {React.ReactElement} component.
 */
const Router = () => {
  // Render component.
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </Suspense>
  );
};

// Export component.
export default Router;
