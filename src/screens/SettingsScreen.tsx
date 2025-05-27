import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import HomeScreen from './HomeScreen'


const Drawer = createDrawerNavigator()

function SettingsScreen() {
  const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <Text style={styles.text}>SettingsScreen</Text>
        <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      </View>
    )
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Settings'>
      <Drawer.Screen name='Settings' component={SettingsScreen} />
      <Drawer.Screen name='Home' component={HomeScreen} />
    </Drawer.Navigator>
  )
}

export default MyDrawer

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})