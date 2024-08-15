import { View, Text } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet';
import useColors from '../../Common/Color.Desktop';
import Client from '../../Common/Client';
const CameraStream = () => {
    const style = createStyles(useColors());
  return (
      <View className='w-[75%] h-[60%] rounded-2xl' style={[style.color2,style.borderColor]}>
        <Client port={4747} url='10.77.66.101'/>
      </View>
  )
}

export default CameraStream