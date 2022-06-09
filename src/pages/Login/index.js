import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import Api from "../../Api";
import { Powerkerto, Cover } from "../../assets";
import { Gap, Input } from "../../components";
import { colors, fonts, storeData } from "../../utils";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const onLogin = async () => {
        let error = []
        if (username === '') {
            error.push('Username required')
        }
        if (password === '') {
            error.push('Password required')
        }
        // if (password.length < 8) {
        //     error.push('Password less than 8 characters')
        // }
        if (error.length > 0) {
            showMessage({
                icon: 'warning',
                message: error[0],
                type: "default",
                backgroundColor: colors._red2,
                color: colors._white,
                animated: true,
                duration: 1000,
            });
        }
        else {
            try {
                const response = await Api.login(username, password)
                const data = {
                    id: response.data.user.id,
                    token: response.data.success.token,
                    role_id: response.data.user.role_id,
                }
                storeData('user', data)
                setUsername("");
                setPassword("");
                if (data.role_id === '5') {
                    navigation.replace('MyCSTabs');
                } else {
                    navigation.replace('MyADVTabs');
                }
            } catch (error) {
                showMessage({
                    icon: 'warning',
                    message: error.toString(),
                    type: "default",
                    backgroundColor: colors._red2,
                    color: colors._white,
                    animated: true,
                    duration: 1000,
                });
            }
        }
    }

    return (
        <ImageBackground source={Cover} resizeMode="cover" style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue3} translucent={false} />
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 2 }}>
                        <Image source={Powerkerto} style={{ alignSelf: "center", marginTop: '20%' }} />
                        <Gap height={40} />
                        <Text style={{ color: colors._white, fontFamily: fonts.primary[700], fontSize: 24 }}>Sign In</Text>
                        <Text style={{ color: colors._white, fontFamily: fonts.primary[400], fontSize: 12 }}>Enter your username and password</Text>
                        <Gap height={20} />
                        <Input placeholder='Username' value={username} onChangeText={(value) => setUsername(value)} />
                        <Gap height={20} />
                        <Input placeholder='Password' type='eye' value={password} onChangeText={(value) => setPassword(value)} />
                        <Gap height={40} />
                        <TouchableOpacity style={styles.login} onPress={onLogin} >
                            <Text style={styles.Textlogin}>Login</Text>
                        </TouchableOpacity>
                        <Gap height={10} />
                        <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
                            <Text style={styles.linkForget}>Forget Password?</Text>
                        </TouchableOpacity>
                        <Gap height={20} />
                    </View>
                </ScrollView>
            </View>
            <Text style={styles.powered}>Powered By</Text>
            <Text style={styles.ptname}>Powerkerto</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    login: {
        height: 50,
        borderRadius: 12,
        marginBottom: 5,
        backgroundColor: colors._blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Textlogin: {
        color: colors._white,
        fontSize: 14,
        fontFamily: fonts.primary[600]
    },
    Forget: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkForget: {
        color: colors._white,
        fontFamily: fonts.primary[400],
        textAlign: "center"
    },
    powered: {
        color: colors._white,
        fontFamily: fonts.primary[500],
        fontSize: 12,
        textAlign: "center",
        justifyContent: "flex-end"
    },
    ptname: {
        color: colors._white,
        fontFamily: fonts.primary[600],
        fontSize: 16,
        textAlign: "center",
        justifyContent: "flex-end"
    }
});

export default Login;