import { View, Text } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'
import StatusBar from '../StreamingMode/StatusBar.Mobile'
import TopSettings from './TopSettings'
import ConnectionDetails from './ConnectionDetails'

const Home = () => {
    const style = createStyles(useColors());
  return (
    <View className='h-screen w-screen' style={style.color1}>
      <View className='h-screen w-[90%] mx-auto'>
          <TopSettings/>
          <ConnectionDetails/>
          
      </View>
    </View>
  )
}

export default Home