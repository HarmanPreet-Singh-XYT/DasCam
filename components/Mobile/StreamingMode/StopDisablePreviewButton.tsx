import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'
import { TV } from '../../Common/SVGImages.Mobile'

const StopButton = () => {
    const style = createStyles(useColors());
  return (
    <TouchableOpacity>
        <Text className='mx-2 text-3xl font-bold' style={style.fontColor}>Stop</Text>
    </TouchableOpacity>
  )
}
export const DisablePreview = ()=>{
  const theme = useColorScheme();
  return(
    <TouchableOpacity className='mx-2'>
    <TV/>
    </TouchableOpacity>
  )
}
export default StopButton