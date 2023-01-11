import { FC, ReactNode } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import COLORS from '../../constants/colors'

const Card: FC<{ children: ReactNode }> = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 36 : 56,
    marginHorizontal: deviceWidth < 380 ? 8 : 24,
    padding: 16,
    backgroundColor: COLORS.primiary[800],
    borderRadius: 8,
    // android-specific shadow
    elevation: 4,

    /**
     * iOS-specific shadow
     */
    //////
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    //////
  },
})
