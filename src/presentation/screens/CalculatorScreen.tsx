import {Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.cardResult}>
        <Text style={styles.mainResult}>12 * 100</Text>
        <Text style={styles.subResult}>1200</Text>
      </View>

      <View style={styles.cardButton}>
        <CalculatorButton label="C" color={colors.lightGray} />
        <CalculatorButton label="+/-" color={colors.lightGray} />
        <CalculatorButton label="del" color={colors.lightGray} />
        <CalculatorButton label="/" color={colors.orange} />
      </View>
      <View style={styles.cardButton}>
        <CalculatorButton label="7" />
        <CalculatorButton label="8" />
        <CalculatorButton label="9" />
        <CalculatorButton label="x" color={colors.orange} />
      </View>
      <View style={styles.cardButton}>
        <CalculatorButton label="4" />
        <CalculatorButton label="5" />
        <CalculatorButton label="6" />
        <CalculatorButton label="-" color={colors.orange} />
      </View>
      <View style={styles.cardButton}>
        <CalculatorButton label="1" />
        <CalculatorButton label="2" />
        <CalculatorButton label="3" />
        <CalculatorButton label="+" color={colors.orange} />
      </View>
      <View style={styles.cardButton}>
        <CalculatorButton label="00" />
        <CalculatorButton label="0" />
        <CalculatorButton label="." />
        <CalculatorButton label="=" color={colors.orange} />
      </View>
    </View>
  );
};
