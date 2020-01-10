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
    AsyncStorage.setItem(Constants.ACCESS_TOKEN, token);
  },

  getUser: async () => {
    const user = await AsyncStorage.getItem(Constants.USER);
    return user ? JSON.parse(user) : {};
  },

  setUser: async (user) => {
    const userObject = user ? JSON.stringify(user) : null;
    AsyncStorage.setItem(Constants.USER, userObject);
  },
};

export default StorageUtils;
