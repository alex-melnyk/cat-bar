import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  sectionContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#FBF0E4',
    zIndex: 1
  },
  sectionItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionItemLabel: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#393E41'
  },
  sectionItemLabelActive: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#E94F37'
  },
  selectionContainer: {
    position: 'relative'
  },
  selectionWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    right: -27,
  },
  selectionDot: {
    marginRight: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F08E6F'
  },
  selectionBg: {
    width: 27,
    height: 141
  },
  noContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noContentLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  contentContainer: {
    flex: 1
  }
});
