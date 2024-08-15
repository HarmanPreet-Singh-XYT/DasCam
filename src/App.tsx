import React from 'react'
import DesktopApp from './components/DesktopApp'
import { Platform } from 'react-native';
import MobileApp from './components/MobileApp';
const App = () => {
  const platform = Platform.OS;
  return (
    <>
    {(platform==='windows'||platform==='macos') && <DesktopApp/>}
    {(platform==='android'||platform==='ios') && <MobileApp/>}
    </>
  )
}

export default App