import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCameraDevices, Camera } from 'react-native-vision-camera'

const CameraScreen = () => {
  const devices = useCameraDevices()
  const device = devices['back']
  
  if (device == null) return <Text>Loading...</Text>

  return (
    <View>
      <Camera style={styles.camera} device={device} isActive={true} />
    </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: '100%',
  },
})