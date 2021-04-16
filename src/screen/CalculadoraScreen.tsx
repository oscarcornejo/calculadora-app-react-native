import React from 'react';
import {Text, View} from 'react-native';

// Hooks
import useCalculate from '../hooks/useCalculate';

// Components
import BotonCalc from '../components/BotonCalc';

// Styles Theme
import {styles} from '../theme/appTheme';

const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDel,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculate();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' ? (
        <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
      ) : null}

      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {numero}
      </Text>

      {/* Fila Botón */}
      <View style={styles.filaButtons}>
        {/* Botón */}
        <BotonCalc texto="C" color="#9b9b9b" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9b9b9b" accion={positivoNegativo} />
        <BotonCalc texto="del" color="#9b9b9b" accion={btnDel} />
        <BotonCalc texto="/" color="#ff9427" accion={btnDividir} />
      </View>

      {/* Fila Botón */}
      <View style={styles.filaButtons}>
        {/* Botón */}
        <BotonCalc texto="7" color="#2d2d2d" accion={armarNumero} />
        <BotonCalc texto="8" color="#2d2d2d" accion={armarNumero} />
        <BotonCalc texto="9" color="#2d2d2d" accion={armarNumero} />
        <BotonCalc texto="X" color="#ff9427" accion={btnMultiplicar} />
      </View>

      {/* Fila Botón */}
      <View style={styles.filaButtons}>
        {/* Botón */}
        <BotonCalc texto="4" color="#2d2d2d" accion={armarNumero} />
        <BotonCalc texto="5" color="#2d2d2d" accion={armarNumero} />
        <BotonCalc texto="6" color="#2d2d2d" accion={armarNumero} />
        <BotonCalc texto="-" color="#ff9427" accion={btnRestar} />
      </View>

      {/* Fila Botón */}
      <View style={styles.filaButtons}>
        {/* Botón */}
        <BotonCalc texto="1" color="#2d2d2d" accion={armarNumero} />
        <BotonCalc texto="2" color="#2d2d2d" accion={armarNumero} />
        <BotonCalc texto="3" color="#2d2d2d" accion={armarNumero} />
        <BotonCalc texto="+" color="#ff9427" accion={btnSumar} />
      </View>

      {/* Fila Botón */}
      <View style={styles.filaButtons}>
        {/* Botón */}
        <BotonCalc
          texto="0"
          color="#2d2d2d"
          anchoButton={true}
          accion={armarNumero}
        />
        <BotonCalc texto="." color="#2d2d2d" accion={armarNumero} />
        <BotonCalc texto="=" color="#ff9427" accion={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
