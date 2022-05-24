import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Api from '../../Api';
import { Profile } from '../../assets';
import { Button, Gap, Input } from '../../components';
import { colors, fonts } from '../../utils';
import helpers from '../../utils/helpers';

const DetailLead = ({ route }) => {
    const { id, token } = route.params;
    const [dataLead, setDataLead] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [item, setItem] = useState([
        { label: 'Shipping Cost', value: 'Shipping Cost' },
        { label: 'Product Price', value: 'Product Price' },
        { label: 'Admin Cost', value: 'Admin Cost' },
    ]);
    const getData = async () => {
        try {
            const response = await Api.getDetailLead(id, token);
            setDataLead(response.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.namePage}>Edit Lead</Text>
            <Gap height={12} />
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.card}>
                    <Text style={styles.cardName}>Data CS</Text>
                    <Gap height={12} />
                    <Text style={styles.inputLabel}>Advertiser</Text>
                    <Input noPad value="Advertiser" editable={false}/>
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Operator</Text>
                    <Input noPad placeholder="Operator Name" value={dataLead.operator}/>
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Status</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={1}
                        placeholder="Select status"
                    // onChangeValue={() => setTypeName(value)}
                    />
                </View>
                <Gap height={20} />
                <View style={styles.card}>
                    <Text style={styles.cardName}>Data Order</Text>
                    <Gap height={12} />
                    <Text style={styles.inputLabel}>Full Name</Text>
                    <Input noPad placeholder="Customer Name" value={dataLead.customer_name}/>
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Contact</Text>
                    <Input noPad placeholder="Customer Number Phone" value={dataLead.customer_whatsapp}/>
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Address</Text>
                    <Input multiline noPad placeholder="Customer Address" value={dataLead.customer_address}/>
                </View>
                <Gap height={20} />
                <View style={styles.card}>
                    <Text style={styles.inputLabel}>Product</Text>
                    <Input noPad placeholder="Product Name" editable={false}/>
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Quantity</Text>
                    <Input noPad placeholder="Product Quantity" value={dataLead.quantity}/>
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Price</Text>
                    <Input multiline noPad placeholder="Price"/>
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Promotion Product</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select promotion product"
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Promotion Shipping</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select promotion shipping"
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Promotion Admin</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select promotion admin"
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Additional Promotion Product</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select additional promotion product"
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Additional Promotion Shipping</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select additional promotion shipping"
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Additional Promotion Admin</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select additional promotion admin"
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Product Promotion</Text>
                    <Input noPad placeholder="Product Promotion" value={dataLead.product_promotion}/>
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Total Price</Text>
                    <Input noPad placeholder="Total Price"/>
                </View>
                <Gap height={20} />
                <View style={styles.card}>
                    <Text style={styles.inputLabel}>Weight (gram)</Text>
                    <Input noPad placeholder="1000" />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Warehouse</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select promotion type"
                    // onChangeValue={() => setTypeName(value)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Destination Province</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select promotion type"
                    // onChangeValue={() => setTypeName(value)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Destination City</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select promotion type"
                    // onChangeValue={() => setTypeName(value)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Destination Subdistrict</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select promotion type"
                    // onChangeValue={() => setTypeName(value)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Courier</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select promotion type"
                    // onChangeValue={() => setTypeName(value)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Shipping Promotion</Text>
                    <Input noPad placeholder="Shipping Promotion" />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Shipping Price</Text>
                    <Input noPad placeholder="Shipping Price" />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Payment</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={item}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItem}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder="Select payment"
                    // onChangeValue={() => setTypeName(value)}
                    />
                </View>
                <Gap height={20} />
                <View style={styles.card}>
                    <Text style={styles.inputLabel}>Shipping Admin Cost</Text>
                    <Input noPad placeholder="0" />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Promotion Admin Cost</Text>
                    <Input noPad placeholder="0" />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Total Admin Cost</Text>
                    <Input multiline noPad placeholder="0" />
                </View>
                <Gap height={20} />
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.cardName}>Grand Total</Text>
                        <Text style={styles.cardName}>86.000</Text>
                    </View>
                    <Gap height={12} />
                    <Text style={styles.inputLabel}>Upload The Proof</Text>
                    <TouchableOpacity>
                        <Image source={Profile} style={{ width: 100, height: 100 }} />
                    </TouchableOpacity>
                </View>
                <Gap height={20} />
                <Button text="Save" color={colors._blue} colorText={colors._white} height={46} fontSize={14} />
                <Gap height={10} />
                <Button text="cancel" color={colors._white} colorText={colors._black} height={46} fontSize={14} />
                <Gap height={20} />
                <Button text="Copy to clipboard" color={colors._blue} colorText={colors._white} height={46} fontSize={14} />
                <Gap height={24} />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors._white,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    namePage: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors._textBlack
    },
    inputLabel: {
        fontSize: 13,
        fontFamily: fonts.primary[500],
        color: colors._white
    },
    card: {
        backgroundColor: colors._blue,
        padding: 20,
        borderRadius: 16,
    },
    cardName: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors._white
    },
    dropdownText: {
        fontSize: 14,
        color: colors._gray,
        fontFamily: fonts.primary[400],
    },
    dropdownBtnStyle: {
        backgroundColor: colors._white,
        borderRadius: 12,
        borderColor: colors._gray,
    },
})

export default DetailLead
