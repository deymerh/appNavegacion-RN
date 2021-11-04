import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { TabsNavigator } from './TabsNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { colors } from '../theme/stylesGlobal';
import { PersonScreen } from '../screens/PersonScreen';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: `${width >= 768 ? 'permanent' : 'front'}`,
        headerShown: false
      }}
      drawerContent={(props) => <MenuDrawerItems {...props} />}
    >
      <Drawer.Screen name="Tabs" component={TabsNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="PersonScreen" component={PersonScreen} />
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
          onPress={() => navigation.navigate('Tabs')}
        >
          <Text style={styles.menuTitle}>
            <Icon name="bandage-outline" size={20} color={colors.primary} />
            Tabs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.menuTitle}>
            <Icon name="person-outline" size={20} color={colors.primary} />
            Persona
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PersonScreen', { name: 'Deymer' })}
        >
          <Text style={styles.menuTitle}>
            <Icon name="bookmarks-outline" size={20} color={colors.primary} />
            Ajustes
          </Text>
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