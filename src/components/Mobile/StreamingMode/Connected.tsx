import { View, Text } from 'react-native'
import React from 'react'
import StatusBar from './StatusBar.Mobile'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'
import StreamScreen from './StreamScreen'
import ButtonsBar1 from './ButtonsBar1'
import ButtonsBar2 from './ButtonsBar2'
import TopBorder from '../TopBorder'

const Connected = () => {
    const style = createStyles(useColors());
  return (
    <>
    <TopBorder/>
    <View className='h-[100%] w-screen py-4' style={style.color1}>
        <StatusBar/>
        <StreamScreen/>
        <ButtonsBar1/>
        <ButtonsBar2/>
    </View>
    </>
  )
}

export default Connected