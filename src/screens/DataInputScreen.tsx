import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native'
import React from 'react'
import Input from '../components/Input'

const DataInputScreen = ({isDataInputScreen}) => {
  return (  
    <SafeAreaView style={styles.container}>
        <Button title='Close' onPress={isDataInputScreen} />
     <View >
        <Input placeholder='Code' />
        <Input placeholder='Enter your name' />
        <Input placeholder='Enter your name' />
    </View>
    </SafeAreaView>
  )
}

export default DataInputScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})