import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TopBorder from '../../TopBorder'
import createStyles from '../../../Common/StyleSheet';
import useColors from '../../../Common/Color.Mobile';
import CheckBox from '../../../Common/Checkbox';

const Microphone = () => {
    const style = createStyles(useColors());
    const [isChecked, setisChecked] = useState({NoiseSupp:true,bluetoothLink:false,inputSource:false});
    function toggleCheckNoiseSupp(){
        setisChecked({...isChecked,NoiseSupp:!isChecked.NoiseSupp});
    }
    function toggleCheckBluetoothLink(){
        setisChecked({...isChecked,bluetoothLink:!isChecked.bluetoothLink});
    }
    function toggleCheckInputSource(){
        setisChecked({...isChecked,inputSource:!isChecked.inputSource});
    }
    const lineColor = useColorScheme()==='dark' ? style.color3.backgroundColor : style.color1.backgroundColor;
  return (
    <View className='h-screen w-screen' style={style.color1}>
    <TopBorder/>
    <View className='mx-auto w-[90%]'>
        <View className='w-[100%] mt-4 rounded-3xl py-6 h-[220px]' style={style.color2}>
            <View className='h-[100%] mx-auto w-[90%]'>
                <TouchableOpacity onPress={toggleCheckNoiseSupp} className='flex-row justify-between'>
                    <View>
                        <Text className='text-xl font-bold' style={style.fontColor}>Noise Suppression</Text>
                    </View>
                    <CheckBox isChecked={isChecked.NoiseSupp} toggleCheck={toggleCheckNoiseSupp}/>
                </TouchableOpacity>
                <View className='w-full h-[2px] my-4' style={{backgroundColor:lineColor}}></View>
                <TouchableOpacity onPress={toggleCheckBluetoothLink} className='flex-row justify-between'>
                    <View>
                        <Text className='text-xl font-bold' style={style.fontColor}>Bluetooth Link</Text>
                    </View>
                    <CheckBox isChecked={isChecked.bluetoothLink} toggleCheck={toggleCheckBluetoothLink}/>
                </TouchableOpacity>
                <View className='w-full h-[2px] my-4' style={{backgroundColor:lineColor}}></View>
                <TouchableOpacity onPress={toggleCheckInputSource} className='flex-row justify-between'>
                    <View>
                        <Text className='text-xl font-bold' style={style.fontColor}>Input Source</Text>
                    </View>
                    <CheckBox isChecked={isChecked.inputSource} toggleCheck={toggleCheckInputSource}/>
                </TouchableOpacity>
                <View className='w-full h-[2px] my-4' style={{backgroundColor:lineColor}}></View>
            </View>
        </View>
    </View>
    </View>
  )
}

export default Microphone