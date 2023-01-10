import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <View>
        <Text>Opponent's Guess</Text>
        {/* GUESS */}
      </View>
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})
