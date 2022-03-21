import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts } from '../../../utils'

const Button = ({text, height, width, color}) => {
    return (
        <View>
            <TouchableOpacity style={styles.button(height, width, color)} >
                    <Text style={styles.teks}>{text}</Text>
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
    }),
    teks:{
        fontSize: 14,
        color: '#fff',
        fontFamily: fonts.primary[500],
    }
})