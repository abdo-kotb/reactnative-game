import { StyleSheet, View } from 'react-native'
import StartGameScreen from './screens/StartGame.screen'

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
})
