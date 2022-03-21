import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Gap, HeaderPage } from '../../components'
import { colors, fonts } from '../../utils'
import { Intersect } from '../../assets'

const MyProfile = () => {
    return (
        <View style={styles.container}>
            <HeaderPage title="My Profile" icon="Profile" />
            <View style={[styles.cardProfile, styles.shadowProp]}>
                <Image source={Intersect} style={styles.image} />
                <View>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 16 }} >Khairul Anwar Fadloli</Text>
                    <Text style={{ fontFamily: fonts.primary[500], fontSize: 12 }} >khairula0110@gmail.com</Text>
                    <Text style={{ fontFamily: fonts.primary[500], fontSize: 12 }} >6281393445965</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'yellow' }}>
                <TouchableOpacity style={styles.button} >
                    <Text>Change Pass</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text>Change Pass</Text>
                </TouchableOpacity>
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
        backgroundColor: 'red',
        // borderWidth: 1,
        height: 115,
        marginHorizontal: 24,
        marginVertical: 20,
        borderRadius: 15,
        padding: 35/2,
        flexDirection: 'row'
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
        
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    image: {
        backgroundColor: 'white',
        height: 80,
        width: 80,
        borderRadius: 10,
        marginRight: 35/2
    },
    button: {
        backgroundColor: colors._blue ,
        height: 40,
        width: '45%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1
    }
})