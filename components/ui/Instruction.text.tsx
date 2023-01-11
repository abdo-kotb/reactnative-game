import { FC } from 'react'
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native'

import COLORS from '../../constants/colors'

interface Props {
  children: string
  style?: StyleProp<TextStyle>
}

const InstructionText: FC<Props> = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans-bold',
    color: COLORS.accent[500],
    fontSize: deviceWidth < 380 ? 20 : 24,
  },
})
