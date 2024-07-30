import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'
import { AutoFocus, Capture, HD } from '../../Common/SVGImages.Mobile'

const TopSettings = () => {
    const style = createStyles(useColors());
  return (
    <View className='w-[100%] rounded-3xl my-5 h-[100px]' style={style.color2}>
      <View className='justify-evenly items-center h-[100%]'>
        <Text className='font-bold text-xl' style={style.fontColor}>Camera Settings</Text>
        <View className='flex-row justify-evenly w-[75%]'>
            <TouchableOpacity><Capture selectedColor={style.color4.backgroundColor}/></TouchableOpacity>
            <TouchableOpacity><HD selectedColor={style.color4.backgroundColor} backgroundColor={style.color2.backgroundColor}/></TouchableOpacity>
            <TouchableOpacity><AutoFocus selectedColor={style.color4.backgroundColor}/></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default TopSettings