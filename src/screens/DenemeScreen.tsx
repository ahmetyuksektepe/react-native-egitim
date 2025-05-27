import { StyleSheet, Text, View, TextInput, Platform } from 'react-native'
import React, { useState, useReducer } from 'react'

const DenemeScreen = () => {
  
    const [name, dispatch] = useReducer(myReducer, {
        name: 'Ahmet',
        age: '23',
        email: 'ahmet@gmail.com'
    })

    function myReducer(state: any, action: any){
      switch(action.type){
        case 'isimDegistir':
          return {
            ...state,
            name: action.name
          }
        case 'yasDegistir':
          return {
            ...state,
            age: action.age
          }
        case 'emailDegistir':
          return {
            ...state,
            email: action.email
          }
        default:
          {throw new Error('Invalid action')}
      }

    }

    function isimDegistir(text: string){
        dispatch({
            type: 'isimDegistir',
            name: text
        })
    }

    function yasDegistir(text: string){
        dispatch({
            type: 'yasDegistir',
            age: text
        })
    }

    function emailDegistir(text: string){
        dispatch({
            type: 'emailDegistir',
            email: text
        })
    }


  return (
    <View>
      <TextInput value={name.name}  style={{borderWidth: 1, padding: 10, margin: 10, borderRadius: 10}} onChangeText={isimDegistir}/>
      <TextInput value={name.age}  style={{borderWidth: 1, padding: 10, margin: 10, borderRadius: 10}} onChangeText={yasDegistir}/>
      <TextInput value={name.email}  style={{borderWidth: 1, padding: 10, margin: 10, borderRadius: 10}} onChangeText={emailDegistir}/>
      
      <Text style={styles.textOS}>
        {name.name}
      </Text>
      <Text style={styles.textOS}>
        {name.age}
      </Text>
      <Text style={styles.textOS}>
        {name.email}
      </Text>
    </View>
  )
}

export default DenemeScreen

const styles = StyleSheet.create({
  textOS: {
    color: Platform.OS === 'android' ? 'red' : 'blue',
    fontSize: Platform.OS === 'android' ? 20 : 30,
    fontWeight: Platform.OS === 'android' ? 'bold' : 'normal',
    textAlign: Platform.OS === 'android' ? 'center' : 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})