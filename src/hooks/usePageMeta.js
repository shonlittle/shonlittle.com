/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2026-11-12
 */

// Add third-party dependencies.
import { useEffect } from 'react';

/**
 * Custom hook that sets the document title, meta description and canonical URL for a page,
 * and restores the previous values when the page unmounts.
 *
 * Crawlers and link previews that do not run JavaScript get the same values from the static
 * snapshot written by scripts/prerender-software.js.
 * @param {Object} meta - Page metadata.
 * @param {string} meta.title - Document title.
 * @param {string} meta.description - Meta description.
 * @param {string} meta.url - Canonical URL.
 */
const usePageMeta = ({ title, description, url }) => {
  useEffect(() => {
    // Remember the current values so they can be restored.
    const previousTitle = document.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute('content');

    // Set the title and description.
    document.title = title;
    descriptionTag?.setAttribute('content', description);

    // Set the canonical URL, adding the link tag if the page does not have one.
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    const addedCanonical = !canonicalTag;
    const previousCanonical = canonicalTag?.getAttribute('href');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', url);

    // Restore the previous values.
    return () => {
      document.title = previousTitle;
      if (previousDescription != null) {
        descriptionTag?.setAttribute('content', previousDescription);
      }
      if (addedCanonical) {
        canonicalTag.remove();
      } else if (previousCanonical != null) {
        canonicalTag.setAttribute('href', previousCanonical);
      }
    };
  }, [title, description, url]);
};

// Export hook.
export default usePageMeta;
