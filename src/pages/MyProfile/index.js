import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Gap, HeaderPage } from '../../components'
import { colors, fonts } from '../../utils'
import { Intersect, Lead, LeadWhite, Key, Profile } from '../../assets'

const MyProfile = () => {
    return (
        <View style={styles.container}>
            <HeaderPage title="My Profile" icon="Profile"/>
            <View style={[styles.cardProfile, styles.shadowProp]}>
                <Image source={Intersect} style={styles.image} />
                <View>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 16 }} >Khairul Anwar Fadloli</Text>
                    <Text style={{ fontFamily: fonts.primary[500], fontSize: 12 }} >khairula0110@gmail.com</Text>
                    <Text style={{ fontFamily: fonts.primary[500], fontSize: 12 }} >6281393445965</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-around'}}>
                {/* <TouchableOpacity style={styles.button} >
                    <Text>Change Pass</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity style={styles.button} >
                    <Text>Change Pass</Text>
                </TouchableOpacity> */}
                <Button icon="Key" text="Change Pass" height={40} width={146} color={colors._blue}/>
                <Button icon="Edit" text="Edit Profile" height={40} width={146} color={colors._blue}/>
                {/* <Button icon="Edit" text="Edit Profile" height={40} width={146} color={colors._blue}/> */}
                {/* <Button icon="" text="Test" height={40} width={146} color={colors._blue}/> */}
            </View>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    cardProfile: {
        backgroundColor: 'white',
        // borderWidth: 1,
        height: 115,
        marginHorizontal: 24,
        marginVertical: 20,
        borderRadius: 15,
        padding: 35/2,
        flexDirection: 'row',
        
    },
    image: {
        backgroundColor: 'white',
        height: 80,
        width: 80,
        borderRadius: 10,
        marginRight: 35/2
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
})