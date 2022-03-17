import React, { useEffect, useState } from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native";
import { StatusBar } from 'react-native';
import Api from "../../Api";
import { Profile } from "../../assets";
import { Gap, InfoCard } from "../../components";
import { getData } from "../../utils";

const Home = ({navigation}) => {
const [name, setName] = useState('')
const [role, setRole] = useState('')
const [image, setImage] = useState('')
const [totalLead, setTotalLead] = useState('')
const [totalClosing, setTotalClosing] = useState('')

useEffect(() => {
    getData('user'). then(res=>{
        console.log('res', res)
        const userID = async () => {
            const response = await Api.getUserPWK(res.id)
            const responseLead = await Api.getLeads(res.token)
            setTotalLead(responseLead.data.total_lead)
            setTotalClosing(responseLead.data.total_closing)
            console.log('Response Lead', response)
            setName(response.data[0].name)
            setRole(response.data[0].role.name)
            setImage(response.data[0].image)
            // console.log(responseLead.data)
        }
        userID()
        
    });
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
        <Gap height={10} />
        <View style={styles.mainCard}>
            <View style={styles.FirstCard}>
                <Text style={{ fontSize: 28, fontFamily: 'Poppins-Bold', color: '#fff', top: 7 }}>{totalLead}</Text>
                <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#fff', bottom: 7 }}>Total Lead</Text>
            </View>   
            <View style={styles.SecondCard}>
                <Text style={{ fontSize: 28, fontFamily: 'Poppins-Bold', color: '#fff', top: 7 }}>{totalClosing}</Text>
                <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#fff', bottom: 7 }}>Total Closing</Text>
            </View> 
        </View>
        <View style={styles.mainCard}>
            <View style={styles.ThirdCard}>
                <Text style={{ fontSize: 28, fontFamily: 'Poppins-Bold', color: '#fff', top: 7 }}>10</Text>
                <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#fff', bottom: 7 }}>Daily Lead</Text>
            </View>   
            <View style={styles.FourtCard}>
                <Text style={{ fontSize: 28, fontFamily: 'Poppins-Bold', color: '#fff', top: 7 }}>4</Text>
                <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#fff', bottom: 7 }}>Total Lead</Text>
            </View> 
        </View>
        <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, alignItems: 'center' }}>
            <View>
                <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', color: '#1F2432' }}>Daily Lead</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Poppins-SemiBold', color: '#A3A3A3' }}>10 Leads</Text>
            </View>
            <TouchableOpacity>
                <Text style={{ color: '#166ED8', fontFamily: 'Poppins-SemiBold', }}>+ Manual Lead</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.CardLead}>
            <View style={styles.FirstCardLead}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: '#A3A3A3' }}>2022-03-01 03:23:35</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: '#F70000' }}>02:50</Text>
                </View>
                <Gap height={10} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-Bold', color: '#000' }}>Deni Sumarna</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-Bold', color: '#009EF7'}} >6285709114580</Text>
                    <View style={{ width: 75, height: 22, borderRadius: 50, backgroundColor: '#F7CCCC', alignItems: 'center' }}>
                        <Text style={{ color: '#F70000', fontFamily: 'Poppins-SemiBold' }}>Waiting</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
 );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }, 
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
    mainCard: {
        height: 100, 
        paddingHorizontal: 20, 
        flexWrap: 'wrap', 
        alignContent: 'space-around', 
        marginTop: 10, 
    },
    FirstCard: {
        width: '50%', 
        height: '100%',
        borderRadius: 8, 
        flexDirection: 'column',
        backgroundColor: '#009EF7',
        shadowColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        paddingLeft: 10,
        marginRight: 5
    },
    SecondCard: {
        width: '50%', 
        height: '100%',
        borderRadius: 8, 
        flexDirection: 'column',
        backgroundColor: '#F79400',
        shadowColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        paddingLeft: 10,
        marginLeft: 5
    },
    ThirdCard: {
        width: '50%', 
        height: '100%',
        borderRadius: 8, 
        flexDirection: 'column',
        backgroundColor: '#0080F7',
        shadowColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        paddingLeft: 10,
        marginRight: 5
    },
    FourtCard: {
        width: '50%', 
        height: '100%',
        borderRadius: 8, 
        flexDirection: 'column',
        backgroundColor: '#F77700',
        shadowColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        paddingLeft: 10,
        marginLeft: 5
    },
    CardLead: {
        height: 100, 
        paddingHorizontal: 20, 
        marginTop: 10 
    },
    FirstCardLead: {
        width: '100%', 
        height: '100%',
        borderRadius: 8, 
        flexDirection: 'column',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
    }

  });

export default Home;