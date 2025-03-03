import axios from "axios";
import logo from "../../assets/logo/apnacarrer_logo.png";
export { logo };
// Define API base URL
const API_BASE_URL = "https://apna-api.hnweb.site/api/v1/seeker"; // Change this as needed

// Set default headers (e.g., API Key, Authorization)
const API_KEY = "7e2d93a1-c3ad-4c10-ab04-73a4c538a46d"; // If required

// Create an Axios instance with predefined settings
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY, // Optional API Key Header
  },
});

// Function to set auth token dynamically (after login)
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("authToken", token); // Store token for persistence
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("authToken");
  }
};

export default api;
