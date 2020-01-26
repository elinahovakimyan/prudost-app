export const appConfig = {
  // todo add library to handle env variables
  AuthAPIEndPoint:
    process.env.AUTH_API_ENDPOINT || 'http://localhost:8000',
  defaultTimeout: 5000,
};
