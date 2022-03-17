import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { colors } from '../../../utils'

const ListLead = ({customer_name, customer_whatsapp, status, created_at}) => {
    return (
        <View style={styles.FirstCardLead}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
                <Text style={{ fontSize: 11, fontFamily: 'Poppins-SemiBold', color: '#A3A3A3' }}>{created_at}</Text>
                <Text style={{ fontSize: 11, fontFamily: 'Poppins-SemiBold', color: '#F70000' }}>00:20</Text>
            </View>
            <Gap height={10} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', paddingHorizontal: 15}}>
                <Text style={{ fontSize: 11, fontFamily: 'Poppins-Bold', color: '#000', flexBasis: '40%' }}>{customer_name}</Text>
                <Text style={{ fontSize: 11, fontFamily: 'Poppins-Bold', color: '#009EF7', flexBasis: '35%'}} >{customer_whatsapp}</Text>
                {status == "Waiting" && 
                <View style={{  borderRadius: 50, backgroundColor: colors._redOp, alignItems: 'center', justifyContent: 'center', flexBasis: '25%' }}>
                    <Text style={{ color: colors._red, fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{status}</Text>
                </View>
                }
                {status == "Processing" && 
                <View style={{  borderRadius: 50, backgroundColor: colors._blueOp, alignItems: 'center', justifyContent: 'center', flexBasis: '25%' }}>
                    <Text style={{ color: colors._blue, fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{status}</Text>
                </View>
                }
                {status == "Closing" && 
                <View style={{  borderRadius: 50, backgroundColor: colors._greenOp, alignItems: 'center', justifyContent: 'center', flexBasis: '25%' }}>
                    <Text style={{ color: colors._green, opacity: 1, fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{status}</Text>
                </View>
                }
                {status == "Spam" && 
                <View style={{  borderRadius: 50, backgroundColor: colors._grayOp, alignItems: 'center', justifyContent: 'center', flexBasis: '25%' }}>
                    <Text style={{ color: colors._gray, fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{status}</Text>
                </View>
                }

            </View>
        </View>
    )
}

export default ListLead

const styles = StyleSheet.create({
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
})