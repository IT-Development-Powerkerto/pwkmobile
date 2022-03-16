import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native";
import { StatusBar } from 'react-native';
import { Cover, Powerkerto } from "../../assets";
import { Gap, Input } from "../../components";

const Forget = ({navigation}) => {
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
                    <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold', fontSize: 24 }}>Forgot Password</Text>
                    <Text style={{ color: '#A3A3A3', fontFamily: 'Poppins-Regular', fontWeight: 'medium', fontSize: 12, width: '70%' }}>We will sent link reset password to your email, please check your email box</Text>
                </View>
                <Gap height={20} />
                <Input placeholder='Email'/>
                <Gap height={20} />
                <TouchableOpacity style = { styles.Submit } onPress = {()=>navigation.navigate('Home')}>
                    <Text style = { styles.TextSubmit }>Submit</Text>
                </TouchableOpacity>
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
    Submit: {
        height: 50,
        borderRadius: 12,
        marginBottom: 5,
        backgroundColor: '#009EF7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextSubmit: {
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

export default Forget;