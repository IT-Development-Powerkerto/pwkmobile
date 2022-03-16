import React, {useState} from "react";
import {View, TextInput, StyleSheet} from "react-native";
import { Email, Password, People } from "../../../assets";
import InputEye from './InputEye';

const Input = ({placeholder, type, value, onChangeText}) => {
    
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
            <TextInput style={styles.input(borderColor)} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} value={value} onChangeText={onChangeText}/>
            <View style={styles.icon}>
                {placeholder==='Username' && <People/>}
                {placeholder==='Password' && <Password/>}
                {placeholder==='Email' && <Email/>}
            </View>
        </View>
   

    );
};

const styles = StyleSheet.create({
    input: borderColor => ( {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: borderColor,
        fontWeight: "400",
        fontSize: 16,
        paddingLeft: 50,
        position: "relative",
        backgroundColor: 'white'
    }),
    icon: {
        position: "absolute",
        top: 13,
        left: 10,
    }

  });

export default Input;