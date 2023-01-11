import { FC } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../constants/colors'

const NumberContainer: FC<{ children: number }> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent[500],
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: COLORS.accent[500],
    fontSize: deviceWidth < 380 ? 24 : 36,
    fontFamily: 'open-sans-bold',
  },
})
