import React, {useState} from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native";
import { StatusBar } from 'react-native';
import Api from "../../Api";
import { Cover, Powerkerto } from "../../assets";
import { Gap, Input } from "../../components";
import { storeData } from "../../utils";

const Login = ({navigation}) => {

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
    // if (error.length > 0) {
    //     setLoading(false);
    //     showMessage({
    //         icon: 'warning',
    //         message: error[0],
    //         type: "default",
    //         backgroundColor: colors._red,
    //         color: colors.white,
    //         animated: true,
    //         duration: 1000,
    //     });
    // } 
    else {
        try {
            const response = await Api.login(username, password);
            console.log(response.data.user)
            const data = {
                id: response.data.user.id,
                token: response.data.success.token,
            }
            storeData('user', data)
            // setEmail("");
            // setPassword("");
            navigation.replace('Home');
        } catch (error) {
            // setLoading(false);
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
    <View style={styles.container}>
        <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
            <ImageBackground source={Cover} resizeMode="cover" style={styles.Cover}>
            <Gap height={30} />
            <View style={{ alignItems: 'center' }}>
                <Image source={Powerkerto}/>
            </View>
            <View>
                <View>
                    <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold', fontSize: 24 }}>Sign In</Text>
                    <Text style={{ color: '#A3A3A3', fontFamily: 'Poppins-Regular', fontSize: 12 }}>Enter your username and password</Text>
                </View>
                <Gap height={20} />
                <Input placeholder='Username' value={username} onChangeText={(value) => setUsername(value)}/>
                <Gap height={20} />
                <Input placeholder='Password' type='eye' value={password} onChangeText={(value) => setPassword(value)}/>
                <Gap height={40} />
                <TouchableOpacity style = { styles.login } onPress = {onLogin} >
                    <Text style = { styles.Textlogin }>Login</Text>
                </TouchableOpacity>
                <Gap height={10} />
                <View style={styles.Forget}>
                    <Text style={{ color: 'white', fontWeight: '500' }}>Forget Password?</Text>
                    <TouchableOpacity onPress = {()=>navigation.navigate('Forget')}>
                        <Text style={styles.linkForget}> Click here</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.note}>
                <Text style={styles.warning}>Warning!
                    <Text style={styles.TextDarkWarning}> Please don’t share your credential to anybody and make sure you note it at the safe place. Contact our CS Team directly if you have any suspicious activities on your account!</Text>
                </Text>
            </View>
        </ImageBackground>
        
    </View>
 );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    Cover: {
        flex: 1,
        padding: 16,
        justifyContent: "space-between",
    },
    login: {
        height: 50,
        borderRadius: 12,
        marginBottom: 5,
        backgroundColor: '#009EF7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Textlogin: {
        color:'#fff',
    },
    Forget: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkForget: {
        color: '#009EF7',
        fontWeight: '500',
    },
    note: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    warning: {
        color: '#FFA726',
        textAlign: 'center',
        fontSize: 12,
    },
    TextDarkWarning: {
        color: '#fff'
    }

  });

export default Login;