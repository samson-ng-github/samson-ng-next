const dev = process.env.NODE_ENV !== "production";

export const root = dev ? "http://localhost:3000" : "http://samson-ng.com";
