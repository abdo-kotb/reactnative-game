import { FC, useState, useEffect, useMemo } from 'react'
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import NumberContainer from '../components/game/NumberContainer.text'
import InstructionText from '../components/ui/Instruction.text'
import PrimaryButton from '../components/ui/Primary.button'
import Title from '../components/ui/Title.text'

import generateRandomBetween from '../utils/genRandomNum'
import COLORS from '../constants/colors'
import GuessLogItem from '../components/game/GuessLogItem.itemList'
import Card from '../components/ui/Card'

interface Props {
  userNumber: number
  onGameOver: (roundsNum: number) => void
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen: FC<Props> = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber)

  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  const { width, height } = useWindowDimensions()

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(guessRounds.length)
  }, [currentGuess, userNumber])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  const nextGuessHandler = (direction: 'lower' | 'greater') => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Oops!', 'You know this is wrong... 😉', [
        {
          text: 'sorry!',
          style: 'cancel',
        },
      ])
      return
    }

    if (direction === 'lower') maxBoundary = currentGuess
    if (direction === 'greater') minBoundary = currentGuess + 1

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRandomNumber)
    setGuessRounds(prevState => [newRandomNumber, ...prevState])
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons
                name="md-remove"
                size={24}
                color={COLORS.white.default}
              />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name="md-add" size={24} color={COLORS.white.default} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  )

  if (width > 500) {
    content = (
      <>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons
                name="md-remove"
                size={24}
                color={COLORS.white.default}
              />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name="md-add" size={24} color={COLORS.white.default} />
            </PrimaryButton>
          </View>
        </View>
      </>
    )
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRounds.length - index}
              guess={item}
            />
          )}
          keyExtractor={item => item.toString()}
        />
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingTop: 16,
  },
})
