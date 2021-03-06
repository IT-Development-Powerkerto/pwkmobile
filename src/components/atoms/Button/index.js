import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Edit, EditBlue, Key } from '../../../assets'
import { fonts } from '../../../utils'
import Gap from '../Gap'

const Button = ({ text, height, width, color, icon, colorText, fontSize, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={styles.button(height, width, color)} onPress={onPress} >
                {icon === 'Key' && <Key />}
                {icon === 'Edit' && <Edit />}
                {icon === 'EditBlue' && <EditBlue />}
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
    }),
    text: (colorText, fontSize) => ({
        color: colorText,
        fontFamily: fonts.primary[600],
        fontSize: fontSize,
    }),
})