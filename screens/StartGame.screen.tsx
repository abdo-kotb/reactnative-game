import { FC, useState } from 'react'

import {
  Alert,
  useWindowDimensions,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import COLORS from '../constants/colors'

import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/Primary.button'
import Title from '../components/ui/Title.text'
import InstructionText from '../components/ui/Instruction.text'

const StartGameScreen: FC<{ onPickNumber: (num: number) => void }> = ({
  onPickNumber,
}) => {
  const [enteredNumber, setEnteredNumber] = useState('')
  const { width, height } = useWindowDimensions()

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

  const marginTop = height < 450 ? 30 : 100

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess my number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
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
