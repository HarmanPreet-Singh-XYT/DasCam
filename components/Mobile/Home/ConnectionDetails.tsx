import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'

const ConnectionDetails = () => {
    const style = createStyles(useColors());
  return (
    <View className='w-[100%] mt-14 rounded-3xl py-2 h-[350px]' style={style.color2}>
      <View className='items-center h-[100%]'>
        <Text className='font-bold text-2xl' style={style.fontColor}>Connection Details</Text>
        <View className='w-[90%] gap-2 mt-2'>
            <View className='flex-row items-center'>
                <Text className='font-bold text-xl mr-2' style={style.fontColor}>WiFi IP:</Text>
                <Text className='text-lg' style={style.fontColor}>192.168.1.1</Text>
            </View>
            <View className='flex-row items-center'>
                <Text className='font-bold text-xl mr-2' style={style.fontColor}>DasCam Port:</Text>
                <Text className='text-lg' style={style.fontColor}>4747</Text>
            </View>
        </View>
        <Text className='font-bold text-2xl mt-10' style={style.fontColor}>IP Cam Access</Text>
        <View className='w-[90%] mt-4 items-center'>
            <View className='flex-row items-center'>
                <Text className='text-lg font-medium underline' style={style.fontColor}>http://10.77.66.101:4747/</Text>
            </View>
            <View className='flex-row items-center'>
                <Text className='text-lg font-medium underline' style={style.fontColor}>http://10.77.66.101:4747/video</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default ConnectionDetails