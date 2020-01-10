import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height,
    paddingHorizontal: 15,
    backgroundColor: '#33638e',
  },
});
