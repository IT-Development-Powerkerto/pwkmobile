import React, { useEffect, useState } from "react";
import { Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Api from "../../Api";
import { Button, Gap, HeaderHome, Input, ListLead } from "../../components";
import { colors, fonts, getData } from "../../utils";

const Home = () => {
    const [userData, setUserData] = useState([])
    const [userLead, setUserLead] = useState([])
    const [modalVisible, setmodalVisible] = useState(false)
    const [modalVisibles, setmodalVisibles] = useState(false)
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

    const getUser = async () => {
        getData('user').then(res => {
            const userID = async () => {
                const response = await Api.getUser(res.id, res.token);
                setUserData(response.data)
                const responses = await Api.getLeadDaily(res.token);
                setUserLead(responses.data)
                setLead(responses.data.leads)
            }
            userID()
        });
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderHome name={userData.name} role={userData.role} image={userData.image} />
            <Gap height={20} />
            <View style={styles.mainCard}>
                <View style={styles.FirstCard}>
                    <Text style={{ fontSize: 28, fontFamily: fonts.primary[700], color: colors._white }}>{userLead.total_lead}</Text>
                    <Text style={{ fontSize: 16, fontFamily: fonts.primary[500], color: colors._white }}>Total Lead</Text>
                </View>
                <View style={styles.SecondCard}>
                    <Text style={{ fontSize: 28, fontFamily: fonts.primary[700], color: colors._white }}>{userLead.total_closing}</Text>
                    <Text style={{ fontSize: 16, fontFamily: fonts.primary[500], color: colors._white }}>Total Closing</Text>
                </View>
            </View>
            <Gap height={10} />
            <View style={styles.mainCard}>
                <View style={styles.ThirdCard}>
                    <Text style={{ fontSize: 28, fontFamily: fonts.primary[700], color: colors._white }}>{userLead.daily_lead}</Text>
                    <Text style={{ fontSize: 16, fontFamily: fonts.primary[500], color: colors._white }}>Daily Lead</Text>
                </View>
                <View style={styles.FourtCard}>
                    <Text style={{ fontSize: 28, fontFamily: fonts.primary[700], color: colors._white }}>{userLead.daily_closing}</Text>
                    <Text style={{ fontSize: 16, fontFamily: fonts.primary[500], color: colors._white }}>Daily Closing</Text>
                </View>
            </View>
            <Gap height={20} />
            <View style={{ paddingHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={{ fontSize: 18, fontFamily: fonts.primary[600], color: colors._textBlack }}>Daily Lead</Text>
                    <Text style={{ fontSize: 12, fontFamily: fonts.primary[600], color: colors._textGray }}>{`4 Leads`}</Text>
                </View>
                <TouchableOpacity onPress={() => setmodalVisible(!modalVisible)}>
                    <Text style={{ color: colors._blue3, fontFamily: fonts.primary[600], }}>+ Manual Lead</Text>
                </TouchableOpacity>
            </View>
            <Gap height={10} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: 24 }}>
                    {lead.map(data => {
                        return (
                            <ListLead key={data.id} advertiser={data.advertiser} operator={data.operator} customer_name={data.customer_name} customer_whatsapp={data.customer_whatsapp} product={data.product} status={data.status} created_at={data.created_at} onPress={() => setmodalVisibles(!modalVisibles)} />
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
                        <Text style={{ fontSize: 16, fontFamily: fonts.primary[600], color: colors._blue, marginLeft: 24, marginTop: 24 }}>Manual Lead</Text>
                        <Gap height={20} />
                        <View style={styles.modalContent}>
                            <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._white }}>Operator</Text>
                            <Input editable={false} noPad placeholder={userData.name} />
                            <Gap height={10} />
                            <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._white }}>Campaign</Text>
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
                            />
                            <Gap height={10} />
                            <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._white }}>Campaign</Text>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={item}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                showArrowIcon={true}
                                style={styles.dropdownBtnStyle}
                                containerStyle={styles.dropdownContainerStyle}
                                textStyle={styles.dropdownText}
                                showTickIcon={true}
                                zIndex={1}
                            />
                            <Gap height={10} />
                            <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._white }}>Customer Name</Text>
                            <Input noPad />
                            <Gap height={10} />
                            <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._white }}>Customer Phone</Text>
                            <Input noPad />
                            <Gap height={30} />
                            <Button text="Add Lead" color={colors._blue3} colorText={colors._white} height={46} fontSize={14} onPress={() => alert('lah cobaaa')} />
                            <Gap height={10} />
                            <Button text="Cancel" colorText={colors._white} height={46} fontSize={14} onPress={() => setmodalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibles}
                onRequestClose={() => {
                    setmodalVisibles(!modalVisibles);
                }}
            >
                <View style={styles.mainModal}>
                    <View style={styles.subModal}>
                        <Text style={{ fontSize: 16, fontFamily: fonts.primary[600], color: colors._blue, marginLeft: 24, marginTop: 24 }}>Detail Lead</Text>
                        <Gap height={20} />
                        <View style={styles.modalContent}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text}>{`Ord-2243`}</Text>
                                <Text style={styles.text}>haha</Text>
                            </View>
                            <Gap height={10} />
                            <Text style={styles.text}>ADV NAME</Text>
                            <Gap height={10} />
                            <Text style={styles.text}>CS NAME</Text>
                            <Gap height={20} />
                            <View style={{ borderBottomColor: colors._white, borderBottomWidth: 1 }}></View>
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
                                <Text style={styles.text}>haha</Text>
                            </View>
                            <Gap height={5} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.keyItem}>
                                    <Text style={styles.text}>Whatsapp</Text>
                                    <Text style={styles.text}>: </Text>
                                </View>
                                <Text style={styles.text}>haha</Text>
                            </View>
                            <Gap height={5} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.keyItem}>
                                    <Text style={styles.text}>Status</Text>
                                    <Text style={styles.text}>: </Text>
                                </View>
                                <Text style={styles.text}>haha</Text>
                            </View>
                            <Gap height={40} />
                            <Button text="Edit Lead" color={colors._white} height={46} fontSize={14} colorText={colors._blue3} icon={'EditBlue'} onPress={() => setmodalVisible(!modalVisible)} />
                            <Gap height={10} />
                            <Button text="Cancel" height={46} fontSize={14} onPress={() => setmodalVisibles(!modalVisibles)} />
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
        backgroundColor: colors._white
    },
    mainCard: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 24
    },
    FirstCard: {
        width: '48%',
        height: 100,
        borderRadius: 8,
        backgroundColor: colors._blue,
        justifyContent: 'center',
        padding: 10,
    },
    SecondCard: {
        width: '48%',
        height: 100,
        borderRadius: 8,
        backgroundColor: colors._youngOrange,
        justifyContent: 'center',
        padding: 10,
    },
    ThirdCard: {
        width: '48%',
        height: 100,
        borderRadius: 8,
        backgroundColor: colors._blue3,
        justifyContent: 'center',
        padding: 10,
    },
    FourtCard: {
        width: '48%',
        height: 100,
        borderRadius: 8,
        backgroundColor: colors._oldOrange,
        justifyContent: 'center',
        padding: 10,
    },
    CardLead: {
        height: 100,
        paddingHorizontal: 20,
        marginVertical: 5,
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
    text: {
        fontSize: 13,
        fontFamily: fonts.primary[500],
        color: '#fff',
    },
    keyItem: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropdownText: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors._gray,
        fontFamily: fonts.primary[400],
    },
    dropdownBtnStyle: {
        backgroundColor: colors._white,
        borderRadius: 12,
        borderColor: colors._white,
    },
});

export default Home;