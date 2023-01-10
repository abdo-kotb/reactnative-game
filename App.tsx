import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import StartGameScreen from './screens/StartGame.screen'

export default function App() {
  return <StartGameScreen />
}

const styles = StyleSheet.create({
  appContianer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
})
