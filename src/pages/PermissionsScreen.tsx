import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'
import { PermissionsContext } from '../context/PermissionsContext'

export const PermissionsScreen = () => {

  const { permissions, askLocationPermission } = useContext(PermissionsContext);
  return (
    <View style={styles.container}>
      <Text>Permissions Screen</Text>
      <Button
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
  text: {
    fontSize: 24,
    color: 'black'
  }
});