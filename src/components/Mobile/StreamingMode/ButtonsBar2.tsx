import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'
import { Exposure, Microphone, ZoomIn, ZoomOut } from '../../Common/SVGImages.Mobile'

const ButtonsBar2 = () => {
  const style = createStyles(useColors());
  return (
    <View className='w-[90%] h-[100px] rounded-3xl mx-auto flex-row justify-evenly items-center' style={[style.color2]}>
      <TouchableOpacity className='max-w-[10px] right-2'><Exposure selectedColor={style.color4.backgroundColor}/></TouchableOpacity>
      <TouchableOpacity className='max-w-[70px] right-2'><ZoomIn selectedColor={style.color4.backgroundColor}/></TouchableOpacity>
      <TouchableOpacity className='max-w-[70px] right-1 pr-2'><ZoomOut selectedColor={style.color4.backgroundColor}/></TouchableOpacity>
      <TouchableOpacity className='max-w-[60px] pl-0 mr-6'><Microphone selectedColor={style.color4.backgroundColor}/></TouchableOpacity>
    </View>
  )
}

export default ButtonsBar2