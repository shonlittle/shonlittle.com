/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { useCallback } from 'react';

/**
 * Custom hook for navigation functionality.
 * @param {Function} setIsMenuOpen - Optional callback to close mobile menu.
 * @returns {Object} Object containing scrollToSection function.
 */
const useNavigation = setIsMenuOpen => {
  const scrollToSection = useCallback(
    sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Close mobile menu if callback provided
      if (setIsMenuOpen) {
        setIsMenuOpen(false);
      }
    },
    [setIsMenuOpen]
  );

  // Return object with scrollToSection function.
  return { scrollToSection };
};

// Export hook.
export default useNavigation;
