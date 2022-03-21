import React, {useState} from "react";
import {View, TextInput, StyleSheet} from "react-native";
import { Email, Password, People } from "../../../assets";
import { colors, fonts } from "../../../utils";
import InputEye from './InputEye';

const Input = ({placeholder, type, value, onChangeText, noPad}) => {
    
    const[borderColor, setBorderColor] = useState('#A1AEB7') 

    const onBlur = () => {
        setBorderColor('#A1AEB7')
    }

    const onFocus = () => {
        setBorderColor('#166ED8')
    }

    if (type === 'eye') {
        return <InputEye placeholder={placeholder} value={value} onChangeText={onChangeText}/>
    }

    return (
        <View>
            <TextInput style={styles.input(borderColor, noPad)} placeholderTextColor={colors._gray} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} value={value} onChangeText={onChangeText}/>
            <View style={styles.icon}>
                {placeholder==='Username' && <People/>}
                {placeholder==='Password' && <Password/>}
                {placeholder==='Email' && <Email/>}
            </View>
        </View>
   

    );
};

const styles = StyleSheet.create({
    input: (borderColor, noPad) => ( {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: borderColor,
        fontFamily: fonts.primary[400],
        fontSize: 16,
        paddingLeft: noPad? 10 : 50,
        position: "relative",
        backgroundColor: 'white',
        color: colors._gray,
    }),
    icon: {
        position: "absolute",
        top: 13,
        left: 10,
    }

  });

export default Input;