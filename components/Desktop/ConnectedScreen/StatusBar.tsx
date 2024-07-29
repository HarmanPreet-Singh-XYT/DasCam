import { View, Text } from 'react-native'
import React, { useState } from 'react'
import createStyles from '../StyleSheet'
import useColors from '../Colors/Color'
import { StatusDots } from '../SVGImages'

const StatusBar = () => {
    const style = createStyles(useColors());
    const [StatusCode, setStatusCode] = useState('red');
  return (
    <View className='rounded-3xl h-[35px] w-[780px] justify-evenly px-4 flex-row' style={[style.color2,style.borderColor]}>
      <View className='flex-auto flex-row gap-2 items-center'>
        <Text className='font-bold text-xl' style={style.fontColor}>Battery:</Text><Text className='text-lg font-medium' style={style.fontColor}>100%</Text>
      </View>
      <View className='h-[100%] w-[2px] mr-4' style={style.color3}></View>
      <View className='flex-auto flex-row gap-2 items-center'>
        <Text className='font-bold text-xl' style={style.fontColor}>Status:</Text><StatusDots selectedStatus={StatusCode}/>
      </View>
      <View className='h-[100%] w-[2px] mr-4' style={style.color3}></View>
      <View className='flex-auto flex-row gap-2 items-center'>
        <Text className='font-bold text-xl' style={style.fontColor}>Packet Loss:</Text><Text className='text-lg font-medium' style={style.fontColor}>100%</Text>
      </View>
      <View className='h-[100%] w-[2px] mr-4' style={style.color3}></View>
      <View className='flex-auto flex-row gap-2 items-center'>
        <Text className='font-bold text-xl' style={style.fontColor}>Ping:</Text><Text className='text-lg font-medium' style={style.fontColor}>50</Text><Text className='top-2' style={style.fontColor}>ms</Text>
      </View>
      <View className='h-[100%] w-[2px] mr-4' style={style.color3}></View>
      <View className='flex-auto flex-row gap-2 items-center'>
        <Text className='font-bold text-xl' style={style.fontColor}>Jitter:</Text><Text className='text-lg font-medium' style={style.fontColor}>50</Text><Text className='top-2' style={style.fontColor}>ms</Text>
      </View>
    </View>
  )
}

export default StatusBar