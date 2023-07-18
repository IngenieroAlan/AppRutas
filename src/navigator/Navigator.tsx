import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsScreen } from '../pages/PermissionsScreen';
import { MapScreen } from '../pages/MapScreen';
import { LoadingScreen } from '../pages/LoadingScreen';
import { PermissionsContext } from '../context/PermissionsContext';

const Stack = createStackNavigator();

export function Navigator() {

  const {permissions} = useContext(PermissionsContext)

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor:'white'
        }
      }} 
    >
      {
        (permissions.locationStatus==='granted')
        ?<Stack.Screen name="MapScreen" component={MapScreen} />
        :<Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      }
    </Stack.Navigator>
  );
}