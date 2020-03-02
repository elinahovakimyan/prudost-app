export const appConfig = {
  // todo add library to handle env variables
  API_ENDPOINT:
    process.env.AUTH_API_ENDPOINT || 'https://prudost.herokuapp.com',
  defaultTimeout: 5000,
};
