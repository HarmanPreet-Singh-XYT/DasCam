import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import externalStyles from './StyleSheet';
import { Tick } from './SVGImages';
import { useColorScheme } from 'react-native-windows';


const CheckBox = ({ size = 24, isChecked, toggleCheck }:{size?:number,isChecked:boolean,toggleCheck:()=>void}) => {
  const deviceColorTheme = useColorScheme();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toggleCheck()}
    >
      <View style={[styles.checkbox, { width: size, height: size },externalStyles.borderColor,isChecked && externalStyles.selectedColor1]}>
        {isChecked && <Tick/>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginRight: 0,
    borderRadius:8,
  },
  label: {
    fontSize: 16,
  }
});

export default CheckBox;
