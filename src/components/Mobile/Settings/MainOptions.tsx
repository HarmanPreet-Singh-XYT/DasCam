import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'
import CheckBox from '../../Common/Checkbox'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
const MainOptions = ({navigation}:{navigation:NativeStackNavigationProp<any|'settings'>}) => {
    const style = createStyles(useColors());
    const [isChecked, setisChecked] = useState({keepAwake:true,autoDim:true});
    function toggleCheckAwake(){
        setisChecked({...isChecked,keepAwake:!isChecked.keepAwake});
    }
    function toggleCheckDim(){
        setisChecked({...isChecked,autoDim:!isChecked.autoDim});
    }
    const lineColor = useColorScheme()==='dark' ? style.color3.backgroundColor : style.color1.backgroundColor;
  return (
    <View className='mx-auto w-[90%]'>
        <View className='w-[100%] mt-4 rounded-3xl py-6 h-[470px]' style={style.color2}>
            <View className='h-[100%] mx-auto w-[90%]'>
                <TouchableOpacity onPress={toggleCheckAwake} className='flex-row justify-between'>
                    <View>
                        <Text className='text-xl font-bold' style={style.fontColor}>Keep Device Awake</Text>
                        <Text className='w-[300px] text-[16px] font-light' style={{color:style.color3.backgroundColor}}>Needed for most devices to keep WiFi active and use camera</Text>
                    </View>
                    <CheckBox isChecked={isChecked.keepAwake} toggleCheck={toggleCheckAwake}/>
                </TouchableOpacity>
                <View className='w-full h-[2px] my-4' style={{backgroundColor:lineColor}}></View>
                <TouchableOpacity onPress={toggleCheckDim} className='flex-row justify-between'>
                    <View>
                        <Text className='text-xl font-bold' style={style.fontColor}>Auto Dim Screen</Text>
                    </View>
                    <CheckBox isChecked={isChecked.autoDim} toggleCheck={toggleCheckDim}/>
                </TouchableOpacity>
                <View className='w-full h-[2px] mt-4 mb-2' style={{backgroundColor:lineColor}}></View>
                <TouchableOpacity className='flex-row justify-between'>
                    <View>
                        <Text className='text-xl font-bold' style={style.fontColor}>DasCam Port</Text>
                        <Text className='w-[350px] text-[16px] font-light' style={{color:style.color3.backgroundColor}}>Must be Between 2000 to 65000</Text>
                    </View>
                </TouchableOpacity>
                <View className='w-full h-[2px] mt-2 mb-3' style={{backgroundColor:lineColor}}></View>
                <TouchableOpacity onPress={()=>navigation.navigate('camera')} className='flex-row justify-between'>
                    <View>
                        <Text className='text-xl font-bold' style={style.fontColor}>Camera</Text>
                    </View>
                </TouchableOpacity>
                <View className='w-full h-[2px] my-4' style={{backgroundColor:lineColor}}></View>
                <TouchableOpacity onPress={()=>navigation.navigate('microphone')} className='flex-row justify-between'>
                    <View>
                        <Text className='text-xl font-bold' style={style.fontColor}>Microphone</Text>
                    </View>
                </TouchableOpacity>
                <View className='w-full h-[2px] my-4' style={{backgroundColor:lineColor}}></View>
                <TouchableOpacity onPress={()=>navigation.navigate('ipwebcam')} className='flex-row justify-between'>
                    <View>
                        <Text className='text-xl font-bold' style={style.fontColor}>IP Webcam</Text>
                    </View>
                </TouchableOpacity>
                <View className='w-full h-[2px] my-4' style={{backgroundColor:lineColor}}></View>
            </View>
        </View>
    </View>
  )
}

export default MainOptions