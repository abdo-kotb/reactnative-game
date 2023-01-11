import { FC } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'

import PrimaryButton from '../components/ui/Primary.button'
import Title from '../components/ui/Title.text'

import COLORS from '../constants/colors'

interface Props {
  roundsNumber: number
  userNumber: number
  onStartNewGame: () => void
}

const GameOverScreen: FC<Props> = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  const { width, height } = useWindowDimensions()

  let imageSize = 300

  if (width < 380) {
    imageSize = 180
  }
  if (height < 400) {
    imageSize = 100
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        I guessed your number <Text style={styles.highlight}>{userNumber}</Text>{' '}
        in <Text style={styles.highlight}>{roundsNumber}</Text> rounds 💥
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: COLORS.primiary[800],
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: COLORS.primiary[500],
  },
})
