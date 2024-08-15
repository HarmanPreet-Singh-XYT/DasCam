import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import createStyles from '../../Common/StyleSheet'
import Dropdown from './Dropdown'
import useColors from '../../Common/Color.Desktop'
import AudioVideoOptions from './AudioVideoOptions'
interface Option {
  label: string;
  value: string;
}
const ConnectUSB = () => {
  const styles = createStyles(useColors());
  const [isCheckedVideo, setisCheckedVideo] = useState(true);
    const [isCheckedAudio, setisCheckedAudio] = useState(false);
    const [networkDetails, setnetworkDetails] = useState({device:'',port:'4747'})
    function toggleCheckVideo(){
        setisCheckedVideo(!isCheckedVideo);
    };
    function toggleCheckAudio(){
        setisCheckedAudio(!isCheckedAudio);
    };
    const data:Option[] = [];
  return (
    <View className='items-center'>
        <Text className='text-[24px] font-bold' style={styles.fontColor}>Connect Over USB</Text>
        <View className='max-h-[150px] py-5 justify-center left-[30]'>
            <View className='flex-auto justify-center items-center flex-row gap-5'>
                <Text className='font-bold text-[20px]' style={styles.fontColor}>Device IP:</Text>
                <Dropdown options={data} placeholder='Select your Device'/>
            </View>
            <View className='flex-auto items-center flex-row gap-5 -translate-x-9'>
                <Text className='font-bold text-[20px]' style={styles.fontColor}>DasCam Port:</Text>
                <TextInput defaultValue={networkDetails.port} inputMode='numeric' className='h-[35px] z-10 text-center w-[120px] rounded-xl items-center justify-center font-bold text-xl py-0 px-2' maxLength={5} style={[styles.color1,styles.fontColor,styles.borderColor]}/>
            </View>
        </View>
        <AudioVideoOptions isCheckedAudio={isCheckedAudio} isCheckedVideo toggleCheckAudio={toggleCheckAudio} toggleCheckVideo={toggleCheckVideo}/>
        <TouchableOpacity className='rounded-3xl px-6 py-1 justify-center items-center my-10 z-10' style={[styles.borderColor,styles.color1]}><Text className='font-bold text-xl' style={styles.fontColor}>Connect</Text></TouchableOpacity>
    </View>
  )
}

export default ConnectUSB