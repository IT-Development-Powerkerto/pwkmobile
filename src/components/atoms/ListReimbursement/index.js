import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const ListReimbursement = () => {
    let status = "Waiting";
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.teks}>Khairul Anwar Fadloli</Text>
                <Text style={styles.teks}>03/03/2022 08:34</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={styles.teks2}>Pulsa</Text>
                    <Text style={styles.teks3}>Rp 100.000</Text>
                </View>
                {status == "Waiting" &&
                    <View style={{ borderRadius: 50, backgroundColor: colors._redOp, alignItems: 'center', justifyContent: 'center', width: 100 }}>
                        <Text style={{ color: colors._red, fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{status}</Text>
                    </View>
                }
                {status == "Processing" &&
                    <View style={{ borderRadius: 50, backgroundColor: colors._blueOp, alignItems: 'center', justifyContent: 'center', flexBasis: '25%' }}>
                        <Text style={{ color: colors._blue, fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{status}</Text>
                    </View>
                }
                {status == "Closing" &&
                    <View style={{ borderRadius: 50, backgroundColor: colors._greenOp, alignItems: 'center', justifyContent: 'center', flexBasis: '25%' }}>
                        <Text style={{ color: colors._green, opacity: 1, fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{status}</Text>
                    </View>
                }
                {status == "Spam" &&
                    <View style={{ borderRadius: 50, backgroundColor: colors._grayOp, alignItems: 'center', justifyContent: 'center', flexBasis: '25%' }}>
                        <Text style={{ color: colors._gray, fontFamily: 'Poppins-SemiBold', fontSize: 11 }}>{status}</Text>
                    </View>
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 14,
        backgroundColor: colors._white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 12,
        marginBottom: 14,
    },
    teks: {
        fontSize: 10,
        fontFamily: fonts.primary[500],
        color: colors._textGray,
    },
    teks2: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors._textBlack,
    },
    teks3: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors._textBlack,
    }
})

export default ListReimbursement
