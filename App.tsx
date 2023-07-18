import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import {enableLatestRenderer} from 'react-native-maps';
import {Navigator} from './src/navigator/Navigator'
import { PermissionsProvider } from './src/context/PermissionsContext';

enableLatestRenderer();

const AppState = ({children}:any)=>{

  return(
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator/>
      </AppState>
    </NavigationContainer>
  )
}

export default App;