import React from 'react'
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native'
import { Gap, HeaderBack, ListPromotion } from '../../components'
import { colors, fonts } from '../../utils'

const Promotion = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Promotion" />
            <Gap height={20} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 24 }}>
                <View>
                    <Text style={styles.teks}>Promotion List</Text>
                    <Text style={styles.teks2}>22 Data</Text>
                </View>
                <TouchableOpacity >
                    <Text style={styles.teks3}>+ Create Promotion</Text>
                </TouchableOpacity>
            </View>
            <Gap height={20} />
            <View style={styles.listContent}>
                <ListPromotion />
                <ListPromotion />
                <ListPromotion />
                <ListPromotion />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors._white,
        flex: 1,
    },
    teks: {
        color: colors._textBlack,
        fontSize: 14,
        fontFamily: fonts.primary[600],
    },
    teks2: {
        color: colors._textGray,
        fontSize: 11,
        fontFamily: fonts.primary[600],
    },
    teks3: {
        color: colors._blue,
        fontSize: 12,
        fontFamily: fonts.primary[600],
    },
    listContent: {
        paddingHorizontal: 24,
    }
})
export default Promotion;
