import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/colors'

interface Props {
  children: string
}

const Title: FC<Props> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent[500],
    textAlign: 'center',
    borderWidth: 2,
    borderColor: COLORS.accent[500],
    padding: 12,
  },
})
