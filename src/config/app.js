export const appConfig = {
  // todo add library to handle env variables
  API_ENDPOINT:
    // process.env.AUTH_API_ENDPOINT || 'http://localhost:8000',
    process.env.AUTH_API_ENDPOINT || 'https://prudost-api.herokuapp.com',
  defaultTimeout: 15000,
};
