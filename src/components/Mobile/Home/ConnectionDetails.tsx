import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import createStyles from '../../Common/StyleSheet'
import useColors from '../../Common/Color.Mobile'
import { NetworkInfo } from 'react-native-network-info';
const ConnectionDetails = () => {
    const style = createStyles(useColors());
    const [port, setport] = useState(4747);
    const [ipAddress, setIpAddress] = useState<null|string>('');
    useEffect(() => {
      const fetchIpAddress = async () => {
        NetworkInfo.getIPV4Address().then(ip => {
          setIpAddress(ip);
        });
      };
  
      fetchIpAddress();
    }, [])
  return (
    <View className='w-[100%] mt-14 rounded-3xl py-2 h-[350px]' style={style.color2}>
      <View className='items-center h-[100%]'>
        <Text className='font-bold text-2xl' style={style.fontColor}>Connection Details</Text>
        <View className='w-[90%] gap-2 mt-2'>
            <View className='flex-row items-center'>
                <Text className='font-bold text-xl mr-2' style={style.fontColor}>WiFi IP:</Text>
                <Text className='text-lg' style={style.fontColor}>{ipAddress}</Text>
            </View>
            <View className='flex-row items-center'>
                <Text className='font-bold text-xl mr-2' style={style.fontColor}>DasCam Port:</Text>
                <Text className='text-lg' style={style.fontColor}>{port}</Text>
            </View>
        </View>
        <Text className='font-bold text-2xl mt-10' style={style.fontColor}>IP Cam Access</Text>
        <View className='w-[90%] mt-4 items-center'>
            <View className='flex-row items-center'>
                <Text className='text-lg font-medium underline' style={style.fontColor}>http://{ipAddress}:{port}/</Text>
            </View>
            <View className='flex-row items-center'>
                <Text className='text-lg font-medium underline' style={style.fontColor}>http://{ipAddress}:{port}/video</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default ConnectionDetails