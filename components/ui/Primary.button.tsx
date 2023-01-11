import { FC, ReactNode } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../constants/colors'

interface Props {
  children: ReactNode
  onPress: () => void
}

const PrimaryButton: FC<Props> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
        android_ripple={{ color: COLORS.primiary[600] }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: COLORS.primiary[500],
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
})
