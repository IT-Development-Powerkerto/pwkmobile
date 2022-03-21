import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconDelete, IconEdit } from '../../../assets'
import { colors, fonts } from '../../../utils'
import Gap from '../Gap'

const ListPromotion = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.teks}>Freshmag</Text>
                <Gap height={5} />
                <Text style={styles.teks2}>Erul Freshmag buy 2</Text>
                <Gap height={5} />
                <Text style={styles.teks}>Product Price & Shipping Cost</Text>
                <Gap height={5} />
                <Text style={styles.teks3}>Rp 31.000</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <IconEdit />
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity>
                    <IconDelete />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: colors._white,
        borderRadius: 12,
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    teks: {
        fontSize: 10,
        fontFamily: fonts.primary[500],
        color: colors._textGray,
    },
    teks2: {
        fontSize: 12,
        fontFamily: fonts.primary[500],
        color: colors._textBlack,
    },
    teks3: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors._textBlack,
    },
})
export default ListPromotion
