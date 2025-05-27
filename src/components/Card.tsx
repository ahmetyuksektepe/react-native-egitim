import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Card = ({item}: {item: any}) => {
  return (
    <View style={styles.card}>
        <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
        <Text> code: {item.code}</Text>
        <Text> name: {item.name}</Text>
    </View> 
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        
    }
})