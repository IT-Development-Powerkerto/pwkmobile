import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { Edit, Key, Password, Profile } from '../../../assets'
import Gap from '../Gap'

const Button = ({text, height, width, color, icon, colorText}) => {
    return (
        <View>
            <TouchableOpacity style={styles.button(height, width, color)} >
                {icon === 'Key' && <Key />}
                {icon === 'Edit' && <Edit />}
                <Gap width={10} />
                <Text style={styles.text(colorText)} >{text}</Text>
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
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }),
    text: colorText => ({
        color: colorText ?? 'white',
        fontFamily: fonts.primary[600],
        fontSize: 12,
    })
})