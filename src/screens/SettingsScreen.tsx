import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, stylesGlobal } from '../theme/stylesGlobal';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  const { authState } = useContext(AuthContext);
  return (
    <View style={{ marginTop: insets.top }}>
      <Text style={stylesGlobal.colorText}>SettingsScreen!</Text>
      <Text style={stylesGlobal.colorText}>{authState.isLogedIn ? 'Autenticado' : 'No Autenticado'}</Text>
      {
        authState.favoriteIcon &&
        (<Icon name={authState.favoriteIcon} size={80} color={colors.primary} />)
      }
    </View>
  )
}
