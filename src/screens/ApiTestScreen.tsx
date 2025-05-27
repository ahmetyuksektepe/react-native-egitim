import { StyleSheet, Text, View, Button, FlatList, Image, Alert, Modal } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import DataInputScreen from './DataInputScreen'

const ApiTestScreen = () => {
    
    const [stockList, setStockList] = useState([])
    const [isDataInputScreen, setIsDataInputScreen] = useState(false)

    const endpointUrl = 'https://6829f96dab2b5004cb356576.mockapi.io/api/v0/stocks'
    

    const getListOfData = async() => {
        try {
            const response = await axios.get(`${endpointUrl}`)
            setStockList(response.data)
        } catch (error) {
            console.log(error)
        }
        
    }

    const getListOfDataById = async() => {
        try {
            const response = await axios.get(`${endpointUrl}/2`)
            {/*setStockList([response.data])*/}
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteDataById = async() => {
        try {
            const response = await axios.delete(`${endpointUrl}/3`)
            Alert.alert('Success', 'Data deleted successfully')
            getListOfData()
        } catch (error) {
            console.log(error)
        }
    }

    const body = {
        "code": "AFK",
        "name": "Ahmet",
        "logo": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/98.jpg",
        "price": "https://picsum.photos/seed/4aqSUM/365/998",
    }

    const createData = async() => {
        try {
            const response = await axios.post(endpointUrl, body)
            Alert.alert('Success', 'Data created successfully')
            getListOfData()
        } catch (error) {
            console.log(error)
        }
    }

    const updateData = async() => {
        try {
            const response = await axios.put(`${endpointUrl}/12`, body)
            Alert.alert('Success', 'Data updated successfully')
            getListOfData()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ApiTestScreen</Text>
      <Button title='Get List of Data' onPress={getListOfData} />
      <Button title='Get List of Data by Id' onPress={getListOfDataById} />
      <Button title='Delete Data by Id' onPress={deleteDataById} />
      <Button title='Create Data' onPress={createData} />
      <Button title='Update Data' onPress={updateData} />
      <Button title='Open Data Input Screen' onPress={() => setIsDataInputScreen(true)} />
      <FlatList 
        data={stockList}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}) => (
            <Card item={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Modal visible={isDataInputScreen} transparent={true} animationType='slide'>
        <DataInputScreen isDataInputScreen={() => setIsDataInputScreen(false)} />
      </Modal>
    </View>
  )
}

export default ApiTestScreen

const styles = StyleSheet.create({})