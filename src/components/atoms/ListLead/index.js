import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import Button from '../Button'
import Gap from '../Gap'

const ListLead = ({customer_name, customer_whatsapp, status, created_at}) => {
    const [modalVisible, setmodalVisible] = useState(false)
    return (
        <View style={styles.CardLead}>

            <TouchableOpacity style={styles.FirstCardLead} onPress={() => setmodalVisible(true)}>
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
            </TouchableOpacity>
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
                        <Text style={{ fontSize: 16, fontFamily: fonts.primary[600], color: colors._blue, marginLeft: 24, marginTop: 24 }}>Detail Lead</Text>
                        <Gap height={20} />
                        <View style={styles.modalContent}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text}>{`Ord-2243`}</Text>
                                <Text style={styles.text}>{created_at}</Text>
                            </View>
                            <Gap height={10} />
                            <Text style={styles.text}>ADV NAME</Text>
                            <Gap height={10} />
                            <Text style={styles.text}>CS NAME</Text>
                            <Gap height={20} />
                            <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1 }}></View>
                            <Gap height={20} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.keyItem}>
                                    <Text style={styles.text}>Product</Text>
                                    <Text style={styles.text}>: </Text>
                                </View>
                                <Text style={styles.text}>Product Name</Text>
                            </View>
                            <Gap height={5} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.keyItem}>
                                    <Text style={styles.text}>Customer</Text>
                                    <Text style={styles.text}>: </Text>
                                </View>
                                <Text style={styles.text}>{customer_name}</Text>
                            </View>
                            <Gap height={5} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.keyItem}>
                                    <Text style={styles.text}>Whatsapp</Text>
                                    <Text style={styles.text}>: </Text>
                                </View>
                                <Text style={styles.text}>{customer_whatsapp}</Text>
                            </View>
                            <Gap height={5} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.keyItem}>
                                    <Text style={styles.text}>Status</Text>
                                    <Text style={styles.text}>: </Text>
                                </View>
                                <Text style={styles.text}>{status}</Text>
                            </View>
                            <Gap height={40} />
                            <View style={{ justifyContent: 'center' }}>

                                <Button text="Edit Lead" color={'#fff'} height={46} fontSize={14} colorText={colors._blue} icon={'EditBlue'} onPress={() => setmodalVisible(!modalVisible)}/>
                            </View>
                            <Button text="Cancel" height={46} fontSize={14}  onPress={() => setmodalVisible(!modalVisible)}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ListLead

const styles = StyleSheet.create({
    CardLead: {
        height: 73,
        marginHorizontal: 24,
        marginVertical: 5,
    },
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
    text: {
        fontSize: 13, 
        fontFamily: fonts.primary[500], 
        color: '#fff',
    },
    keyItem: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})