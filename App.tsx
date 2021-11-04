import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerBasic from './src/navigation/DrawerBasic';
import { MyDrawer } from './src/navigation/MyDrawer';
// import { StackNavigation } from './src/navigation/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <DrawerBasic /> */}
      <MyDrawer />
    </NavigationContainer>
  )
}
export default App;