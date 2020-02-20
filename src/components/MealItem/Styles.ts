import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 256,
    height: 256
  },
  card: {
    marginLeft: 60,
    marginTop: 60,
    padding: 20,
    paddingTop: 200,
    width: 180,
    height: 460,
    borderRadius: 10,
    backgroundColor: '#FBF0E4'
  },
  name: {
    fontSize: 18,
    fontWeight: '600'
  },
  extra: {
    fontSize: 14,
    color: '#9CA0AF'
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  bottomLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  caloriesWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  caloriesValue: {
    fontSize: 18,
    fontWeight: '600'
  },
  caloriesLabel: {
    marginLeft: 5,
    fontSize: 14,
    color: '#9CA0AF'
  },
  bookmark: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF'
  }
});
