import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({placeholder, value, onChangeText, keyboardType, ...otherProps}) => {
  return (
    <View>
      <TextInput style={styles.input}
       placeholder={placeholder} 
       value={value} 
       onChangeText={onChangeText} 
       keyboardType={keyboardType} 
       
       {...otherProps} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    }
})