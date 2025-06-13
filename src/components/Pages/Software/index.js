/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { lazy, Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

// Add local dependencies.
import Navigation from './Navigation';

// Lazy load components.
const Hero = lazy(() => import('./Hero'));
const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Projects = lazy(() => import('./Projects'));
const Experience = lazy(() => import('./Experience'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));

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
