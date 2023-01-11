import { FC } from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../constants/colors'

interface Props {
  children: string
}

const Title: FC<Props> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 18 : 24,
    marginTop: deviceWidth < 380 ? 24 : 0,
    color: COLORS.white.default,
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: COLORS.white.default,
    padding: 12,
    maxWidth: '80%',
  },
})
