import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { Gap, HeaderPage, ListLead } from '../../components'
import { DropDown, Lead, Print } from '../../assets'
import { colors, fonts } from '../../utils'
import DropDownPicker from 'react-native-dropdown-picker'

const LeadTunneling = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('today');
    const [items, setItems] = useState([
        {label: 'Today', value: 'today'},
        {label: 'Yesterday', value: 'yesterday'},
        {label: 'Last Week', value: 'last_week'},
        {label: 'Last Month', value: 'last_month'},
        {label: 'All', value: 'all'}
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
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={colors._blue} />
            <HeaderPage icon="Lead" title="LEAD TUNNELING" />
            <Gap height={60} />
            <View style={styles.filter}>
                <View style={{flexDirection: 'row'}}>

                    <View style={{flex: 1}}>
                        <Text style={{fontFamily: fonts.primary[600], fontSize: 14, color: colors._textBlack}}>Lead Tunneling</Text>
                        <Text style={{fontFamily: fonts.primary[600], fontSize: 10, color: colors._textGray}} >10 Leads</Text>
                    </View>
                    <View style={{flex: 1,}}>
                        <DropDownPicker 
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            showArrowIcon={true}
                            style={styles.dropdownBtnStyle}
                            containerStyle={styles.dropdownContainerStyle}
                            textStyle={styles.dropdownText}
                            showTickIcon={true}
                        />
                    </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity>

                    <View style={styles.export}>
                        <Print />
                        <Text style={{fontFamily: fonts.primary[500], fontSize: 11, marginLeft: 5}}>Export</Text>
                    </View>
                    </TouchableOpacity>

                </View>
            </View>
            <Gap height={19} />
            {lead.map(data => {
                return (
                
                    <ListLead key={data.id} customer_name={data.customer_name} created_at={data.created_at} customer_whatsapp={data.customer_whatsapp} status={data.status}/>
                );

            })}
        </View>
    )
}

export default LeadTunneling

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }, 
    filter: {
        // backgroundColor: 'red',
        marginHorizontal: 24,
        height: 80,
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    dropdownText: {
        fontFamily: fonts.primary[600],
        fontSize: 10
    },
    dropdownBtnStyle: {
        // width: "100%",
        height: 30,
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444",
    },
    dropdownContainerStyle: {
        width: "100%",
        // height: 30,
    },
    export: {
        backgroundColor: '#F5F8FA',
        height: 30,
        width: 113, 
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    }
})