import React, { useState } from 'react'
import { Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap, HeaderBack, ListEvaluation } from '../../components'
import { colors, fonts } from '../../utils'

const Evaluation = () => {
    const [modalVisible, setmodalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Routine Evaluation" />
            <Gap height={20} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 24 }}>
                <View>
                    <Text style={styles.teks}>Activity Log</Text>
                    <Text style={styles.teks2}>22 Data</Text>
                </View>
                <TouchableOpacity >
                    <Text style={styles.teks3}>+ Evaluation</Text>
                </TouchableOpacity>
            </View>
            <Gap height={20} />
            <View style={styles.listContent}>
                <ListEvaluation onPress={() => setmodalVisible(!modalVisible)} />
                <ListEvaluation />
                <ListEvaluation />
                <ListEvaluation />
                <ListEvaluation />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setmodalVisible(!modalVisible);
                }}
            >
                <View style={styles.mainModal}>
                    <View style={styles.subModal}>
                        <Text style={{ fontSize: 16, fontFamily: fonts.primary[600], color: colors._blue, marginLeft: 24, marginTop: 24 }}>Detail Budgeting Realization</Text>
                        <Gap height={20} />
                        <View style={styles.modalContent}>
                            <Text style={styles.teks4}>2022-03-01 10:07:56</Text>
                            <Gap height={20} />
                            <Text style={styles.teks4}>Product : Pulsa</Text>
                            <Gap height={5} />
                            <Text style={styles.teks4}>Resistance : : Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</Text>
                            <Gap height={5} />
                            <Text style={styles.teks4}>Solution : : Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Text>
                            <Gap height={5} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors._white,
        flex: 1,
    },
    teks: {
        color: colors._textBlack,
        fontSize: 14,
        fontFamily: fonts.primary[600],
    },
    teks2: {
        color: colors._textGray,
        fontSize: 11,
        fontFamily: fonts.primary[600],
    },
    teks3: {
        color: colors._blue,
        fontSize: 12,
        fontFamily: fonts.primary[600],
    },
    teks4: {
        color: colors._white,
        fontSize: 14,
    },
    listContent: {
        paddingHorizontal: 24,
    },
    mainModal: {
        justifyContent: "flex-end",
        flex: 1,
        backgroundColor: colors._black,
    },
    subModal: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalContent: {
        backgroundColor: colors._blue,
        padding: 30,
    },
})
export default Evaluation;
