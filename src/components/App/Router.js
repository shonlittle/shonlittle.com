/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-06
 */

// Add third-party dependencies.
import { Routes, Route } from 'react-router-dom';

// Add local dependencies.
import Home from '../Pages/Home';
import Software from '../Pages/Software';
import Email from '../Pages/Email';

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/software" element={<Software />} />
      <Route path="/email" element={<Email />} />
    </Routes>
  );
};

// Export component.
export default Router;
