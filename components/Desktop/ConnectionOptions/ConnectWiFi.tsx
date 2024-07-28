import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '../Checkbox'
import styles from '../StyleSheet'
const ConnectWiFi = () => {
    const [isCheckedVideo, setisCheckedVideo] = useState(false);
    const [isCheckedAudio, setisCheckedAudio] = useState(false);
    function toggleCheckVideo(){
        setisCheckedVideo(!isCheckedVideo);
    };
    function toggleCheckAudio(){
        setisCheckedAudio(!isCheckedAudio);
    };
  return (
    <View className='items-center'>
        <Text className='text-[24px] font-bold' style={styles.fontColor}>Connect Over WiFi {'(LAN)'}</Text>
        <View className='max-h-[150px] py-5 justify-center'>
            <View className='flex-auto justify-center items-center flex-row gap-5'>
                <Text className='font-bold text-[20px]' style={styles.fontColor}>Device IP:</Text>
                <TextInput className='h-[35px] w-[200px] py-0 px-1 rounded-2xl items-center justify-center font-bold text-xl' maxLength={15} style={[styles.color1,styles.fontColor,styles.borderColor]}/>
            </View>
            <View className='flex-auto items-center flex-row gap-5 -translate-x-9'>
                <Text className='font-bold text-[20px]' style={styles.fontColor}>DasCam Port:</Text>
                <TextInput className='h-[35px] w-[120px] rounded-2xl items-center justify-center font-bold text-xl py-0 px-2' maxLength={5} style={[styles.color1,styles.fontColor,styles.borderColor]}/>
            </View>
        </View>
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
        <TouchableOpacity className='rounded-3xl px-6 py-1 justify-center items-center my-10' style={[styles.borderColor,styles.color1]}><Text className='font-bold text-xl' style={styles.fontColor}>Connect</Text></TouchableOpacity>
    </View>
  )
}

export default ConnectWiFi