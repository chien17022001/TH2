// src/contexts/TopBarContext.js

import React, { createContext, useState, useContext } from 'react';

// Create the context
const TopBarContext = createContext();

// Custom hook to use the context
export const useTopBarContext = () => useContext(TopBarContext);  // This is now being exported properly

// Provider component that wraps your app and provides the context
const TopBarProvider = ({ children }) => {
  const [context, setContext] = useState('');

  return (
    <TopBarContext.Provider value={{ context, setContext }}>
      {children}
    </TopBarContext.Provider>
  );
};

export default TopBarProvider;  // Default export for the provider
