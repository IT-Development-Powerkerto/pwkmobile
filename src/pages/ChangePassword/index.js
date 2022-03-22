import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, HeaderBack, Input } from '../../components'
import { colors, fonts } from '../../utils'

const ChangePassword = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Change Password" />
            <View style={{ paddingHorizontal: 24, flex: 1 }}>
                <Gap height={20} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Current Password</Text>
                <Input noPad />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>New Password</Text>
                <Input noPad />
                <View style={{ flex: 1 }} />
                <Button text="Add Lead" color={colors._blue2} colorText='white' height={46} fontSize={14} />
                <Gap height={10} />
                <Button text="Cancel" height={46} fontSize={14} />
                <Gap height={10} />
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
export default ChangePassword;
