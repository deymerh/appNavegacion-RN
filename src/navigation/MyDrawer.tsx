import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { StackNavigation } from './StackNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: `${width >= 768 ? 'permanent' : 'front'}`,
        headerShown: false
      }}
      drawerContent={(props) => <MenuDrawerItems {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigation} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuDrawerItems = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://scontent.fbog2-3.fna.fbcdn.net/v/t1.6435-9/244614320_10220606914709697_2516930781107313863_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHaSGvNW8qYn_TufEm2mbUHlVa-R6OJzXiVVr5Ho4nNeL4zHpUKPMxoIMjxO4Pv0DY&_nc_ohc=z96ia_mhUVAAX-w7Scn&tn=KwpuYrxfwo9_5cmW&_nc_ht=scontent.fbog2-3.fna&oh=101cfd73c64ce8d277ee08b96da25e07&oe=61A65894'
          }}
        />
      </View>
      <Text style={styles.menuTitle}>Menú</Text>
      <View style={styles.menuItems}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
        >
          <Text style={styles.menuTitle}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.menuTitle}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuItems: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'flex-start',
  },
  menuTitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.8,
    paddingVertical: 10
  },
});