import { View, Text } from 'react-native'
import React from 'react'
import createStyles from '../Common/StyleSheet'
import useColors from '../Common/Color.Mobile'

const TopBorder = ({borderHeight=2}:{borderHeight?:number}) => {
    const style = createStyles(useColors());
  return (
    <View style={{width:'100%',height:borderHeight,backgroundColor:style.color3.backgroundColor}}>
    </View>
  )
}

export default TopBorder