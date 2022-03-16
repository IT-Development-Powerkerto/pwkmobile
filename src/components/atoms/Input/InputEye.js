import React, {useState} from "react";
import {View, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { Email, Eye, Password } from "../../../assets";

const InputEye = ({placeholder, value, onChangeText}) => {
    
    const[borderColor, setBorderColor] = useState('#A1AEB7') 
    const[hide, setHide] = useState(true) 


    const onBlur = () => {
        setBorderColor('#A1AEB7')
    }

    const onFocus = () => {
        setBorderColor('#166ED8')
    }

    return (
        <View>
            <TextInput style={styles.input(borderColor)} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} secureTextEntry={hide} value={value} onChangeText={onChangeText}/>
            <View style={styles.icon}>
                {placeholder==='Email' && <Email/>}
                {placeholder==='Password' && <Password/>}
            </View>
            <TouchableOpacity style={styles.eye} onPress={()=>setHide(!hide)}>
                <Eye/>
            </TouchableOpacity>
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
    },
    eye: {
        position: "absolute",
        top: 13,
        right: 20,
    }
  });

export default InputEye;