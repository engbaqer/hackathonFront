// src/utils/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // fake test API
});

// Response interceptor → error handler
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      const messages = {
        400: "Bad Request: The request data is invalid.",
        401: "Unauthorized: Please log in again.",
        403: "Forbidden: Access denied.",
        404: "Not Found: The requested resource does not exist.",
        422: "Unprocessable Entity: The submitted data is invalid.",
        500: "Internal Server Error: Something went wrong on the server.",
      };

      const message =
        messages[status] || "An unexpected server error occurred.";
      console.error(`${status} - ${message}`);
    } else if (error.request) {
      console.error("No response received from the server.");
    } else {
      console.error("Request setup error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
