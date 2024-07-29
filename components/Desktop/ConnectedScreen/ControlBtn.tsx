import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import createStyles from '../StyleSheet';
import useColors from '../Colors/Color';
import { AutoFocus, Capture, Flash, Settings } from '../SVGImages';
const ControlBtn = ({isServer=false}:{isServer?:boolean}) => {
    const style = createStyles(useColors());
  return (
    <View className='justify-center items-center flex-row gap-5'>
        <View className='rounded-3xl h-[80px] w-[650px] justify-evenly items-center pr-4 flex-row relative' style={[style.color1,style.borderColor]}>
            <View className='justify-evenly items-center right-[25]' style={style.color1}>
                <TouchableOpacity><Text className='font-bold p-0 m-0 text-4xl'>+</Text></TouchableOpacity>
                <View className='flex-row max-w-[45px] relative'>
                    <View className='h-[2px] w-[100%] pr-10' style={style.color3}></View>
                    <View className='h-[40px] w-[2px] absolute bottom-0 right-0' style={style.color3}></View>
                    <View className='h-[40px] w-[2px] absolute top-0 right-0' style={style.color3}></View>
                </View>
                <TouchableOpacity><Text className='font-bold p-0 m-0 text-4xl'>-</Text></TouchableOpacity>
            </View>
            <View className='items-end'>
                <Text className='font-bold text-lg absolute -left-[36] -bottom-3' style={style.fontColor}>Zoom</Text>
            </View>
            <View className='h-[100%] w-[2px]' style={style.color3}></View>
            <TouchableOpacity className='gap-2 items-center justify-center w-[80px]'>
                <View className='top-2'><Flash selectedColor={style.color4.backgroundColor}/></View>
                <Text className='font-bold text-lg bottom-1' style={style.fontColor}>Flash</Text>
            </TouchableOpacity>
            <View className='h-[100%] w-[2px]' style={style.color3}></View>
            <TouchableOpacity className='gap-2 items-center justify-center'>
                <View className='top-2'><AutoFocus selectedColor={style.color4.backgroundColor}/></View>
                <Text className='font-bold text-lg bottom-1' style={style.fontColor}>Auto-Focus</Text>
            </TouchableOpacity>
            <View className='h-[100%] w-[2px]' style={style.color3}></View>
            <TouchableOpacity className='gap-2 items-center justify-center'>
                <View className='top-2'><Capture selectedColor={style.color4.backgroundColor}/></View>
                <Text className='font-bold text-lg bottom-1' style={style.fontColor}>Capture</Text>
            </TouchableOpacity>
            <View className='h-[100%] w-[2px]' style={style.color3}></View>
            <TouchableOpacity className='gap-2 items-center justify-center'>
                <View className='top-2'><Settings selectedColor={style.color4.backgroundColor}/></View>
                <Text className='font-bold text-lg bottom-1' style={style.fontColor}>Settings</Text>
            </TouchableOpacity>
        </View>
        {isServer && <View className='flex-auto flex-row max-h-[50px] max-w-[150px] gap-4 items-end'>
            <TouchableOpacity className='px-4 py-0 rounded-xl h-[45px]' style={style.borderColor}><Text className='font-bold w-[60px] text-center' style={style.fontColor}>Disable Preview</Text></TouchableOpacity>
            <TouchableOpacity className='px-4 py-2 rounded-xl h-[40px]' style={style.borderColor}><Text className='font-bold text-center' style={style.fontColor}>Stop Server</Text></TouchableOpacity>
        </View>}
    </View>
  )
}

export default ControlBtn