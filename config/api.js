const environment = process.env.NODE_ENV || "development";

const isDevelopment = environment === "development";

export const API_BASE_URL = isDevelopment
  ? "http://localhost:3000"
  : "https://vodyet.com";
