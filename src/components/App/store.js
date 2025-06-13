/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-06
 */

// Add third-party dependencies.
import { configureStore } from '@reduxjs/toolkit';

// Create a dummy reducer
// eslint-disable-next-line no-unused-vars
const dummyReducer = (state = {}) => {
  return state;
};

// Create the store.
const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});

// Export the store.
export default store;
