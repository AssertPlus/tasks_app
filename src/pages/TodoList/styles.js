import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFF'
  },

  containerTitle: {
    width: '100%',
    height: 54,
    justifyContent: 'flex-end',

    marginTop: (Platform.OS === 'ios') ? 24 : 0
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  containerTask: {
    width: '100%',
    height: 64,
    borderRadius: 10,
    marginTop: 16,
    elevation: 2,

    flexDirection: 'row',

    backgroundColor: '#dcdcdc'
  },

  containerInfos: {
    height: 64,
    width: '65%',
    paddingTop: 5,
    paddingLeft: 12
  },

  titleTasks: {
    fontSize: 14,
    fontWeight: 'bold'
  },

  taskName: {
    fontSize: 16,
  },

  containerOptions: {
    height: 64,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  editText: {
    fontSize: 14,
    fontWeight: '700',

    color: '#aa00aa'
  },

  deleteText: {
    fontSize: 14,
    fontWeight: '700',

    color: '#ff0011'
  },

  containerButton: {
    flex: 1,
    width: '100%',
    height: 64,
    marginBottom: 20,

    justifyContent: 'flex-end',
  },

  buttonGoBack: {
    width: '100%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    backgroundColor: '#00008b'
  },

  textButtonGoBack: {
    fontSize: 16,
    color: '#FFF'
  }

});

export default styles;
