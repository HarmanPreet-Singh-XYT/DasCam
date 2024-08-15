import { View, Text } from 'react-native'
import React from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'
import Server from '../../Common/Server'
const StreamScreen = () => {
    const style = createStyles(useColors());
  return (
    <View className='w-[90%] h-[400px] mb-5 rounded-3xl mx-auto' style={[style.color2,style.borderColor]}>
      <Server port={4747} video={true} audio={true}/>
    </View>
  )
}

export default StreamScreen