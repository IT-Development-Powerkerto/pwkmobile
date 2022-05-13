import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconBudgeting, IconEvaluation, IconGo, IconPromotion, IconReimbursement } from '../../../assets'
import { colors, fonts } from '../../../utils'
import Gap from '../Gap'

const ListButtonMenu = ({ type, teks, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {type === 'promotion' && <IconPromotion />}
            {type === 'reimbursement' && <IconReimbursement />}
            {type === 'budgeting' && <IconBudgeting />}
            {type === 'evaluation' && <IconEvaluation />}
            <Gap width={10} />
            <Text style={styles.teks}>{teks}</Text>
            <IconGo />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    teks: {
        fontSize: 14,
        color: colors._textBlack,
        fontFamily: fonts.primary[600],
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    }
})

export default ListButtonMenu
