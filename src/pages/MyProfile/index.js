import React, { useEffect, useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Api from '../../Api'
import { Button, Gap, HeaderPage, ListButtonMenu } from '../../components'
import { colors, fonts, getData, removeUserDetail } from '../../utils'

const MyProfile = ({ navigation }) => {
    const [role, setRole] = useState("")
    const [userData, setUserData] = useState([])
    const [modalVisible, setmodalVisible] = useState(false);
    const goLogout = () => {
        removeUserDetail('user');
        navigation.replace('Login');
    }
    const gotoChangePassword = () => {
        getData('user').then(res => {
            const params = {
                token: res.token,
            }
            navigation.navigate('ChangePassword', params);
        })
    }
    const gotoChangeProfile = () => {
        getData('user').then(res => {
            const params = {
                id: res.id,
                token: res.token,
            }
            navigation.navigate('EditProfile', params);
        })
    }
    const gotoPromotion = () => {
        getData('user').then(res => {
            const params = {
                token: res.token,
            }
            navigation.navigate('Promotion', params)
        })
    }
    const getUser = async () => {
        getData('user').then(res => {
            setRole(res.role_id);
            const userID = async () => {
                const response = await Api.getUser(res.id, res.token);
                setUserData(response.data)
            }
            userID()
        });
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <>
            <View style={styles.container}>
                <HeaderPage title="My Profile" icon="Profile" />
                <View style={styles.cardProfile}>
                    <Image source={{ uri: userData.image }} style={styles.image} />
                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, color: colors._textBlack }} >{userData.name}</Text>
                        <Text style={{ fontFamily: fonts.primary[500], fontSize: 12, color: colors._textBlack }} >{userData.email}</Text>
                        <Text style={{ fontFamily: fonts.primary[500], fontSize: 12, color: colors._textBlack }} >{userData.phone}</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button icon="Key" text="Change Pass" colorText='white' height={40} width={146} color={colors._blue} onPress={gotoChangePassword} />
                    <Button icon="Edit" text="Edit Profile" colorText='white' height={40} width={146} color={colors._blue} onPress={gotoChangeProfile} />
                </View>
                <Gap height={30} />
                <View style={styles.menuBtn}>
                    {role === '5' && <ListButtonMenu type='promotion' teks='Promotion' onPress={gotoPromotion} />}
                    <ListButtonMenu type='reimbursement' teks='Reimbursement' />
                    <ListButtonMenu type='budgeting' teks='Budgeting Realization' />
                    <ListButtonMenu type='evaluation' teks='Routine Evaluation' />
                </View>
                <View style={{ flex: 1 }} />
                <View style={{ marginHorizontal: 24, marginBottom: 30 }}>
                    <Button text="Logout" height={46} fontSize={14} color={colors._red} colorText='white' onPress={() => setmodalVisible(!modalVisible)} />
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
                        <Gap height={10} />
                        <View style={styles.btnBottom}>
                            <TouchableOpacity style={styles.btnYes} onPress={goLogout}>
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
        borderRadius: 16,
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        backgroundColor: 'white',
        height: 80,
        width: 80,
        borderRadius: 10,
        marginRight: 10
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
        backgroundColor: colors._blackOp,
    },
    modalView: {
        backgroundColor: colors._white,
        padding: 12,
        borderRadius: 20,
    },
    modalText: {
        fontSize: 18,
        color: colors._red,
        fontFamily: fonts.primary[500],
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
        color: colors._white,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
    },
})