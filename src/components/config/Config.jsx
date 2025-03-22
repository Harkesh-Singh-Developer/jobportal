import axios from "axios";
import CryptoJS from "crypto-js";
import logo from "../../assets/logo/apnacarrer_logo.png";
export { logo };
// Define API base URL
const API_BASE_URL = "https://apna-api.hnweb.site/api/v1/seeker"; // Change this as needed

// Set default headers (e.g., API Key, Authorization)
const API_KEY = "7e2d93a1-c3ad-4c10-ab04-73a4c538a46d"; // If required
const SECRET_KEY = "38a46d73a4c5"; // Key for Encryption
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
export const encryptUrlParams = (params) => {
  const encrypted = CryptoJS.AES.encrypt(
    params.toString(),
    SECRET_KEY
  ).toString();
  return encodeURIComponent(encrypted);
};

export const decryptUrlParams = (encryptedParam) => {
  const decodedParam = decodeURIComponent(encryptedParam);
  const bytes = CryptoJS.AES.decrypt(decodedParam, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
