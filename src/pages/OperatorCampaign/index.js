import React from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { CardOperator, Gap, HeaderBack } from '../../components'
import { colors, fonts } from '../../utils'

const OperatorCampaign = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Operator - Campaign Rubeku" />
            <Gap height={20} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 24 }}>
                <Text style={styles.teks}>5 Operator</Text>
                <TouchableOpacity >
                    <Text style={styles.teks2}>+ Add Operator</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ flex: 1, padding: 24 }}>
                    <CardOperator />
                    <CardOperator />
                    <CardOperator />
                    <CardOperator />
                    <CardOperator />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors._white
    },
    teks: {
        color: colors._textBlack,
        fontSize: 14,
        fontFamily: fonts.primary[600],
    },
    teks2: {
        color: colors._blue,
        fontSize: 12,
        fontFamily: fonts.primary[600],
    },
})

export default OperatorCampaign
