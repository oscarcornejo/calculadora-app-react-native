import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CalculadoraScreen from './src/screen/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

function App() {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <CalculadoraScreen />
    </SafeAreaView>
  );
}

export default App;
