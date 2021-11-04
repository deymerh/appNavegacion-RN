import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, Text } from 'react-native';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { colors } from '../theme/stylesGlobal';
import { TopTabNavigator } from './TopTabNavigator';

export const TabsNavigator = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}

const IosTabNavigation = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <IosTabNavigation.Navigator
      sceneContainerStyle={{
        backgroundColor: 'lightblue'
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = "T1"
              break;
            case 'Tab2Screen':
              iconName = "T2"
              break;
            case 'TopTabNavigator':
              iconName = "TN"
              break;
          }
          return <Icon name={iconName} size={20} color={colors.primary} />
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        }
      }
      )}
    >
      <IosTabNavigation.Screen name="Tab1Screen" options={{ title: "Menu 1" }} component={Tab1Screen} />
      <IosTabNavigation.Screen name="Tab2Screen" options={{ title: "Menu 2" }} component={Tab2Screen} />
      <IosTabNavigation.Screen name="TopTabNavigator" options={{ title: "Menu 3" }} component={TopTabNavigator} />
    </IosTabNavigation.Navigator>
  );
}


const AndroidTabNavigation = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <AndroidTabNavigation.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = "bandage-outline"
              break;
            case 'Tab2Screen':
              iconName = "basketball-outline"
              break;
            case 'TopTabNavigator':
              iconName = "bookmarks-outline"
              break;
          }
          return <Icon name={iconName} size={20} color={colors.primary} />
        },
        tabBarLabelStyle: {
          fontSize: 20,
          color: 'red',
        },
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
      }
      )}
    >
      <AndroidTabNavigation.Screen name="Tab1Screen" options={{ title: "Menu 1" }} component={Tab1Screen} />
      <AndroidTabNavigation.Screen name="Tab2Screen" options={{ title: "Menu 2" }} component={Tab2Screen} />
      <IosTabNavigation.Screen name="TopTabNavigator" options={{ title: "Menu 3" }} component={TopTabNavigator} />
    </AndroidTabNavigation.Navigator>
  );
}