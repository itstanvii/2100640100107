// Step 1: Install @reduxjs/toolkit if not already installed
// npm install @reduxjs/toolkit

// Step 2: Update the code
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./index";

const store = configureStore({
  reducer: reducers,
  // Redux DevTools are enabled by default in development mode
});

export default store;