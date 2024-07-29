import { View, Text } from 'react-native'
import React from 'react'
import StatusBar from './StatusBar'
import createStyles from '../StyleSheet'
import useColors from '../Colors/Color'
import CameraStream from './CameraStream'
import ControlBtn from './ControlBtn'

const Display = () => {
    const style = createStyles(useColors());
  return (
    <View className='w-[100%] h-[100%] justify-evenly items-center' style={style.color1}>
      <StatusBar/>
      <CameraStream/>
      <ControlBtn/>
    </View>
  )
}

export default Display