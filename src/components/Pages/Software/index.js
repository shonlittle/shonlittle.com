/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import React, { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

// Add local dependencies.
import Navigation from './Navigation';

// Lazy load components.
const Hero = React.lazy(() => import('./Hero'));
const About = React.lazy(() => import('./About'));
const Skills = React.lazy(() => import('./Skills'));
const Projects = React.lazy(() => import('./Projects'));
const Experience = React.lazy(() => import('./Experience'));
const Contact = React.lazy(() => import('./Contact'));
const Footer = React.lazy(() => import('./Footer'));

// Simple loading indicator
const SectionLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
    <CircularProgress size={40} />
  </Box>
);

/**
 * Software component.
 * @example
 * return (
 *   <Software />
 * )
 * @returns {React.ReactElement} component.
 */
const Software = () => {
  // Render component.
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Navigation />
      {[
        <Hero key="hero" />,
        <About key="about" />,
        <Skills key="skills" />,
        <Projects key="projects" />,
        <Experience key="experience" />,
        <Contact key="contact" />,
        <Footer key="footer" />,
      ].map(section => (
        <Suspense key={section.key} fallback={<SectionLoader />}>
          {section}
        </Suspense>
      ))}
    </Box>
  );
};

// Export component.
export default Software;
