import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconChooseImage, IconClock, IconDate } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ButtonIcon = ({teks, onPress, type}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text numberOfLines={1} style={styles.teks}>{teks}</Text>
            {type === 'image' && <IconChooseImage/>}
            {type === 'date' && <IconDate/>}
            {type === 'clock' && <IconClock/>}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors._white,
        borderWidth: 1,
        borderRadius: 12,
        borderColor:'#A1AEB7',
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    teks:{
        fontFamily: fonts.primary[400],
        fontSize: 16,
        color: colors._textGray,
        maxWidth: "80%"
    }
})

export default ButtonIcon
