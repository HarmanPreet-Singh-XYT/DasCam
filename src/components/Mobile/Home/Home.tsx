import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'
import StatusBar from '../StreamingMode/StatusBar.Mobile'
import TopSettings from './TopSettings'
import ConnectionDetails from './ConnectionDetails'
import TopBorder from '../TopBorder'
import Server from '../../Common/Server'

const Home = () => {
    const style = createStyles(useColors());
  
  return (
    <SafeAreaView>
    {/* <Server port={4747} video={true} audio={true}/> */}
    <TopBorder/>
    <View className='h-screen w-screen' style={style.color1}>
      <View className='h-screen w-[90%] mx-auto'>
          <TopSettings/>
          <ConnectionDetails/>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Home