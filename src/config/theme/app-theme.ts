import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: '#ffffff',
  textSecondary: '#666666',
  background: '#000000',
};

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardResult: {paddingHorizontal: 20, paddingBottom: 10},
  mainResult: {
    textAlign: 'right',
    color: colors.textPrimary,
    fontSize: 50,
    fontWeight: '300',
  },
  subResult: {
    textAlign: 'right',
    color: colors.textSecondary,
    fontSize: 35,
    fontWeight: '200',
  },
  cardButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 3,
  },
  button: {
    backgroundColor: colors.darkGray,
    width: 80,
    height: 80,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
});
