import React from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CardCampaign, Gap, HeaderPage } from '../../components'
import { colors, fonts } from '../../utils'

const Campaign = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderPage title="Campaign" icon="Campaign" />
            <Gap height={20} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 24 }}>
                <View>
                    <Text style={styles.teks}>Campaign</Text>
                    <Text style={styles.teks2}>10 Campaign</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('CreateCampaign')}>
                    <Text style={styles.teks3}>+ Create Campaign</Text>
                </TouchableOpacity>
            </View>
            <Gap height={20} />
            <View style={styles.listContent}>
                <CardCampaign />
                <CardCampaign />
                <CardCampaign />
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
    teks4: {
        color: colors._white,
        fontSize: 14,
    },
    listContent: {
        paddingHorizontal: 24,
    },
})
export default Campaign;
