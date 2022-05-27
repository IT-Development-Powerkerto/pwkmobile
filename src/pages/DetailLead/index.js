import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Api from '../../Api';
import { Profile } from '../../assets';
import { Button, Gap, Input } from '../../components';
import { colors, fonts } from '../../utils';

const DetailLead = ({ route }) => {
    const { id, token } = route.params;
    //usestate inputan
    const [advertiser, setAdvertiser] = useState("");
    const [operator, setOperator] = useState("");
    const [customername, setCustomername] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [productpromotion, setProductpromotion] = useState("");
    const [totalprice, setTotalprice] = useState("");
    const [weight, setWeight] = useState("");
    const [shippingpromotion, setShippingpromotion] = useState("");
    const [shippingprice, setShippingprice] = useState("");
    const [totalshipping, setTotalshipping] = useState("");
    const [shippingadmin, setShippingadmin] = useState("");
    const [promotionadmin, setPromotionadmin] = useState("");
    const [totaladmin, setTotaladmin] = useState("");
    const [grandprice, setGrandprice] = useState("");
    const [image, setImage] = useState("")
    //modal
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [item, setItem] = useState([
        { label: 'Waiting', value: '3' },
        { label: 'Processing', value: '4' },
        { label: 'Closing', value: '5' },
        { label: 'Spam', value: '6' },
        { label: 'Failed', value: '7' },
    ]);
    const [openProvince, setOpenProvince] = useState(false);
    const [valueProvince, setValueProvince] = useState('');
    const [itemProvince, setItemProvince] = useState([
        {
            label: '',
            value: ''
        }
    ]);
    const [openCity, setOpenCity] = useState(false);
    const [valueCity, setValueCity] = useState('');
    const [itemCity, setItemCity] = useState([
        {
            label: '',
            value: ''
        }
    ]);
    const [openSubdistrict, setOpenSubdistrict] = useState(false);
    const [valueSubdistrict, setValueSubdistrict] = useState('');
    const [itemSubdistrict, setItemSubdistrict] = useState([
        {
            label: '',
            value: ''
        }
    ]);
    const [openCourier, setOpenCourier] = useState(false);
    const [valueCourier, setValueCourier] = useState('');
    const [itemCourier, setItemCourier] = useState([
        {
            label: 'POS',
            value: 'POS'
        },
        {
            label: 'JNE REG',
            value: 'JNE REG'
        },
        {
            label: 'JNE OKE',
            value: 'JNE OKE'
        },
        {
            label: 'JNT',
            value: 'JNT'
        },
        {
            label: 'Ninja',
            value: 'Ninja'
        },
        {
            label: 'Sicepat',
            value: 'Sicepat'
        },
    ]);
    const [openPayment, setOpenPayment] = useState(false);
    const [valuePayment, setValuePayment] = useState('');
    const [itemPayment, setItemPayment] = useState([
        {
            label: 'COD',
            value: 'COD'
        },
        {
            label: 'Transfer',
            value: 'Transfer'
        }
    ]);
    const [openWarehouse, setOpenWarehouse] = useState(false);
    const [valueWarehouse, setValueWarehouse] = useState('');
    const [itemWarehouse, setItemWarehouse] = useState([
        {
            label: 'Cilacap',
            value: 'Cilacap'
        },
        {
            label: 'Kosambi',
            value: 'Kosambi'
        },
        {
            label: 'Tandes.Sby',
            value: 'Tandes.Sby'
        }
    ]);
    const getData = async () => {
        try {
            const response = await Api.getDetailLead(id, token);
            setAdvertiser(response.data.advertiser);
            setOperator(response.data.operator);
            setCustomername(response.data.customer_name);
            setContact(response.data.customer_whatsapp);
            setAddress(response.data.customer_address);
            setProduct(response.data.product);
            setQuantity(response.data.quantity);
            setPrice(response.data.product_price);
            setProductpromotion(response.data.product_promotion);
            setTotalprice(response.data.total_price);
            setWeight(response.data.product_weight);
            setShippingpromotion(response.data.shipping_promotion);
            setShippingprice(response.data.shipping_price);
            setTotalshipping(response.data.total_shipping);
            setShippingadmin(response.data.shipping_admin);
            setPromotionadmin(response.data.admin_promotion);
            setTotaladmin(response.data.total_admin);
            setGrandprice(response.data.total_payment)
            getProvince();
        } catch (error) {

        }
    }
    const getProvince = async () => {
        try {
            const response = await Api.getProvinces();
            setItemProvince(response.data)
        } catch (error) {

        }
    }
    const getCity = async (value) => {
        try {
            const response = await Api.getCity(value);
            setItemCity(response.data)
        } catch (error) {

        }
    }
    const getSubdistrict = async (value) => {
        try {
            const response = await Api.getSubdistrict(value);
            setItemSubdistrict(response.data)
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
                    <Input noPad placeholder="Advertiser" value={advertiser} editable={false} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Operator</Text>
                    <Input noPad placeholder="Operator Name" value={operator} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Status</Text>
                    <DropDownPicker
                        listMode='MODAL'
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
                        placeholder=""
                    />
                </View>
                <Gap height={20} />
                <View style={styles.card}>
                    <Text style={styles.cardName}>Data Order</Text>
                    <Gap height={12} />
                    <Text style={styles.inputLabel}>Full Name</Text>
                    <Input noPad placeholder="Customer Name" value={customername} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Contact</Text>
                    <Input noPad placeholder="Customer Number Phone" value={contact} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Address</Text>
                    <Input multiline noPad placeholder="Customer Address" value={address} />
                </View>
                <Gap height={20} />
                <View style={styles.card}>
                    <Text style={styles.inputLabel}>Product</Text>
                    <Input noPad placeholder="Product Name" editable={false} value={product} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Quantity</Text>
                    <Input noPad placeholder="Product Quantity" value={quantity} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Price</Text>
                    <Input multiline noPad placeholder="Price" editable={false} value={price} />
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
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Product Promotion</Text>
                    <Input noPad placeholder="Product Promotion" value={productpromotion} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Total Price</Text>
                    <Input noPad placeholder="Total Price" value={totalprice} />
                </View>
                <Gap height={20} />
                <View style={styles.card}>
                    <Text style={styles.inputLabel}>Weight (gram)</Text>
                    <Input noPad placeholder="1000" value={weight} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Warehouse</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openWarehouse}
                        value={valueWarehouse}
                        items={itemWarehouse}
                        setOpen={setOpenWarehouse}
                        setValue={setValueWarehouse}
                        setItems={setItemWarehouse}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                    // onChangeValue={() => setTypeName(value)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Destination Province</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openProvince}
                        value={valueProvince}
                        items={itemProvince}
                        setOpen={setOpenProvince}
                        setValue={setValueProvince}
                        setItems={setItemProvince}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                        onChangeValue={() => getCity(valueProvince)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Destination City</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openCity}
                        value={valueCity}
                        items={itemCity}
                        setOpen={setOpenCity}
                        setValue={setValueCity}
                        setItems={setItemCity}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                        onChangeValue={() => getSubdistrict(valueCity)}
                    // onChangeValue={() => setTypeName(value)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Destination Subdistrict</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openSubdistrict}
                        value={valueSubdistrict}
                        items={itemSubdistrict}
                        setOpen={setOpenSubdistrict}
                        setValue={setValueSubdistrict}
                        setItems={setItemSubdistrict}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                    // onChangeValue={() => setTypeName(value)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Courier</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openCourier}
                        value={valueCourier}
                        items={itemCourier}
                        setOpen={setOpenCourier}
                        setValue={setValueCourier}
                        setItems={setItemCourier}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Shipping Promotion</Text>
                    <Input noPad placeholder="Shipping Promotion" value={shippingpromotion} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Shipping Price</Text>
                    <Input noPad placeholder="Shipping Price" value={shippingprice} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Payment</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openPayment}
                        value={valuePayment}
                        items={itemPayment}
                        setOpen={setOpenPayment}
                        setValue={setValuePayment}
                        setItems={setItemPayment}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Total Shipping</Text>
                    <Input noPad placeholder="Total Shipping" value={totalshipping} />
                </View>
                <Gap height={20} />
                <View style={styles.card}>
                    <Text style={styles.inputLabel}>Shipping Admin Cost</Text>
                    <Input noPad placeholder="Shipping Admin Cost" value={shippingadmin} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Promotion Admin Cost</Text>
                    <Input noPad placeholder="Promotion Admin Cost" value={promotionadmin} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Total Admin Cost</Text>
                    <Input multiline noPad placeholder="Total Admin Cost" value={totaladmin} />
                </View>
                <Gap height={20} />
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.cardName}>Grand Total</Text>
                        <Text style={styles.cardName}>{grandprice}</Text>
                    </View>
                    <Gap height={12} />
                    <Text style={styles.inputLabel}>Upload The Proof</Text>
                    <TouchableOpacity>
                        <Image source={Profile} style={{ width: 100, height: 100 }} />
                    </TouchableOpacity>
                </View>
                <Gap height={20} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Button text="cancel" color={colors._white} colorText={colors._black} height={46} fontSize={14} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button text="Save" color={colors._blue} colorText={colors._white} height={46} fontSize={14} />
                    </View>
                </View>
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
