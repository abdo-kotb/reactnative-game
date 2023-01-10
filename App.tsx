import { useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGame.screen'
import GameScreen from './screens/Game.screen'

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>()

  const pickNumHandler = (pickedNum: number) => {
    setUserNumber(pickedNum)
  }

  let screen = <StartGameScreen onPickNumber={pickNumHandler} />

  if (userNumber) screen = <GameScreen />

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
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
