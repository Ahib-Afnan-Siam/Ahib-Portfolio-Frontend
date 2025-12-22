// Utility function to get the base URL for API calls
export const getApiBaseUrl = () => {
  // Check if we have a specific API URL environment variable
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // In development, use localhost
  if (import.meta.env.MODE === 'development') {
    return 'http://localhost:5000';
  }
  
  // In production, use the Render backend URL
  return 'https://ahib-portfolio-backend.onrender.com';
};

// Utility function to make API calls
export const apiCall = async (endpoint, options = {}) => {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  
  try {
    const response = await fetch(url, mergedOptions);
    return response;
  } catch (error) {
    console.error(`API call failed for ${url}:`, error);
    throw error;
  }
};