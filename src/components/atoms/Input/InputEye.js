import React, {useState} from "react";
import {View, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { Email, Eye, Password } from "../../../assets";
import { colors } from "../../../utils";

const InputEye = ({placeholder, value, onChangeText}) => {
    const[borderColor, setBorderColor] = useState(colors._gray2) 
    const[hide, setHide] = useState(true) 
    const onBlur = () => {
        setBorderColor(colors._gray2)
    }
    const onFocus = () => {
        setBorderColor(colors._blue3)
    }
    return (
        <View>
            <TextInput style={styles.input(borderColor)} placeholder={placeholder} placeholderTextColor={colors._gray} onFocus={onFocus} onBlur={onBlur} secureTextEntry={hide} value={value} onChangeText={onChangeText}/>
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
        fontSize: 14,
        paddingLeft: 40,
        position: "relative",
        backgroundColor: colors._white,
        color: colors._gray
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