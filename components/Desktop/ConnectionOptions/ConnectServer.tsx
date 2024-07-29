import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '../Checkbox'
import createStyles from '../StyleSheet'
import useColors from '../Colors/Color'
import AudioVideoOptions from './AudioVideoOptions'
const ConnectServer = () => {
  const styles = createStyles(useColors());
  const [isCheckedVideo, setisCheckedVideo] = useState(true);
    const [isCheckedAudio, setisCheckedAudio] = useState(false);
    const [networkDetails, setnetworkDetails] = useState({ip:'192.168.1.1',port:'4747'})
    function toggleCheckVideo(){
        setisCheckedVideo(!isCheckedVideo);
    };
    function toggleCheckAudio(){
        setisCheckedAudio(!isCheckedAudio);
    };
    const [serverStatus, setserverStatus] = useState('');
  return (
    <View className='items-center'>
        <Text className='text-[24px] font-bold' style={styles.fontColor}>Create Server {'(LAN)'}</Text>
        <View className='max-h-[150px] py-5 justify-center'>
            <View className='flex-auto justify-center items-center flex-row gap-5'>
                <Text className='font-bold text-[20px]' style={styles.fontColor}>Device IP:</Text>
                <TextInput inputMode='numeric' readOnly value={networkDetails.ip} className='h-[35px] text-center w-[200px] py-0 px-1 rounded-xl items-center justify-center font-bold text-xl' maxLength={15} style={[styles.color2,styles.fontColor,styles.borderColor]}/>
            </View>
            <View className='flex-auto items-center flex-row gap-5 -translate-x-9'>
                <Text className='font-bold text-[20px]' style={styles.fontColor}>DasCam Port:</Text>
                <TextInput defaultValue={networkDetails.port} inputMode='numeric' className='h-[35px] w-[120px] text-center rounded-xl items-center justify-center font-bold text-xl py-0 px-2' maxLength={5} style={[styles.color1,styles.fontColor,styles.borderColor]}/>
            </View>
        </View>
        <AudioVideoOptions isCheckedAudio={isCheckedAudio} isCheckedVideo toggleCheckAudio={toggleCheckAudio} toggleCheckVideo={toggleCheckVideo}/>
        <TouchableOpacity className='rounded-3xl px-6 py-1 justify-center items-center my-10' style={[styles.borderColor,styles.color1]}><Text className='font-bold text-xl' style={styles.fontColor}>{serverStatus==='started' ? 'Stop Server' : `Start Server`}</Text></TouchableOpacity>
    </View>
  )
}

export default ConnectServer