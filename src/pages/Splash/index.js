import React, { useEffect } from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Powerkerto } from '../../assets'
import { colors, fonts, getData } from '../../utils'

const Splash = ({ navigation }) => {
    const checkLogin = () => {
        getData('user').then(res => {
            if (res) {
                if (res.role_id === '5') {
                    navigation.replace('MyCSTabs')
                } else {
                    navigation.replace('MyADVTabs')
                }
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
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Powerkerto} style={{ marginTop: '20%' }} />
            </View>
            <Text style={styles.powered}>Powered By</Text>
            <Text style={styles.ptname}>Powerkerto</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors._white,
        padding: 24
    },
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
