import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16
  },

  containerTitle: {
    width: '100%',
    height: 54,
    justifyContent: 'flex-end',

    marginTop: (Platform.OS === 'ios') ? 24 : 0
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  containerImg: {
    flex: 2,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
  },

  containerInput: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-end',
    width: '100%'
  },

  inputTask: {
    height: 54,
    borderWidth: 0.5,
    borderRadius: 10,
    fontSize: 16
  },

  containerButton: {
    flex: 1,
    marginTop: 20,
    width: '100%'
  },

  buttonEnabled: {
    height: 54,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#00008b',

    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonDisabled: {
    height: 54,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#808080',

    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    fontSize: 16,
    color: '#FFF'
  }

});

export default styles;
