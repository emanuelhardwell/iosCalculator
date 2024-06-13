import {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState<string>('0');

  const clean = () => {
    setNumber('0');
  };

  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-1')) {
      console.log('entro');

      // punto decimal (No es necesario hacer esta validación porque ya lo hace por defecto)
      //   if (numberString === '.') return setNumber(number + numberString);

      // Evaluar si es otro 0 y no hay punto
      if (numberString === '0' && number.includes('.'))
        return setNumber(number + numberString);

      // Evaluar si es diferente de 0, no hay punto y es el primer numero
      if (numberString !== '0' && !number.includes('.'))
        return setNumber(numberString);

      // Evitar 000000.00
      if (numberString === '0' && !number.includes('.')) return;

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  return {
    // properties
    number,

    // functions
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
  };
};
