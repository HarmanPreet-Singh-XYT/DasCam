import { NavigationContainer } from '@react-navigation/native'
import Main from './Mobile/Main'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import createStyles from './Common/StyleSheet';
import useColors from './Common/Color.Mobile';
import { TouchableOpacity } from 'react-native';
import { Settings } from './Common/SVGImages.Mobile';
import SettingsPage from './Mobile/Settings/Settings';
import Camera from './Mobile/Settings/SettingScreens/Camera';
import Microphone from './Mobile/Settings/SettingScreens/Microphone';
import IPWebcam from './Mobile/Settings/SettingScreens/IPWebcam';
const MobileApp = () => {
  const Stack = createNativeStackNavigator();
  const style = createStyles(useColors());
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='main'>
        <Stack.Screen name='main' options={({navigation})=>({
          title:'DasCam',
          headerStyle: {
            backgroundColor: style.color1.backgroundColor,
          },
          headerTintColor: style.color4.backgroundColor,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:24
          },
          headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('settings')}><Settings selectedColor={style.color4.backgroundColor}/></TouchableOpacity>
          ),
          headerShadowVisible:false
          })} component={Main}/>
        <Stack.Screen name='settings' options={{
          title:'Settings',
          headerStyle: {
            backgroundColor: style.color1.backgroundColor,
          },
          headerTintColor: style.color4.backgroundColor,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:24
          },
          headerShadowVisible:false
        }} component={SettingsPage}/>
        <Stack.Screen name='camera' options={{
          title:'Camera',
          headerStyle: {
            backgroundColor: style.color1.backgroundColor,
          },
          headerTintColor: style.color4.backgroundColor,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:24
          },
          headerShadowVisible:false
        }} component={Camera}/>
        <Stack.Screen name='microphone' options={{
          title:'Microphone',
          headerStyle: {
            backgroundColor: style.color1.backgroundColor,
          },
          headerTintColor: style.color4.backgroundColor,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:24
          },
          headerShadowVisible:false
        }} component={Microphone}/>
        <Stack.Screen name='ipwebcam' options={{
          title:'IP Webcam',
          headerStyle: {
            backgroundColor: style.color1.backgroundColor,
          },
          headerTintColor: style.color4.backgroundColor,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:24
          },
          headerShadowVisible:false
        }} component={IPWebcam}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MobileApp