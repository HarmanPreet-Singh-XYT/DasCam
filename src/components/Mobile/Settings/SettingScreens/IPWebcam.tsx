import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TopBorder from '../../TopBorder'
import createStyles from '../../../Common/StyleSheet';
import useColors from '../../../Common/Color.Mobile';
import CheckBox from '../../../Common/Checkbox';
const IPWebcam = () => {
    const style = createStyles(useColors());
    const [isChecked, setisChecked] = useState({HTTPS:false});
    function toggleCheckHTTPS(){
        setisChecked({...isChecked,HTTPS:!isChecked.HTTPS});
    }
    const lineColor = useColorScheme()==='dark' ? style.color3.backgroundColor : style.color1.backgroundColor;
  return (
    <View className='h-screen w-screen' style={style.color1}>
        <TopBorder/>
        <View className='mx-auto w-[90%]'>
            <View className='w-[100%] mt-4 rounded-3xl py-4 h-[300px]' style={style.color2}>
                <View className='h-[100%] mx-auto w-[90%]'>
                    <TouchableOpacity className='flex-row justify-between'>
                        <View>
                            <Text className='text-xl font-bold' style={style.fontColor}>Username</Text>
                            <Text className='w-[300px] text-[16px] font-light' style={{color:style.color3.backgroundColor}}>Leave Empty for none</Text>
                        </View>
                    </TouchableOpacity>
                    <View className='w-full h-[2px] my-2' style={{backgroundColor:lineColor}}></View>
                    <TouchableOpacity className='flex-row justify-between'>
                        <View>
                            <Text className='text-xl font-bold' style={style.fontColor}>Password</Text>
                            <Text className='w-[300px] text-[16px] font-light' style={{color:style.color3.backgroundColor}}>Leave Empty for none</Text>
                        </View>
                    </TouchableOpacity>
                    <View className='w-full h-[2px] mt-2 mb-3' style={{backgroundColor:lineColor}}></View>
                    <TouchableOpacity onPress={toggleCheckHTTPS} className='flex-row justify-between'>
                        <View>
                            <Text className='text-xl font-bold' style={style.fontColor}>HTTPS {'(TLS)'}</Text>
                        </View>
                        <CheckBox isChecked={isChecked.HTTPS} toggleCheck={toggleCheckHTTPS}/>
                    </TouchableOpacity>
                    <View className='w-full h-[2px] mt-4 mb-2' style={{backgroundColor:lineColor}}></View>
                    <TouchableOpacity className='flex-row justify-between'>
                        <View>
                            <Text className='text-xl font-bold' style={style.fontColor}>Port</Text>
                            <Text className='w-[350px] text-[16px] font-light' style={{color:style.color3.backgroundColor}}>Must be Between 2000 to 65000</Text>
                        </View>
                    </TouchableOpacity>
                    <View className='w-full h-[2px] mt-2' style={{backgroundColor:lineColor}}></View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default IPWebcam