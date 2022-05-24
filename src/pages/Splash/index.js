import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Powerkerto } from '../../assets'
import { colors, fonts, getData } from '../../utils'

const Splash = ({ navigation }) => {
    const checkLogin = () => {
        getData('user').then(res => {
            if (res) {
                navigation.replace('MyTabs')
            } else {
                navigation.replace('Login')
            }
        })
    }
    useEffect(() => {
        setTimeout(() => {
            checkLogin();
        }, 3000);
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: colors._white, padding: 24 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Powerkerto} style={{ alignSelf: "center", marginTop: '20%' }} />
            </View>
            <Text style={styles.powered}>Powered By</Text>
            <Text style={styles.ptname}>Powerkerto</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    powered: {
        color: colors._blue,
        fontFamily: fonts.primary[500],
        fontSize: 12,
        textAlign: "center",
        justifyContent: "flex-end"
    },
    ptname: {
        color: colors._blue,
        fontFamily: fonts.primary[600],
        fontSize: 16,
        textAlign: "center",
        justifyContent: "flex-end"
    }
})

export default Splash
