import { useLayoutEffect } from "react";
import { useColorScheme } from "react-native-windows";
const themeColors = {
    light:{
        color1:'#F9F7F7',
        color2:'#DBE2EF',
        color3:'#3F72AF',
        color4:'#112D4E'
    },
    dark:{
        color1:'#424874',
        color2:'#A6B1E1',
        color3:'#DCD6F7',
        color4:'#F4EEFF'
    }
};
let colors = themeColors.light;
const Color = () => {
    const deviceColorTheme = useColorScheme();
    useLayoutEffect(() => {
        if(deviceColorTheme==='light') colors=themeColors.light;
        else colors=themeColors.dark;
    }, []);
  return (
    <></>
  )
}
export default Color;
export {colors};
