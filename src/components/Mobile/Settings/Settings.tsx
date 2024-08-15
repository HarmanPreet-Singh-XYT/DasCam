import React from 'react'
import TopBorder from '../TopBorder'
import MainOptions from './MainOptions'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import createStyles from '../../Common/StyleSheet';
import useColors from '../../Common/Color.Mobile';

const Settings = ({navigation}:{navigation:NativeStackNavigationProp<any|'settings'>}) => {
    const style = createStyles(useColors());
  return (
    <View className='h-screen w-screen' style={style.color1}>
        <TopBorder/>
        <MainOptions navigation={navigation}/>
    </View>
  )
}

export default Settings