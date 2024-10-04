// Create an Axios instance with default settings
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, // Use the environment variable for the base URL
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  // Optional: Add request interceptors if needed
  apiClient.interceptors.request.use(
    (config) => {
      // Add any additional headers or modify the request here
      // For example, add an authorization token if available
      // const token = localStorage.getItem('token');
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Optional: Add response interceptors if needed
  apiClient.interceptors.response.use(
    (response) => {
      return response.data; // Automatically extract data from the response
    },
    (error) => {
      // Handle errors globally or log them
      console.error('API request error:', error);
      return Promise.reject(error);
    }
  );
  
  // Define API methods
  export const getUser = (userId) => {
    return apiClient.get(`/users/${userId}`);
  };
  
  export const createUser = (userData) => {
    return apiClient.post('/users', userData);
  };
  
  export const updateUser = (userId, userData) => {
    return apiClient.put(`/users/${userId}`, userData);
  };
  
  export const deleteUser = (userId) => {
    return apiClient.delete(`/users/${userId}`);
  };