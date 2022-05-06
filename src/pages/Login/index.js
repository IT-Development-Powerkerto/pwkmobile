import React, { useState } from "react";
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Api from "../../Api";
import { Cover, Powerkerto } from "../../assets";
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
        if (password.length < 8) {
            error.push('Password less than 8 characters')
        }
        if (error.length > 0) {
            setLoading(false);
            // showMessage({
            //     icon: 'warning',
            //     message: error[0],
            //     type: "default",
            //     backgroundColor: colors._red,
            //     color: colors.white,
            //     animated: true,
            //     duration: 1000,
            // });
        }
        else {
            try {
                const response = await Api.login(username, password);
                console.log(response.data.user)
                const data = {
                    id: response.data.user.id,
                    token: response.data.success.token,
                }
                storeData('user', data)
                setEmail("");
                setPassword("");
                navigation.replace('MyTabs');
            } catch (error) {
                setLoading(false);
                // showMessage({
                //     icon: 'warning',
                //     message: error.toString(),
                //     type: "default",
                //     backgroundColor: colors._red,
                //     color: colors.white,
                //     animated: true,
                //     duration: 1000,
                // });
                console.log(error)
            }
        }
    }

    return (
        <ImageBackground source={Cover} resizeMode="cover" style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue3} translucent={false} />
            <Image source={Powerkerto} style={{ alignSelf: "center", marginTop: '20%' }} />
            <View style={{ flex: 1, marginTop: 50 }}>
                <View>
                    <Text style={{ color: colors._white, fontFamily: fonts.primary[700], fontSize: 24 }}>Sign In</Text>
                    <Text style={{ color: colors._white, fontFamily: fonts.primary[400], fontSize: 12 }}>Enter your username and password</Text>
                </View>
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
            </View>
            <Text style={styles.TextDarkWarning}>Powered By Powerkerto</Text>
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
    TextDarkWarning: {
        color: colors._white,
        fontFamily: fonts.primary[400],
        fontSize: 12,
        textAlign: "center"
    }
});

export default Login;