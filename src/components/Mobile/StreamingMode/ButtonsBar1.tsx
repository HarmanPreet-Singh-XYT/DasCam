import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'
import { AutoFocus, Capture, HD, TurnDark } from '../../Common/SVGImages.Mobile'

const ButtonsBar1 = () => {
  const style = createStyles(useColors());
  return (
    <View className='w-[90%] h-[100px] mb-4 rounded-3xl mx-auto flex-row justify-evenly items-center' style={[style.color2]}>
      <TouchableOpacity><Capture selectedColor={style.color4.backgroundColor}/></TouchableOpacity>
      <TouchableOpacity><HD selectedColor={style.color4.backgroundColor} backgroundColor={style.color2.backgroundColor}/></TouchableOpacity>
      <TouchableOpacity><AutoFocus selectedColor={style.color4.backgroundColor}/></TouchableOpacity>
      <TouchableOpacity><TurnDark selectedColor={style.color4.backgroundColor}/></TouchableOpacity>
    </View>
  )
}

export default ButtonsBar1