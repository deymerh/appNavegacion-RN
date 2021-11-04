import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, stylesGlobal } from '../theme/stylesGlobal'


export const ChatScreen = () => {
  return (
    <View>
      <Text style={stylesGlobal.colorText}>ChatScreen</Text>
      <Text>
        <Icon name="battery-full-outline" size={50} color={colors.primary} />
        <Icon name="skull-outline" size={50} color={colors.primary} />
      </Text>
    </View>
  )
}
