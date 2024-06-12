import {Pressable, Text, View} from 'react-native';
import {styles} from '../../config/theme/app-theme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.cardResult}>
        <Text style={styles.mainResult}>12 * 100</Text>
        <Text style={styles.subResult}>1200</Text>
      </View>

      <View style={styles.cardButton}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>hola bebe</Text>
        </Pressable>
      </View>
    </View>
  );
};
