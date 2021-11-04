import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { MyDrawer } from './src/navigation/MyDrawer';
// import DrawerBasic from './src/navigation/DrawerBasic';
// import { StackNavigation } from './src/navigation/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigation /> */}
        {/* <DrawerBasic /> */}
        <MyDrawer />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: { children: JSX.Element }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;