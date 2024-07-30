import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TopBorder from '../../TopBorder'
import createStyles from '../../../Common/StyleSheet';
import useColors from '../../../Common/Color.Mobile';
import CheckBox from '../../../Common/Checkbox';

const Camera = () => {
    const style = createStyles(useColors());
    const [isChecked, setisChecked] = useState({limitFPS:false});
    function toggleCheckLimitFPS(){
        setisChecked({...isChecked,limitFPS:!isChecked.limitFPS});
    }
    const lineColor = useColorScheme()==='dark' ? style.color3.backgroundColor : style.color1.backgroundColor;
  return (
    <View className='h-screen w-screen' style={style.color1}>
        <TopBorder/>
        <View className='mx-auto w-[90%]'>
            <View className='w-[100%] mt-4 rounded-3xl py-6 h-[115px]' style={style.color2}>
                <View className='h-[100%] mx-auto w-[90%]'>
                    <TouchableOpacity onPress={toggleCheckLimitFPS} className='flex-row justify-between'>
                        <View>
                            <Text className='text-xl font-bold' style={style.fontColor}>Limit FPS</Text>
                            <Text className='w-[300px] text-[16px] font-light' style={{color:style.color3.backgroundColor}}>Save Battery</Text>
                        </View>
                        <CheckBox isChecked={isChecked.limitFPS} toggleCheck={toggleCheckLimitFPS}/>
                    </TouchableOpacity>
                    <View className='w-full h-[2px] my-4' style={{backgroundColor:lineColor}}></View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Camera