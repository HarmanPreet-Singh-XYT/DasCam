import { View, Text } from 'react-native'
import React from 'react'
import createStyles from '../StyleSheet';
import useColors from '../Colors/Color';
const CameraStream = () => {
    const style = createStyles(useColors());
  return (
      <View className='w-[75%] h-[60%] rounded-2xl' style={[style.color2,style.borderColor]}>

      </View>
  )
}

export default CameraStream