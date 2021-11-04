import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/stylesGlobal';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarIcon: ({ color, focused }) => {
          let iconName: any = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = "bandage-outline"
              break;
            case 'ContactScreen':
              iconName = "basketball-outline"
              break;
            case 'AlbumScreen':
              iconName = "bookmarks-outline"
              break;
          }
          return <Icon name={iconName} size={20} color={colors.primary} />
        },
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
      })}

    >
      <Tab.Screen name="ChatScreen" options={{ title: 'Chats' }} component={ChatScreen} />
      <Tab.Screen name="ContactScreen" options={{ title: 'Contactos' }} component={ContactScreen} />
      <Tab.Screen name="AlbumScreen" options={{ title: 'Albums' }} component={AlbumScreen} />
    </Tab.Navigator>
  )
}