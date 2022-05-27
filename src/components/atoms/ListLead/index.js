import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import Gap from '../Gap'

const ListLead = ({ customer_name, customer_whatsapp, status, created_at, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={{ fontSize: 10, fontFamily: colors._textGray, color: colors._textGray }}>{created_at}</Text>
            <Gap height={10} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                <Text numberOfLines={1} style={{ fontSize: 10, fontFamily: fonts.primary[600], color: colors._textBlack, width: '30%' }}>{customer_name}</Text>
                <Text numberOfLines={1} style={{ fontSize: 10, fontFamily: fonts.primary[600], color: colors._blue3, width: '30%' }} >{customer_whatsapp}</Text>
                {status == "Waiting" &&
                    <View style={{ borderRadius: 50, backgroundColor: colors._redOp, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8, paddingVertical: 2, width: '30%' }}>
                        <Text numberOfLines={1} style={{ color: colors._red, fontFamily: fonts.primary[600], fontSize: 10 }}>{status}</Text>
                    </View>
                }
                {status == "Processing" &&
                    <View style={{ borderRadius: 50, backgroundColor: colors._blueOp, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8, paddingVertical: 2, width: '30%' }}>
                        <Text numberOfLines={1} style={{ color: colors._blue, fontFamily: fonts.primary[600], fontSize: 10 }}>{status}</Text>
                    </View>
                }
                {status == "Closing" &&
                    <View style={{ borderRadius: 50, backgroundColor: colors._greenOp, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8, paddingVertical: 2, width: '30%' }}>
                        <Text numberOfLines={1} style={{ color: colors._green, fontFamily: fonts.primary[600], fontSize: 10 }}>{status}</Text>
                    </View>
                }
                {status == "Spam" &&
                    <View style={{ borderRadius: 50, backgroundColor: colors._grayOp, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8, paddingVertical: 2, width: '30%' }}>
                        <Text numberOfLines={1} style={{ color: colors._gray, fontFamily: fonts.primary[600], fontSize: 10 }}>{status}</Text>
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: colors._white,
        shadowColor: colors._black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        padding: 12,
        marginBottom: 10
    },
})

export default ListLead