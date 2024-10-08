import { StyleSheet } from "react-native"
const createStyles = (colors:{color1:string,color2:string,color3:string,color4:string}) => StyleSheet.create({
    color1:{
        backgroundColor:colors.color1
    },
    color2:{
        backgroundColor:colors.color2
    },
    color3:{
        backgroundColor:colors.color3
    },
    color4:{
        backgroundColor:colors.color4
    },
    fontColor:{
        color:colors.color4
    },
    selectedColor1:{
        backgroundColor:colors.color3,
    },
    selectedFontColor2:{
        color:colors.color1
    },
    borderColor:{
        borderColor:colors.color3,
        borderWidth:2,
    }
})
export default createStyles;