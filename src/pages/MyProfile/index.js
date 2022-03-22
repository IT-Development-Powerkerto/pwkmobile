import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Intersect } from '../../assets'
import { Button, Gap, HeaderPage, ListButtonMenu } from '../../components'
import { colors, fonts } from '../../utils'

const MyProfile = () => {
    const [modalVisible, setmodalVisible] = useState(false)
    return (
        <>
            <View style={styles.container}>
                <HeaderPage title="My Profile" icon="Profile" />
                <View style={[styles.cardProfile, styles.shadowProp]}>
                    <Image source={Intersect} style={styles.image} />
                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, color: colors._textBlack }} >Khairul Anwar Fadloli</Text>
                        <Text style={{ fontFamily: fonts.primary[500], fontSize: 12, color: colors._textBlack }} >khairula0110@gmail.com</Text>
                        <Text style={{ fontFamily: fonts.primary[500], fontSize: 12, color: colors._textBlack }} >6281393445965</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-around' }}>
                    {/* <TouchableOpacity style={styles.button} >
                    <Text>Change Pass</Text>
                </TouchableOpacity> */}
                    {/* <TouchableOpacity style={styles.button} >
                    <Text>Change Pass</Text>
                </TouchableOpacity> */}
                    <Button icon="Key" text="Change Pass" colorText='white' height={40} width={146} color={colors._blue} />
                    <Button icon="Edit" text="Edit Profile" colorText='white' height={40} width={146} color={colors._blue} />
                    {/* <Button icon="Edit" text="Edit Profile" height={40} width={146} color={colors._blue}/> */}
                    {/* <Button icon="" text="Test" height={40} width={146} color={colors._blue}/> */}
                </View>
                <Gap height={30} />
                <View style={styles.menuBtn}>
                    <ListButtonMenu type='promotion' teks='Promotion'/>
                    <ListButtonMenu type='reimbursement' teks='Reimbursement'/>
                    <ListButtonMenu type='budgeting' teks='Budgeting Realization'/>
                    <ListButtonMenu type='evaluation' teks='Routine Evaluation'/>
                </View>
                <View style={{ flex: 1 }} />
                <View style={{ marginHorizontal: 24, marginBottom: 30 }}>
                    <Button text="Cancel" height={46} fontSize={14} color={colors._red} colorText='white' onPress={() => setmodalVisible(!modalVisible)} />
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setmodalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Attention!</Text>
                        <Gap height={10} />
                        <Text style={styles.textStyle2}>Are you sure to exit the App?</Text>
                        <Gap height={20} />
                        <View style={styles.btnBottom}>
                            <TouchableOpacity style={styles.btnYes}>
                                <Text style={styles.textStyle3}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnCancel} onPress={() => setmodalVisible(!modalVisible)}>
                                <Text style={styles.textStyle4}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
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
        padding: 35 / 2,
        flexDirection: 'row',

    },
    image: {
        backgroundColor: 'white',
        height: 80,
        width: 80,
        borderRadius: 10,
        marginRight: 35 / 2
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    menuBtn: {
        padding: 20,
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
        marginHorizontal: 24,
    },
    centeredView: {
        justifyContent: 'flex-end',
        width: "100%",
        height: "100%",
        backgroundColor: colors._grayOp,
    },
    modalView: {
        backgroundColor: colors._white,
        padding: 12,
        borderRadius: 20,
    },
    modalText: {
        fontSize: 18,
        color: colors._red,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
    },
    textStyle2: {
        fontSize: 14,
        color: colors._black,
        fontFamily: fonts.primary[300],
        textAlign: 'center',
    },
    btnYes: {
        backgroundColor: colors._grey2,
        padding: 12,
        width: "48%",
        borderRadius: 20,
    },
    btnCancel: {
        backgroundColor: colors._red,
        padding: 12,
        width: "48%",
        borderRadius: 20,
    },
    btnBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle3: {
        fontSize: 14,
        color: colors._black,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
    },
    textStyle4: {
        fontSize: 14,
        color: colors.white,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
    },
})