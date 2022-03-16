import React, { useEffect, useState } from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native";
import { StatusBar } from 'react-native';
import Api from "../../Api";
import { Profile } from "../../assets";
import { getData } from "../../utils";

const Home = ({navigation}) => {
const [name, setName] = useState('')
const [role, setRole] = useState('')
const [image, setImage] = useState('')

 useEffect(() => {
     getData('user'). then(res=>{
         const userID = async () => {
             const response = await Api.getUserPWK(res.id)
             setName(response.data[0].name)
             setRole(response.data[0].role.name)
             setImage(response.data[0].image)
         }
         userID()
         
     })
 }, [])
 return (
    <View style={styles.container}>
        <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#009EF7" translucent = {true}/>
        <View style={styles.Header}>
            <View>
                <Text style={{ color: 'white', fontFamily: 'Poppins-Bold', fontSize: 24 }}>{`Hello, ${name}`} </Text>
                <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14 }}>{role}</Text>
            </View>
            <View>
                <Image source={{ uri:`http://mobile.pwkbackoffice.com/${image}` }} style={{ width: 54, height: 54, borderRadius: 27, }}/>
            </View>
        </View>
    </View>
 );
};

const styles = StyleSheet.create({
    Header: {
        height: 150,
        backgroundColor: '#009EF7',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 12,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        flexDirection: 'row',
    },  

  });

export default Home;