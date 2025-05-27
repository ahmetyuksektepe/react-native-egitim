import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'



const ProfileScreen = ({ navigation, route }: { navigation: any, route: any }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
      <Text>{route.params?.state}</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default ProfileScreen

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