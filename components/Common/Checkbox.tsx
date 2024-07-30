import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import createStyles from '../Common/StyleSheet';
import { Tick } from './SVGImages';
import useColors from './Color.Desktop';

const CheckBox = ({ size = 24, isChecked, toggleCheck }:{size?:number,isChecked:boolean,toggleCheck:()=>void}) => {
  const externalStyles = createStyles(useColors());
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
