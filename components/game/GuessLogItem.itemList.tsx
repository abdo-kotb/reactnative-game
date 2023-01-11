import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../../constants/colors'

interface Props {
  roundNumber: number
  guess: number
}

const GuessLogItem: FC<Props> = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
      </View>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
  listItem: {
    borderColor: COLORS.primiary[800],
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.accent[500],
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: COLORS.black.default,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: { fontFamily: 'open-sans' },
})
