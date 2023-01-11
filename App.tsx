import { useState, useCallback } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'

import StartGameScreen from './screens/StartGame.screen'
import GameScreen from './screens/Game.screen'
import COLORS from './constants/colors'
import GameOverScreen from './screens/GameOver.screen'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>()
  const [isGameOver, setIsGameOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  const pickNumHandler = (pickedNum: number) => {
    setUserNumber(pickedNum)
    setIsGameOver(false)
  }

  const startNewGameHandler = () => {
    setUserNumber(null)
    setGuessRounds(0)
  }

  const gameOverHanlder = (roundsNum: number) => {
    setIsGameOver(true)
    setGuessRounds(roundsNum)
  }

  let screen = <StartGameScreen onPickNumber={pickNumHandler} />

  if (userNumber)
    screen = <GameScreen onGameOver={gameOverHanlder} userNumber={userNumber} />

  if (isGameOver && userNumber)
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    )

  if (!fontsLoaded) return null

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        onLayout={onLayoutRootView}
        colors={[COLORS.primiary[700], COLORS.accent[500]]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
