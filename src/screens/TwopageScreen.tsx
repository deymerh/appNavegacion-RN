import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { stylesGlobal } from '../theme/stylesGlobal';

interface Props extends NativeStackScreenProps<any, any> { };

export const TwopageScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Título tab',
      headerBackTitle: 'Atras'
    })
  }, [])
  return (
    <View style={stylesGlobal.globalMarginHorizontalPage}>
      <Text style={stylesGlobal.colorText}>Página TwopageScreen</Text>
      <Button
        title="Ir a página 3"
        onPress={() => navigation.navigate('ThreepageScreen')}
      />
    </View>
  )
}
