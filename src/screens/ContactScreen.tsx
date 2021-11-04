import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { stylesGlobal } from '../theme/stylesGlobal';

export const ContactScreen = () => {
  const { signIn, authState: { isLogedIn } } = useContext(AuthContext);
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Text style={stylesGlobal.colorText}>ContactScreen</Text>
      {
        !isLogedIn &&
        (<Button
          title="SignIn"
          onPress={signIn}
        />)
      }
    </View>
  )
}
