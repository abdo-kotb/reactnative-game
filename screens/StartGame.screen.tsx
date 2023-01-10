import { FC, useState } from 'react'

import { Alert, StyleSheet, TextInput, View } from 'react-native'

import PrimaryButton from '../components/Primary.button'
import COLORS from '../constants/colors'

const StartGameScreen: FC<{ onPickNumber: (num: number) => void }> = ({
  onPickNumber,
}) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText)
  }

  const resetInputHandler = () => setEnteredNumber('')

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Must be a number between 1 and 99'),
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ]
      return
    }

    onPickNumber(chosenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: COLORS.primiary[800],
    borderRadius: 8,
    // android-specific shadow
    elevation: 4,

    /**
     * iOS-specific shadow
     */
    //////
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    //////
  },
  numberInput: {
    height: 50,
    width: 64,
    fontSize: 32,
    borderBottomColor: COLORS.accent[500],
    borderBottomWidth: 2,
    color: COLORS.accent[500],
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
