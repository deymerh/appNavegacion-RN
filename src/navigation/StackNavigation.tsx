import React from 'react';
// import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import { OnepageScreen } from '../screens/OnepageScreen';
import { TwopageScreen } from '../screens/TwopageScreen';
import { ThreepageScreen } from '../screens/ThreepageScreen';
import { PersonScreen } from '../screens/PersonScreen';
// const Stack = createNativeStackNavigator();

export type RootStackParams = {
  OnepageScreen: undefined;
  TwopageScreen: undefined;
  ThreepageScreen: undefined;
  PersonScreen: { id: string, name: string };
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnepageScreen"
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
        headerStyle: { backgroundColor: "lightblue" },
        cardShadowEnabled: false,
        headerBackgroundContainerStyle: { borderBottomColor: "Animated.Value" }
      }}
    >
      <Stack.Screen name="OnepageScreen" options={{ title: 'Página 1' }} component={OnepageScreen} />
      <Stack.Screen name="TwopageScreen" options={{ title: 'Página 2' }} component={TwopageScreen} />
      <Stack.Screen name="ThreepageScreen" options={{ title: 'Página 3' }} component={ThreepageScreen} />
      <Stack.Screen name="PersonScreen" options={{ title: 'Página persona' }} component={PersonScreen} />
    </Stack.Navigator>
  )
}