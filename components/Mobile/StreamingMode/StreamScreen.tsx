import { View, Text } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'

const StreamScreen = () => {
    const style = createStyles(useColors());
  return (
    <View className='w-[90%] h-[400px] mb-5 rounded-3xl mx-auto' style={[style.color2,style.borderColor]}>
      <View></View>
    </View>
  )
}

export default StreamScreen