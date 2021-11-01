import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { stylesGlobal } from '../theme/stylesGlobal';

interface Props extends DrawerScreenProps<any, any> { };
// interface Props extends NativeStackScreenProps<any, any> { };

export const OnepageScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Menú"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }, [])
  return (
    <View style={stylesGlobal.globalMarginHorizontalPage}>
      <Text style={stylesGlobal.colorText}>Página OnepageScreen</Text>
      <Text style={stylesGlobal.colorText}>Navegar con argumentos</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('TwopageScreen')}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('PersonScreen', {
          id: 1,
          name: 'Pedro'
        })}
      >
        <Text style={{ color: 'black' }}>Ir a la página Pedro</Text>
      </TouchableOpacity>
    </View>
  )
}
