/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import diceOne from './assets/dice1.png';
import diceTwo from './assets/dice2.png';
import diceThree from './assets/dice3.png';
import diceFour from './assets/dice4.png';
import diceFive from './assets/dice5.png';
import diceSix from './assets/dice6.png';

const App = () => {
  const [firstDice, setFirstDice] = useState(diceOne);
  const [secondDice, setSecondDice] = useState(diceOne);

  const diceRoll = () => {
    let randomOne = Math.floor(Math.random() * 6) + 1;
    let randomTwo = Math.floor(Math.random() * 6) + 1;

    getDice(randomOne, setFirstDice);
    getDice(randomTwo, setSecondDice);
  };

  const getDice = (randomNum, setDice) => {
    switch (randomNum) {
      case 1:
        setDice(diceOne);
        break;

      case 2:
        setDice(diceTwo);
        break;

      case 3:
        setDice(diceThree);
        break;

      case 4:
        setDice(diceFour);
        break;

      case 5:
        setDice(diceFive);
        break;

      case 6:
        setDice(diceSix);
        break;

      default:
        setDice(diceOne);
        break;
    }
  };

  return (
    <>
      <StatusBar style={styles.bgColor} />
      <View style={[styles.container, styles.bgColor]}>
        <View style={styles.diceWrapper}>
          <Image source={firstDice} style={styles.dice} />
          <Image source={secondDice} style={styles.dice} />
        </View>
        <TouchableOpacity onPress={diceRoll} style={styles.btn}>
          <Text style={styles.text}>Roll</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bgColor: {
    backgroundColor: '#21325E',
    color: 'white',
  },

  btn: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    borderRadius: 50,
    margin: 10,
    width: 100,
  },

  text: {
    fontWeight: '900',
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 16,
  },

  dice: {
    height: 100,
    width: 100,
    margin: 10,
  },

  diceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },
});

export default App;
