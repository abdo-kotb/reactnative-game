import { FC } from 'react'
import { Text, View } from 'react-native'

interface Props {
  children: string
}

const PrimaryButton: FC<Props> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default PrimaryButton
