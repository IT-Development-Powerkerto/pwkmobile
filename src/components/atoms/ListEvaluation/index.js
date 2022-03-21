import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListEvaluation = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.teks}>Product</Text>
                <Text style={styles.teks}>Date Time</Text>
            </View>
            <Text style={styles.teks2}>Resistance</Text>
            <Text style={styles.teks3}>Solution</Text>
        </View>
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

export default ListEvaluation
