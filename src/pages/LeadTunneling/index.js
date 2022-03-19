import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, {useState} from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { Gap, HeaderPage, ListLead } from '../../components'
import { Lead, Print } from '../../assets'
import { colors, fonts } from '../../utils'

const LeadTunneling = () => {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
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
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                    <View>
                        <Text style={{fontFamily: fonts.primary[600], fontSize: 14, color: colors._textBlack}}>Lead Tunneling</Text>
                        <Text style={{fontFamily: fonts.primary[600], fontSize: 10, color: colors._textGray}} >10 Leads</Text>

                    </View>
                    <SelectDropdown
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                        defaultButtonText={"Today"}
                        buttonTextStyle={styles.dropdownText}
                        buttonStyle={styles.dropdownBtnStyle}
                    />
                </View>
                <View style={{alignItems: 'flex-end'}}>

                    <View style={styles.export}>
                        <Print />
                        <Text style={{fontFamily: fonts.primary[500], fontSize: 11, marginLeft: 5}}>Export</Text>
                    </View>
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
        width: "50%",
        height: 30,
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444",
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