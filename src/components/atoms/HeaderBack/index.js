import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Back } from '../../../assets';
import { colors, fonts } from '../../../utils';

const HeaderBack = ({ teks, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ alignItems: 'flex-start', justifyContent: 'center', width: 24, height: 24 }} onPress={onPress}>
                <Back />
            </TouchableOpacity>
            <Text style={styles.teks}> {teks}</Text>
            <View style={{ width: 24, height: 24 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors._blue,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    teks: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors._white,
    }
})

export default HeaderBack;