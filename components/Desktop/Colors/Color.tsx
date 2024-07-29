import { useLayoutEffect, useState } from "react";
import { useColorScheme } from "react-native-windows";
const themeColors = {
    light:{
        color1:'#F9F7F7',
        color2:'#DBE2EF',
        color3:'#3F72AF',
        color4:'#112D4E'
    },
    dark:{
        color1:'#222831',
        color2:'#393E46',
        color3:'#00ADB5',
        color4:'#EEEEEE'
    }
};
const useColors = () => {
    const deviceColorTheme = useColorScheme();
    const [colors, setColors] = useState(themeColors.light);

    useLayoutEffect(() => {
        setColors(deviceColorTheme === 'light' ? themeColors.light : themeColors.dark);
    }, [deviceColorTheme]);

    return colors;
};
export default useColors;