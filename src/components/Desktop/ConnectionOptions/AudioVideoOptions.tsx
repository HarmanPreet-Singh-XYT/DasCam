import { View, Text } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Desktop'
import CheckBox from '../../Common/Checkbox'
const AudioVideoOptions = ({isCheckedVideo,isCheckedAudio,toggleCheckAudio,toggleCheckVideo}:{isCheckedVideo:boolean,isCheckedAudio:boolean,toggleCheckAudio:()=>void,toggleCheckVideo:()=>void}) => {
    const styles = createStyles(useColors());
  return (
    <View className='max-h-[100px] mt-5 rounded-3xl' style={[styles.borderColor,styles.color1]}>
        <View className='flex-auto flex-row items-center justify-center'>
            <View className='pl-5'><CheckBox isChecked={isCheckedVideo} toggleCheck={toggleCheckVideo}/></View>
            <View className='h-[2px] min-w-[10%] rotate-90 mr-5' style={{backgroundColor:styles.borderColor.borderColor}}></View>
            <View><Text className='font-bold text-[24px] pr-4 w-[90px]' style={styles.fontColor}>Video</Text></View>
        </View>
        <View className='h-[2px] min-w-[25%]' style={{backgroundColor:styles.borderColor.borderColor}}></View>
        <View className='flex-auto flex-row items-center justify-center'>
            <View className='pl-4 ml-1'><CheckBox isChecked={isCheckedAudio} toggleCheck={toggleCheckAudio}/></View>
            <View className='h-[2px] min-w-[10%] rotate-90 mr-5' style={{backgroundColor:styles.borderColor.borderColor}}></View>
            <View><Text className='font-bold text-[24px] pr-4 w-[90px]' style={styles.fontColor}>Audio</Text></View>
        </View>
    </View>
  )
}

export default AudioVideoOptions