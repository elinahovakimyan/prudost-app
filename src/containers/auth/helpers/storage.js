import AsyncStorage from '@react-native-community/async-storage';

const Constants = {
  ACCESS_TOKEN: 'access_token',
  USER: 'user',
};


const StorageUtils = {
  getAccessToken: async () => {
    const token = await AsyncStorage.getItem(Constants.ACCESS_TOKEN);
    return token;
  },

  setAccessToken: async (token) => {
    await AsyncStorage.setItem(Constants.ACCESS_TOKEN, token);
  },

  removeAccessToken: async () => {
    await AsyncStorage.removeItem(Constants.ACCESS_TOKEN);
  },

  getUser: async () => {
    const user = await AsyncStorage.getItem(Constants.USER);
    return user ? JSON.parse(user) : {};
  },

  setUser: async (user) => {
    const userObject = user ? JSON.stringify(user) : null;
    await AsyncStorage.setItem(Constants.USER, userObject);
  },

  removeUser: async () => {
    await AsyncStorage.removeItem(Constants.USER);
  },
};

export default StorageUtils;
