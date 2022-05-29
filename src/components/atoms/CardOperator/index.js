import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDelete } from '../../../assets'
import { colors, fonts } from '../../../utils'
import Gap from '../Gap'

const CardOperator = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.teks}>Intan Ananda Fitria</Text>
                    <IconDelete />
                </View>
                <Text style={styles.teks2}>csintanananda@gmail.com</Text>
                <Gap height={2} />
                <Text style={styles.teks2}>081389855052</Text>
            </View>
            <View style={styles.contentBottom}>
                <Text style={styles.teks3}>Intan Ananda Fitria</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.teks4}>Leads</Text>
                    <Text style={styles.teks3}>Total (100)</Text>
                    <Text style={styles.teks3}>Today (100)</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.teks4}>Leads</Text>
                    <Text style={styles.teks3}>Total (100)</Text>
                    <Text style={styles.teks3}>Today (100)</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors._blue,
        borderRadius: 22,
        marginBottom: 12
    },
    teks: {
        fontSize: 16,
        fontFamily: fonts.primary[700],
        color: colors._white
    },
    teks2: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors._white
    },
    teks3: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors._blue
    },
    teks4: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors._black
    },
    contentBottom: {
        backgroundColor: colors._white,
        padding: 20,
        borderRadius: 20,
    }
})

export default CardOperator
