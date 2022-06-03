import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconDelete, IconEdit, IconOperator, LeadWhite } from '../../../assets'
import { colors, fonts } from '../../../utils'
import Gap from '../Gap'

const CardCampaign = ({ title, lead_count, operator_count, onEdit, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardFlex}>
                <Text style={styles.productName}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center'}} onPress={onEdit}>
                        <IconEdit />
                    </TouchableOpacity>
                    <Gap width={10} />
                    <TouchableOpacity style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center'}} onPress={onDelete}>
                        <IconDelete />
                    </TouchableOpacity>
                </View>
            </View>
            <Gap height={20} />
            <View style={styles.cardFlex}>
                <TouchableOpacity style={styles.button}>
                    <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}>
                        <LeadWhite />
                    </View>
                    <Gap width={12} />
                    <View>
                        <Text style={styles.label}>Leads</Text>
                        <Text style={styles.value}>{lead_count}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}>
                        <IconOperator />
                    </View>
                    <Gap width={12} />
                    <View>
                        <Text style={styles.label}>Operators</Text>
                        <Text style={styles.value}>{operator_count}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderWidth: 0.5,
        borderRadius: 12,
        borderColor: colors._gray,
        marginBottom: 12
    },
    cardFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productName: {
        fontSize: 12,
        color: colors._black,
        fontFamily: fonts.primary[700],
    },
    button: {
        backgroundColor: colors._blue,
        width: '48%',
        padding: 8,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 10,
        fontFamily: fonts.primary[600],
        color: colors._white
    },
    value: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors._white
    }
})

export default CardCampaign
