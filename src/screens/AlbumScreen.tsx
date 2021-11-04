import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { stylesGlobal } from '../theme/stylesGlobal'

export const AlbumScreen = () => {
  const { logout, authState: { isLogedIn } } = useContext(AuthContext);
  return (
    <View>
      <Text style={stylesGlobal.colorText}>AlbumScreen</Text>
      {
        (isLogedIn) &&
        (<Button title="Logout" onPress={logout} />)
      }
    </View>
  )
}
