import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Edit, Key } from '../../../assets'
import { fonts } from '../../../utils'
import Gap from '../Gap'

const Button = ({ text, height, width, color, icon, colorText, fontSize }) => {
    return (
        <View>
            <TouchableOpacity style={styles.button(height, width, color)} >
                {icon === 'Key' && <Key />}
                {icon === 'Edit' && <Edit />}
                <Gap width={10} />
                <Text style={styles.text(colorText, fontSize)} >{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: (height, width, color) => ({
        backgroundColor: color,
        height: height,
        width: width,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        // if(shadow == true) {
        //     shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.27,
        // shadowRadius: 4.65,
        // elevation: 6,
            
        // }
    }),
text: (colorText, fontSize) => ({
    color: colorText ?? 'white',
    fontFamily: fonts.primary[600],
    fontSize: fontSize,
})
})