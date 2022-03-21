import React, { useEffect, useState } from "react";
import { Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Api from "../../Api";
import { Button, Gap, HeaderHome, Input, ListLead } from "../../components";
import { colors, fonts, getData } from "../../utils";
import DropDownPicker from 'react-native-dropdown-picker'


const Home = ({ navigation }) => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [totalLead, setTotalLead] = useState('')
    const [totalClosing, setTotalClosing] = useState('')
    const [dailyLead, setDailyLead] = useState('')
    const [dailyClosing, setDailyClosing] = useState('')
    const [modalVisible, setmodalVisible] = useState(false)
    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(false);
    const [value, setValue] = useState('');
    const [values, setValues] = useState('');
    const [items, setItems] = useState([
        { label: 'Today', value: 'today' },
        { label: 'Yesterday', value: 'yesterday' },
        { label: 'Last Week', value: 'last_week' },
        { label: 'Last Month', value: 'last_month' },
        { label: 'All', value: 'all' }
    ]);
    const [item, setItem] = useState([
        { label: 'Today', value: 'today' },
        { label: 'Yesterday', value: 'yesterday' },
        { label: 'Last Week', value: 'last_week' },
        { label: 'Last Month', value: 'last_month' },
        { label: 'All', value: 'all' }
    ]);
    const [lead, setLead] = useState([
        {
            customer_name: 'Customer',
            customer_whatsapp: '62891245678',
            status: 'Closing',
            created_at: '2022-01-01 10:10:10',
            updated_at: '2022-01-02 11:11:11'
        }
    ])

    useEffect(() => {
        getData('user').then(res => {
            const userID = async () => {
                const response = await Api.getUserPWK(res.id)
                const responseLead = await Api.getLeads(res.token)
                setName(response.data[0].name)
                setRole(response.data[0].role.name)
                setImage(response.data[0].image)
                setTotalLead(responseLead.data.total_lead)
                setTotalClosing(responseLead.data.total_closing)
                setDailyLead(responseLead.data.daily_lead)
                setDailyClosing(responseLead.data.daily_closing)
                setLead(responseLead.data.leads)
            }
            userID()
        });
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor="#009EF7" translucent={true} />
            <HeaderHome name={name} role={role} image={image} />
            <Gap height={10} />
            <View style={styles.mainCard}>
                <View style={styles.FirstCard}>
                    <Text style={{ fontSize: 28, fontFamily: 'Poppins-Bold', color: '#fff', top: 7 }}>{totalLead}</Text>
                    <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#fff', bottom: 7 }}>Total Lead</Text>
                </View>
                <View style={styles.SecondCard}>
                    <Text style={{ fontSize: 28, fontFamily: 'Poppins-Bold', color: '#fff', top: 7 }}>{totalClosing}</Text>
                    <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#fff', bottom: 7 }}>Total Closing</Text>
                </View>
            </View>
            <View style={styles.mainCard}>
                <View style={styles.ThirdCard}>
                    <Text style={{ fontSize: 28, fontFamily: 'Poppins-Bold', color: '#fff', top: 7 }}>{dailyLead}</Text>
                    <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#fff', bottom: 7 }}>Daily Lead</Text>
                </View>
                <View style={styles.FourtCard}>
                    <Text style={{ fontSize: 28, fontFamily: 'Poppins-Bold', color: '#fff', top: 7 }}>{dailyClosing}</Text>

                    <Text style={{ fontSize: 22, fontFamily: 'Poppins-Medium', color: '#fff', bottom: 7 }}>Daily Closing</Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, alignItems: 'center' }}>
                <View>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', color: '#1F2432' }}>Daily Lead</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Poppins-SemiBold', color: '#A3A3A3' }}>{`${dailyLead} Leads`}</Text>
                </View>
                <TouchableOpacity onPress={() => setmodalVisible(!modalVisible)}>
                    <Text style={{ color: '#166ED8', fontFamily: 'Poppins-SemiBold', }}>+ Manual Lead</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                {lead.map(data => {
                    return (
                        // <View style={styles.CardLead}>
                        <ListLead key={data.id} customer_name={data.customer_name} customer_whatsapp={data.customer_whatsapp} status={data.status} created_at={data.created_at} />
                        // </View>
                    )
                })}
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
                        <Text style={{ fontSize: 16, fontFamily: fonts.primary[600], color: colors._blue, marginLeft: 24, marginTop: 24 }}>Manual Lead</Text>
                        <Gap height={20} />
                        <View style={styles.modalContent}>
                            <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: '#fff' }}>Operator</Text>
                            <Input noPad placeholder="Khairul Anwar Fadloli" />
                            <Gap height={10} />
                            <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: '#fff' }}>Campaign</Text>
                            <DropDownPicker
                                open={opens}
                                value={values}
                                items={items}
                                setOpen={setOpens}
                                setValue={setValues}
                                setItems={setItems}
                                showArrowIcon={true}
                                style={styles.dropdownBtnStyle}
                                containerStyle={styles.dropdownContainerStyle}
                                textStyle={styles.dropdownText}
                                showTickIcon={true}
                                zIndex={2}
                                // dropDownDirection="TOP"
                            />
                            <Gap height={10} />
                            <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: '#fff' }}>Campaign</Text>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={item}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                showArrowIcon={true}
                                style={styles.dropdownBtnStyle}
                                // style={[styles.dropdownBtnStyle, {        marginTop: opens ? 175 : 20}]}
                                containerStyle={styles.dropdownContainerStyle}
                                textStyle={styles.dropdownText}
                                showTickIcon={true}
                                zIndex={1}
                            />
                            <Gap height={10} />
                            <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: '#fff' }}>Customer Name</Text>
                            <Input noPad />
                            <Gap height={10} />
                            <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: '#fff' }}>Customer Phone</Text>
                            <Input noPad />
                            <Gap height={30} />
                            <Button text="Add Lead" color={colors._blue2} height={46} fontSize={14} />
                            <Gap height={10} />
                            <Button text="Cancel" height={46} fontSize={14}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mainCard: {
        height: 100,
        paddingHorizontal: 20,
        flexWrap: 'wrap',
        alignContent: 'space-around',
        marginTop: 10,
    },
    FirstCard: {
        width: '50%',
        height: '100%',
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: '#009EF7',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        paddingLeft: 10,
        marginRight: 5
    },
    SecondCard: {
        width: '50%',
        height: '100%',
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: '#F79400',
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
        paddingLeft: 10,
        marginLeft: 5
    },
    ThirdCard: {
        width: '50%',
        height: '100%',
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: '#0080F7',
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
        paddingLeft: 10,
        marginRight: 5
    },
    FourtCard: {
        width: '50%',
        height: '100%',
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: '#F77700',
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
        paddingLeft: 10,
        marginLeft: 5
    },
    CardLead: {
        height: 100,
        paddingHorizontal: 20,
        marginVertical: 5,
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
    dropdownText: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors._gray,
        fontFamily: fonts.primary[400],
    },
    dropdownBtnStyle: {
        backgroundColor: "#FFF",
        borderRadius: 12,
        borderColor: '#fff',
    },
});

export default Home;