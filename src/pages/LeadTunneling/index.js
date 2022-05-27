import React, { useEffect, useState } from 'react'
import { Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import Api from '../../Api'
import { Button, Gap, HeaderPage, ListLead } from '../../components'
import { colors, fonts, getData } from '../../utils'

const LeadTunneling = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [textDate, setTextDate] = useState('Choose date');
    const [leadLength, setLeadLength] = useState()
    const [userLeadModal, setUserLeadModal] = useState([])
    const [modalVisible, setmodalVisible] = useState(false)
    const [lead, setLead] = useState([
        {
            id: 35327,
            advertiser: "",
            operator: "",
            customer_name: "",
            customer_whatsapp: "",
            product: "",
            status: "",
            created_at: "",
            updated_at: ""
        },
    ])
    const gotoModalDetailLead = (params) => {
        setUserLeadModal(params)
        setmodalVisible(!modalVisible)
    }
    const getLead = async () => {
        getData('user').then(res => {
            const userID = async () => {
                const responses = await Api.getLeadDaily(res.token);
                setLead(responses.data.leads)
                setLeadLength(responses.data.leads.length)
            }
            userID()
        });
    }
    const gotoDetailLead = () => {
        getData('user').then(res => {
            const params = {
                token: res.token,
                id: userLeadModal.id
            }
            setmodalVisible(!modalVisible)
            navigation.navigate('DetailLead', params);
        })
    }
    const getLeadFiltered = async (params) => {
        getData('user').then(res => {
            const userID = async () => {
                const response = await Api.getLeadFiltered(res.token, params);
                setLead(response.data.leads)
                setLeadLength(response.data.leads.length)
            }
            userID()
        });
    }
    useEffect(() => {
        getLead()
    }, [])
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={colors._blue} />
            <HeaderPage icon="Lead" title="LEAD TUNNELING" />
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 24 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 14, color: colors._textBlack }}>Lead Tunneling</Text>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 10, color: colors._textGray }} >{`${leadLength} Leads`}</Text>
                </View>
                <TouchableOpacity onPress={() => setOpen(!open)} style={{ backgroundColor: colors._blue, paddingHorizontal: 10, padding: 4, borderRadius: 10 }}>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, color: colors._white }}>{textDate}</Text>
                </TouchableOpacity>
                {/* <Button colorText={colors._white} color={colors._blue} fontSize={12} width={100} text={textDate} onPress={() => setOpen(!open)} type='date' /> */}
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    textColor={colors._white}
                    mode="date"
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        setTextDate(date.toISOString().slice(0, 10))
                        getLeadFiltered(date.toISOString().slice(0, 10))
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
            {/* <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity>
                        <View style={styles.export}>
                            <Print />
                            <Text style={{ fontFamily: fonts.primary[500], fontSize: 11, marginLeft: 5 }}>Export</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: 24 }}>
                    {lead.map(data => {
                        const params = {
                            id: data.id,
                            advertiser: data.advertiser,
                            operator: data.operator,
                            customer_name: data.customer_name,
                            customer_whatsapp: data.customer_whatsapp,
                            product: data.product,
                            status: data.status,
                            created_at: data.created_at,
                        }
                        return (
                            <ListLead key={data.id} advertiser={data.advertiser} operator={data.operator} customer_name={data.customer_name} customer_whatsapp={data.customer_whatsapp} product={data.product} status={data.status} created_at={data.created_at} onPress={() => gotoModalDetailLead(params)} />
                        )
                    })}
                </View>
            </ScrollView>
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
                                <Text style={styles.text}>{`ORD - ${userLeadModal.id}`}</Text>
                                <Text style={styles.text}>{userLeadModal.created_at}</Text>
                            </View>
                            <Gap height={10} />
                            <Text style={styles.text}>{userLeadModal.advertiser}</Text>
                            <Gap height={10} />
                            <Text style={styles.text}>{userLeadModal.operator}</Text>
                            <Gap height={20} />
                            <View style={{ borderBottomColor: colors._white, borderBottomWidth: 1 }}></View>
                            <Gap height={20} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.keyItem}>
                                    <Text style={styles.text}>Product</Text>
                                    <Text style={styles.text}>: </Text>
                                </View>
                                <Text style={styles.text}>{userLeadModal.product}</Text>
                            </View>
                            <Gap height={5} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.keyItem}>
                                    <Text style={styles.text}>Customer</Text>
                                    <Text style={styles.text}>: </Text>
                                </View>
                                <Text style={styles.text}>{userLeadModal.customer_name}</Text>
                            </View>
                            <Gap height={5} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.keyItem}>
                                    <Text style={styles.text}>Whatsapp</Text>
                                    <Text style={styles.text}>: </Text>
                                </View>
                                <Text style={styles.text}>{userLeadModal.customer_whatsapp}</Text>
                            </View>
                            <Gap height={5} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.keyItem}>
                                    <Text style={styles.text}>Status</Text>
                                    <Text style={styles.text}>: </Text>
                                </View>
                                <Text style={styles.text}>{userLeadModal.status}</Text>
                            </View>
                            <Gap height={40} />
                            <Button text="Edit Lead" color={colors._white} height={46} fontSize={14} colorText={colors._blue3} icon={'EditBlue'} onPress={gotoDetailLead} />
                            <Gap height={10} />
                            <Button text="Cancel" colorText={colors._white} height={46} fontSize={14} onPress={() => setmodalVisible(!modalVisible)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default LeadTunneling

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors._white
    },
    mainModal: {
        justifyContent: "flex-end",
        flex: 1,
        backgroundColor: colors._blackOp,
    },
    subModal: {
        backgroundColor: colors._white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalContent: {
        backgroundColor: colors._blue,
        padding: 30,
    },
    keyItem: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})