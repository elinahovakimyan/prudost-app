export const appConfig = {
  // todo add library to handle env variables
  API_ENDPOINT:
    process.env.AUTH_API_ENDPOINT || 'http://prudost.herokuapp.com',
  defaultTimeout: 5000,
};
