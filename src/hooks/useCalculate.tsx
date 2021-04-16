import {useRef, useState} from 'react';

// TypeScript
enum Operadores {
  dividir,
  multiplicar,
  restar,
  sumar,
}

const useCalculate = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacionRef = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numText: string) => {
    // Verificar doble punto
    if (numero.includes('.') && numText === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Verificar Punto decimal
      if (numText === '.') {
        setNumero(numero + numText);
      }
      // Evaluar si es otro cero, y hay un punto
      else if (numText === '0' && numero.includes('.')) {
        setNumero(numero + numText);
      }
      // Evaluar si es diferente de cero, y no tiene un punto
      else if (numText !== '0' && !numero.includes('.')) {
        setNumero(numText);
      }
      // Evitar 0000.0
      else if (numText === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numText);
      }
    } else {
      setNumero(numero + numText);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDel = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substr(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumeroPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }

    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacionRef.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacionRef.current = Operadores.multiplicar;
  };
  const btnRestar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacionRef.current = Operadores.restar;
  };
  const btnSumar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacionRef.current = Operadores.sumar;
  };

  const calcular = () => {
    console.log('calcular');

    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    console.log(num1);
    console.log(num2);

    if (num1 === 0 && num2 === 0) {
      return setNumero('0');
    }

    if (num1 && !num2) {
      return setNumero(`${num1}`);
    }

    switch (ultimaOperacionRef.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumero(`${num1 / num2}`);
        break;
    }

    setNumeroAnterior('0');
  };

  return {
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
  };
};

export default useCalculate;
