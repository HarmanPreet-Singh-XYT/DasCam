import { View, Text } from 'react-native'
import React, { useState } from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Desktop'
import { StatusDots } from '../../Common/SVGImages.Mobile'


const StatusBar = () => {
    const style = createStyles(useColors());
    const [StatusCode, setStatusCode] = useState('green');
  return (
    <View className='flex-auto rounded-3xl max-h-[40px] justify-evenly px-4 flex-row' style={[style.color2,style.borderColor]}>
      <View className='flex-auto flex-row gap-2 items-center'>
        <StatusDots selectedStatus={StatusCode}/>
      </View>
      <View className='h-[100%] w-[2px] mr-4' style={style.color3}></View>
      <View className='flex-auto flex-row items-center'>
        <Text className='font-bold text-xl' style={style.fontColor}>PL:</Text><Text className='text-lg font-medium' style={style.fontColor}>100%</Text>
      </View>
      <View className='h-[100%] w-[2px] mr-4' style={style.color3}></View>
      <View className='flex-auto flex-row items-center'>
        <Text className='font-bold text-xl' style={style.fontColor}>Ping:</Text><Text className='text-lg font-medium' style={style.fontColor}>50</Text><Text className='top-2' style={style.fontColor}>ms</Text>
      </View>
      <View className='h-[100%] w-[2px] mr-4' style={style.color3}></View>
      <View className='flex-auto flex-row items-center'>
        <Text className='font-bold text-xl' style={style.fontColor}>Jitter:</Text><Text className='text-lg font-medium' style={style.fontColor}>50</Text><Text className='top-2' style={style.fontColor}>ms</Text>
      </View>
    </View>
  )
}

export default StatusBar