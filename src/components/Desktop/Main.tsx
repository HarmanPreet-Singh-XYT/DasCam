import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import ConnectWiFi from './ConnectionOptions/ConnectWiFi'
import {WiFi,Server,USB,SelectedBtn} from '../Common/SVGImages';
import { useColorScheme } from 'react-native-windows';
import ConnectUSB from './ConnectionOptions/ConnectUSB';
import ConnectServer from './ConnectionOptions/ConnectServer';
import createStyles from '../Common/StyleSheet';
import useColors from '../Common/Color.Desktop';
const Main = () => {
  const styles = createStyles(useColors());
    const [selectedOption, setselectedOption] = useState({wifi:true,usb:false,server:false});
    function updateSelected(selected:string):void{
        switch (selected) {
          case 'wifi':
            setselectedOption({wifi:true,usb:false,server:false});
            break;
          case 'usb':
            setselectedOption({wifi:false,usb:true,server:false});
            break;
          case 'server':
            setselectedOption({wifi:false,usb:false,server:true});
            break;
        }
    }
  return (
    <View className='w-[100%] h-[100%] justify-center items-center' style={styles.color1}>
        <View className='items-center min-w-[500px] max-w-[500px] rounded-2xl min-h-[600px] max-h-[600px]' style={[styles.color2,styles.borderColor]}>
            <Text className='text-[40px] font-bold py-6' style={styles.fontColor}>Setup</Text>
            <View className='flex-auto flex-row w-full justify-evenly max-h-[80px]'>
                <TouchableOpacity onPress={()=>updateSelected('wifi')} className='py-6 px-6 rounded-2xl items-center justify-center max-w-[300px] max-h-[50px]' style={[selectedOption.wifi ? styles.color3 : styles.color1,styles.borderColor]}>{selectedOption.wifi ? <SelectedBtn selected={'wifi'}/ > : <WiFi/>}</TouchableOpacity>
                <TouchableOpacity onPress={()=>updateSelected('usb')} className='py-6 px-6 rounded-2xl items-center justify-center max-w-[300px] max-h-[50px]' style={[selectedOption.usb ? styles.color3 : styles.color1,styles.borderColor]}>{selectedOption.usb ? <SelectedBtn selected={'usb'}/> : <USB/>}</TouchableOpacity>
                <TouchableOpacity onPress={()=>updateSelected('server')} className='py-6 px-6 rounded-2xl items-center justify-center max-w-[300px] max-h-[50px]' style={[selectedOption.server ? styles.color3 : styles.color1,styles.borderColor]}>{selectedOption.server ? <SelectedBtn selected={'server'}/> : <Server/>}</TouchableOpacity>
            </View>
            {selectedOption.wifi && <ConnectWiFi/>}
            {selectedOption.usb && <ConnectUSB/>}
            {selectedOption.server && <ConnectServer/>}
        </View>
    </View>
  )
}

export default Main