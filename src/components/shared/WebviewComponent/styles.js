import { StyleSheet, Dimensions, Platform } from 'react-native';

const styles = StyleSheet.create({
  webView: {
    marginTop: Platform.OS === 'ios' ? 35 : 0,
  },
  indicator: {
    flex: 1,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  buttonContainer: {
    marginVertical: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  closeButtonWithWrapper: {
    backgroundColor: '#ffd96d',
    width: Dimensions.get('screen').width,
    height: 70,
    borderWidth: 1,
    borderColor: '#ffd96d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
