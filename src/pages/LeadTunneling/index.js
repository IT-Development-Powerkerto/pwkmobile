import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import Api from '../../Api'
import { Button, HeaderPage, ListLead } from '../../components'
import { colors, fonts, getData } from '../../utils'

const LeadTunneling = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [textDate, setTextDate] = useState('Choose date');
    const [leadLength, setLeadLength] = useState()
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
                <Button colorText={colors._white} color={colors._blue3} fontSize={12} width={100} text={textDate} onPress={() => setOpen(!open)} type='date' />
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
                        setOpen(!open)
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
                            <ListLead key={data.id} advertiser={data.advertiser} operator={data.operator} customer_name={data.customer_name} customer_whatsapp={data.customer_whatsapp} product={data.product} status={data.status} created_at={data.created_at} />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default LeadTunneling

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors._white
    },
})