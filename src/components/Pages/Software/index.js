/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { Box } from '@mui/material';

// Add local dependencies.
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

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
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </Box>
  );
};

// Export component.
export default Software;
