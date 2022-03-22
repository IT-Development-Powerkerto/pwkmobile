import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconGo } from '../../../assets'
import { colors, fonts } from '../../../utils'
import Gap from '../Gap'

const ListBudgeting = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ flex: 1 }}>
                <Text style={styles.teks}>03/03/2022 08:34</Text>
                <Text style={styles.teks2}>Pulsa</Text>
            </View>
            <Text style={styles.teks3}>Rp 100.000</Text>
            <Gap width={20} />
            <IconGo />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors._white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 12,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },
    teks: {
        fontSize: 10,
        fontFamily: fonts.primary[500],
        color: colors._textGray,
    },
    teks2: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors._textBlack,
    },
    teks3: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors._textBlack,
    }
})

export default ListBudgeting
