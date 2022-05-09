import React, { useEffect } from 'react'
import { View } from 'react-native'
import { colors, getData } from '../../utils'

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
        checkLogin();
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: colors._blackOp }} />
    )
}

export default Splash
