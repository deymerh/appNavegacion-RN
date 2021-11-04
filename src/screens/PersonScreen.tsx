import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { stylesGlobal } from '../theme/stylesGlobal';
import { RootStackParams } from '../navigation/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> { };

export const PersonScreen = ({ route, navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.name
    })
  }, [])
  return (
    <View style={stylesGlobal.globalMarginHorizontalPage}>
      <Text style={stylesGlobal.colorText}>Página de Persona</Text>
      <Text style={stylesGlobal.colorText}>El nombre es: {route.params?.name}</Text>
    </View>
  )
}
