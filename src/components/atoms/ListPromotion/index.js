import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconDelete, IconEdit } from '../../../assets'
import { colors, fonts } from '../../../utils'
import helpers from '../../../utils/helpers'
import Gap from '../Gap'

const ListPromotion = ({ promotion_type, product_name, promotion_name, total_promotion, onEdit, onDelete }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.teks}>{product_name}</Text>
                <Gap height={5} />
                <Text style={styles.teks2}>{promotion_name}</Text>
                <Gap height={5} />
                <Text style={styles.teks}>{promotion_type}</Text>
                <Gap height={5} />
                <Text style={styles.teks3}>{helpers.convertToRupiah(total_promotion)}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={onEdit}>
                    <IconEdit />
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity onPress={onDelete}>
                    <IconDelete />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        shadowColor: colors._black,
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
