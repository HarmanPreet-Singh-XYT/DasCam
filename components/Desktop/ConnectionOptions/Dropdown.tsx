import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import createStyles from '../StyleSheet';
import { Reload } from '../SVGImages';
import useColors from '../Colors/Color';
interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = 'Select an option' }) => {
    const styles = createStyles(useColors());
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };
  function reloadDevices(){

  };
  return (
    <>
    <View className='flex-auto flex-row p-0'>
      <TouchableOpacity
        className='h-[35px] w-[120px] rounded-xl items-center justify-center mt-5 mr-5 ml-5' style={[styles.color1,styles.borderColor,dropdownStyles.container]}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={[dropdownStyles.text,styles.fontColor]}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={reloadDevices}
        className='h-[35px] w-[40px] rounded-xl items-center justify-center mt-5' style={[styles.color1,styles.borderColor]}
      >
        <Reload selectedColor={styles.color4.backgroundColor}/>
      </TouchableOpacity>
      {(showOptions && options.length > 0) && (
        <View style={dropdownStyles.optionsContainer}>
            {options.map((item) => (
            <TouchableOpacity
                key={item.value}
                style={[dropdownStyles.option, styles.borderColor, styles.color1]}
                onPress={() => handleSelect(item)}
            >
                <Text className='text-md font-bold text-center' style={[styles.fontColor]}>{item.label}</Text>
            </TouchableOpacity>
            ))}
        </View>
        )}
        {
        (showOptions && options.length===0) &&
        <View className='w-[150px] absolute top-16 left-[150] rounded-xl py-1' style={[styles.borderColor, styles.color1]}>
            <Text className='text-md font-bold text-center' style={[styles.fontColor]}>No Device Available</Text>
        </View>
        }
    </View>
    </>
  );
};

const dropdownStyles = StyleSheet.create({
  optionsContainer:{
    position:'absolute',
    top:60,
    zIndex:50,
    left:200
  },
  container: {
    width: 200,
    position:'relative',
  },
  dropdown: {
    paddingVertical: 0,
    borderRadius: 10,
    justifyContent: 'center',
    position:'absolute',
    zIndex:10,
  },
  text: {
    fontSize: 18,
    fontWeight:'bold',
    textAlign:'center'
  },
  option: {
    height: 40,
    width:125,
    borderRadius:10,
    padding: 10,
  },
});

export default Dropdown;
