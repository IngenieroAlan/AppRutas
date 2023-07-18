import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
/* import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions' */
import { PermissionsContext } from '../context/PermissionsContext'
import { BlackButton } from '../components/BlackButton';

export const PermissionsScreen = () => {

  const { permissions, askLocationPermission } = useContext(PermissionsContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permissions Screen</Text>
      <BlackButton
        title='Permiso'
        onPress={askLocationPermission}
      />
      <Text style={styles.text}>
        {JSON.stringify(permissions, null, 5)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    width:250,
    fontSize:24,
    fontWeight: 'bold',
    color:'black',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black'
  },
});