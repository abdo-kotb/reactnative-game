import { FC } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface Props {
  children: string
}

const PrimaryButton: FC<Props> = ({ children }) => {
  const pressHandler = () => {}

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && styles.pressed,
        ]}
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
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
    backgroundColor: '#72063c',
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
