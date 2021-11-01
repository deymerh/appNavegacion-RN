import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { CommonActions } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { stylesGlobal } from '../theme/stylesGlobal';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> { };

export const ThreepageScreen = ({ navigation }: Props) => {

  return (
    <View style={stylesGlobal.globalMarginHorizontalPage}>
      <Text style={stylesGlobal.colorText}>Página ThreepageScreen</Text>
      <Button
        title="Ir a página 1"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}
