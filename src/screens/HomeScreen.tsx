import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


function HomeScreen({ navigation }: { navigation: any }) {
  const [state, setState] = useState(5)

  function handleClick() {
    setState(state + 1)
  }

  function handleClick3() {
    setState(s => s + 1)
    setState(s => s + 1)
    setState(s => s + 1)
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.text} >HomeScreen</Text>
      <Button title='Go to Profile' onPress={() => navigation.navigate('Profile', { state })} />
      <Text>state'im : {state}</Text>
      <Button title='increase 1' onPress={handleClick} />
      <Button title='increase 3' onPress={handleClick3} />

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
})