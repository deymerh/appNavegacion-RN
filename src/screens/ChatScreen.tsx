import React from 'react'
import { View, Text } from 'react-native'
import { TouchableIcon } from '../components/TouchableIcon';

import { stylesGlobal } from '../theme/stylesGlobal'


export const ChatScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={stylesGlobal.colorText}>ChatScreen</Text>
      <Text style={{ flex: 1 }}>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="skull-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  )
}
