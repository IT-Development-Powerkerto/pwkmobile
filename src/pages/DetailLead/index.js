import Clipboard from '@react-native-clipboard/clipboard';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { showMessage } from "react-native-flash-message";
import { launchImageLibrary } from 'react-native-image-picker';
import Api from '../../Api';
import { Profile } from '../../assets';
import { Button, Gap, HeaderBack, Input } from '../../components';
import { colors, fonts } from '../../utils';
import helpers from '../../utils/helpers';

const DetailLead = ({ route, navigation }) => {
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
    const [totalprice2, setTotalprice2] = useState("");
    const [weight, setWeight] = useState("");
    const [shippingpromotion, setShippingpromotion] = useState("");
    const [shippingprice, setShippingprice] = useState("");
    const [shippingprice2, setShippingprice2] = useState("");
    const [totalshipping, setTotalshipping] = useState("");
    const [shippingadmin, setShippingadmin] = useState("");
    const [shippingadmin2, setShippingadmin2] = useState("");
    const [promotionadmin, setPromotionadmin] = useState("");
    const [totaladmin, setTotaladmin] = useState("");
    const [grandprice, setGrandprice] = useState("");
    //kebutuhan cek ongkir
    const [warehouse, setWarehouse] = useState("");
    const [subdistrict, setSubdistrict] = useState("");
    //kebutuhan edit lead
    const [productpromotionid, setProductpromotionid] = useState("");
    const [addproductpromotionid, setAddProductpromotionid] = useState("");
    const [status, setStatus] = useState("");
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [courier, setCourier] = useState("");
    const [shippingpromotionid, setShippingpromotionid] = useState("");
    const [addshippingpromotionid, setAddShippingpromotionid] = useState("");
    const [paymentmethod, setPaymentMethod] = useState("");
    const [promotionadminid, setPromotionadminid] = useState("");
    const [addpromotionadminid, setAddPromotionadminid] = useState("");
    //image
    const [photo, setPhoto] = useState("");
    const [photoDB, setPhotoDB] = useState("");
    const getImageFromGalery = () => {
        launchImageLibrary({ quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true }, (response) => {
            if (response.didCancel || response.error) {
                showMessage({
                    message: "Not uploading photos?",
                    type: "default",
                    backgroundColor: colors._red,
                    color: colors._white,
                    icon: 'warning',
                });
            } else {
                setPhoto(response.assets[0].uri);
                setPhotoDB(`data:${response.assets[0].type};base64,${response.assets[0].base64}`);
            }
        });
    }
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
            label: '',
            value: ''
        },
    ]);
    const [openProProd, setOpenProProd] = useState(false);
    const [valueProProd, setValueProProd] = useState('');
    const [itemProProd, setItemProProd] = useState([
        {
            label: '',
            value: ''
        }
    ]);
    const [openProShip, setOpenProShip] = useState(false);
    const [valueProShip, setValueProShip] = useState('');
    const [itemProShip, setItemProShip] = useState([
        {
            label: '',
            value: ''
        }
    ]);
    const [openProAdmin, setOpenProAdmin] = useState(false);
    const [valueProAdmin, setValueProAdmin] = useState('');
    const [itemProAdmin, setItemProAdmin] = useState([
        {
            label: '',
            value: ''
        }
    ]);
    const [openAddProProd, setOpenAddProProd] = useState(false);
    const [valueAddProProd, setValueAddProProd] = useState('');
    const [itemAddProProd, setItemAddProProd] = useState([
        {
            label: '',
            value: ''
        }
    ]);
    const [openAddProShip, setOpenAddProShip] = useState(false);
    const [valueAddProShip, setValueAddProShip] = useState('');
    const [itemAddProShip, setItemAddProShip] = useState([
        {
            label: '',
            value: ''
        }
    ]);
    const [openAddProAdmin, setOpenAddProAdmin] = useState(false);
    const [valueAddProAdmin, setValueAddProAdmin] = useState('');
    const [itemAddProAdmin, setItemAddProAdmin] = useState([
        {
            label: '',
            value: ''
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
            const product_promotion = parseInt(response.data.product_promotion);
            const add_product_promotion = parseInt(response.data.add_product_promotion)
            setProductpromotion((product_promotion + add_product_promotion).toString());
            setTotalprice(response.data.total_price);
            setWeight(response.data.product_weight);
            const shipping_promotion = parseInt(response.data.shipping_promotion);
            const add_shipping_promotion = parseInt(response.data.add_shipping_promotion)
            setShippingpromotion((shipping_promotion + add_shipping_promotion).toString());
            setShippingprice(response.data.shipping_price);
            setTotalshipping(response.data.total_shipping);
            setShippingadmin(response.data.shipping_admin);
            const admin_promotion = parseInt(response.data.admin_promotion);
            const add_admin_promotion = parseInt(response.data.add_admin_promotion)
            setPromotionadmin((admin_promotion+ add_admin_promotion).toString());
            setTotaladmin(response.data.total_admin);
            setGrandprice(response.data.total_payment)
            getProvince();
            getPromotionDetail(response.data.product_id);
            getWarehouse();
        } catch (error) {

        }
    }
    const getWarehouse = async () => {
        try {
            const response = await Api.getWarehouse(token);
            setItemWarehouse(response.data)
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
            setProvince(value);
        } catch (error) {

        }
    }
    const getSubdistrict = async (value) => {
        try {
            const response = await Api.getSubdistrict(value);
            setItemSubdistrict(response.data)
            setCity(value)
        } catch (error) {

        }
    }
    const getPromotionDetail = async (value) => {
        try {
            const response = await Api.getPromotionDetail(value, token);
            setItemProProd(response.data.product_promotion);
            setItemAddProProd(response.data.product_promotion);
            setItemProShip(response.data.shipping_promotion);
            setItemAddProShip(response.data.shipping_promotion);
            setItemProAdmin(response.data.admin_promotion);
            setItemAddProAdmin(response.data.admin_promotion);
        } catch (error) {

        }
    }
    const getShippingPrice = async (value) => {
        try {
            const data = {
                origin: warehouse,
                destination: subdistrict,
                weight: weight,
                courier: value,
            }
            const response = await Api.checkOngkir(data);
            setShippingprice(response.data.toString());
            setShippingprice2(response.data.toString());
            setCourier(value);
        } catch (error) {

        }
    }
    const countQuantity = (value) => {
        setQuantity(value);
        const totalPrice = value * price;
        setTotalprice(totalPrice.toString());
        setTotalprice2(totalPrice.toString())
    }
    const countproductpromotionDrop = async (value) => {
        const response = await Api.getPromotionProduct(value, token);
        const ppfixed = response.data.product_promotion;
        const pppercent = response.data.product_promotion_percent;
        const valuepppercent = totalprice * pppercent / 100;
        if (ppfixed <= valuepppercent) {
            const totalPrice = totalprice - ppfixed;
            setProductpromotion(ppfixed.toString());
            setTotalprice(totalPrice.toString());
        } else {
            const totalPrice = totalprice - valuepppercent;
            setProductpromotion(valuepppercent.toString());
            setTotalprice(totalPrice.toString());
        }
        setProductpromotionid(value);
    }
    const countaddproductpromotionDrop = async (value) => {
        const response = await Api.getPromotionProduct(value, token);
        const ppfixed = response.data.product_promotion;
        const pppercent = response.data.product_promotion_percent;
        const valuepppercent = totalprice2 * pppercent / 100;
        if (ppfixed <= valuepppercent) {
            const productpromotionPlus = parseInt(productpromotion) + parseInt(ppfixed);
            setProductpromotion(productpromotionPlus.toString());
            const totalPrice = totalprice - ppfixed;
            setTotalprice(totalPrice.toString());
        } else {
            const productpromotionPlus = parseInt(productpromotion) + parseInt(valuepppercent);
            setProductpromotion(productpromotionPlus.toString());
            const totalPrice = totalprice - valuepppercent;
            setTotalprice(totalPrice.toString());
        }
        setAddProductpromotionid(value);
    }
    const countshippingpromotionDrop = async (value) => {
        const response = await Api.getPromotionShipping(value, token);
        const shipfixed = response.data.shipping_promotion;
        const shippercent = response.data.shipping_promotion_percent;
        const valueshippercent = shippingprice * shippercent / 100;
        if (shipfixed <= valueshippercent) {
            const totalShipping = shippingprice - shipfixed;
            setShippingpromotion(shipfixed.toString());
            setTotalshipping(totalShipping.toString());
        } else {
            const totalShipping = totalshipping - valueshippercent;
            setShippingpromotion(valueshippercent.toString());
            setTotalshipping(totalShipping.toString());
        }
        // setShippingpromotion(response.data.shipping_promotion);
        setShippingpromotionid(value);
    }
    const countaddshippingpromotionDrop = async (value) => {
        const response = await Api.getPromotionShipping(value, token);
        //
        const shipfixed = response.data.shipping_promotion;
        const shippercent = response.data.shipping_promotion_percent;
        const valueshippercent = shippingprice2 * shippercent / 100;
        if (shipfixed <= valueshippercent) {
            const shippingpromotionPlus = parseInt(shippingpromotion) + parseInt(shipfixed);
            setShippingpromotion(shippingpromotionPlus.toString());
            const totalShipping = totalshipping - shipfixed;
            setTotalshipping(totalShipping.toString());
        } else {
            const shippingpromotionPlus = parseInt(shippingpromotion) + parseInt(valueshippercent);
            setShippingpromotion(shippingpromotionPlus.toString());
            const totalShipping = totalshipping - valueshippercent;
            setTotalshipping(totalShipping.toString());
        }
        setAddShippingpromotionid(value);
    }
    const choosePayment = (value) => {
        setPaymentMethod(value);
        if (value === 'COD') {
            if (courier === 'JNE REG') {
                showMessage({
                    message: "Courier not available for COD",
                    type: "default",
                    backgroundColor: colors._red,
                    color: colors._white,
                    icon: 'warning',
                    duration: 3000,
                });
            }
            if (courier === 'JNE OKE') {
                showMessage({
                    message: "Courier not available for COD",
                    type: "default",
                    backgroundColor: colors._red,
                    color: colors._white,
                    icon: 'warning',
                    duration: 3000,
                });
            }
            if (courier === 'Ninja') {
                const admin = (parseInt(totalprice) + parseInt(totalshipping)) * 0.025;
                const adminCost = Math.ceil(admin / 1000) * 1000;
                setShippingadmin(adminCost.toString())
                setShippingadmin2(adminCost.toString())
            }
            if (courier === 'Sicepat') {
                const admin = (parseInt(totalprice) + parseInt(totalshipping)) * 0.030;
                if (admin < 2000) {
                   const adminCost = 2000;
                   setShippingadmin(adminCost.toString())
                   setShippingadmin2(adminCost.toString())
                }
                const adminCost = Math.ceil(admin / 1000) * 1000;
                setShippingadmin(adminCost.toString())
                setShippingadmin2(adminCost.toString())
            }
            if (courier === 'JNT') {
                const admin = (parseInt(totalprice) + parseInt(totalshipping)) * 0.030;
                if (admin < 5000) {
                   const adminCost = 5000;
                   setShippingadmin(adminCost.toString())
                   setShippingadmin2(adminCost.toString())
                }
                const adminCost = Math.ceil(admin / 1000) * 1000;
                setShippingadmin(adminCost.toString())
                setShippingadmin2(adminCost.toString())
            }
        } else {
            const shipadmin = 0;
            setShippingadmin(shipadmin.toString())
            setShippingadmin2(shipadmin.toString())
        }
    }
    const countadminpromotionDrop = async (value) => {
        const response = await Api.getPromotionAdmin(value, token);
        //
        const adminfixed = response.data.admin_promotion;
        const adminpercent = response.data.admin_promotion_percent;
        const valueadminpercent = shippingadmin * adminpercent / 100;
        if (adminfixed <= valueadminpercent) {
            const totalAdmin = shippingadmin - adminfixed;
            setPromotionadmin(adminfixed.toString());
            setTotaladmin(totalAdmin.toString());
        } else {
            const totalAdmin = shippingadmin - valueadminpercent;
            setPromotionadmin(valueadminpercent.toString());
            setTotaladmin(totalAdmin.toString());
        }
        //
        setPromotionadminid(value);
    }
    const countaddadminpromotionDrop = async (value) => {
        const response = await Api.getPromotionAdmin(value, token);
        const adminfixed = response.data.admin_promotion;
        const adminpercent = response.data.admin_promotion_percent;
        const valueadminpercent = shippingadmin2 * adminpercent / 100;
        if (adminfixed <= valueadminpercent) {
            const adminpromotionPlus = parseInt(promotionadmin) + parseInt(adminfixed);
            setPromotionadmin(adminpromotionPlus.toString());
            const totalAdmin = totaladmin - adminfixed;
            setTotaladmin(totalAdmin.toString());
            setGrandprice((parseInt(totalprice) + parseInt( totalshipping) + parseInt(totalAdmin)).toString())
        } else {
            const adminpromotionPlus = parseInt(promotionadmin) + parseInt(valueadminpercent);
            setPromotionadmin(adminpromotionPlus.toString());
            const totalAdmin = totaladmin - valueadminpercent;
            setTotaladmin(totalAdmin.toString());
            setGrandprice((parseInt(totalprice) + parseInt(totalshipping) + parseInt(totalAdmin)).toString())
        }
        setAddPromotionadminid(value);
    }
    const copyToClipboard = () => {
        Clipboard.setString(`Nama Pemesan: ${customername}\nAlamat: ${address}\nProvinsi: \nKota / Kabupaten: \nKecamatan: \nNo. Telp: ${contact}\nProduk yang dipesan: ${product}\nJumlah Pesanan: ${quantity}\nKurir: \nMetode: \nPromo Produk: \nPromo Ongkir: \nPromo Admin: \nTotal Pembayaran: ${grandprice}`);
        showMessage({
            message: "Copy to clipboard success",
            type: "default",
            backgroundColor: colors._green,
            color: colors._white,
            icon: 'success',
        });
    }
    const onSaveEditLead = async () => {
        try {
            const data = {
                _method: "PUT",
                name: customername,
                phone: contact,
                address: address,
                price: price,
                weight: weight,
                quantity: quantity,
                product_promotion_id: productpromotionid,
                add_product_promotion_id: addproductpromotionid,
                total_price: totalprice,
                warehouse: warehouse,
                province_id: province,
                city_id: city,
                subdistrict_id: subdistrict,
                courier: courier,
                shipping_price: shippingprice,
                shipping_promotion_id: shippingpromotionid,
                add_shipping_promotion_id: addshippingpromotionid,
                total_shipping: totalshipping,
                shipping_admin: shippingadmin,
                admin_promotion_id: promotionadminid,
                add_admin_promotion_id: addpromotionadminid,
                total_admin: totaladmin,
                payment_method: paymentmethod,
                total_payment: grandprice,
                status_id: status,
                image: photoDB,
            }
            const response = await Api.editLead(id, token, data);
            navigation.replace('MyCSTabs')
        } catch (error) {

        }
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <HeaderBack teks="Edit Lead" onPress={() => navigation.goBack()} />
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.card}>
                    <Text style={styles.cardName}>Data CS</Text>
                    <Gap height={12} />
                    <Text style={styles.inputLabel}>Advertiser</Text>
                    <Input noPad placeholder="Advertiser" value={advertiser} editable={false} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Operator</Text>
                    <Input noPad placeholder="Operator Name" value={operator} onChangeText={(value) => setOperator(value)} />
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
                        onChangeValue={() => setStatus(value)}
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardName}>Data Order</Text>
                    <Gap height={12} />
                    <Text style={styles.inputLabel}>Full Name</Text>
                    <Input noPad placeholder="Customer Name" value={customername} onChangeText={(value) => setCustomername(value)} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Contact</Text>
                    <Input noPad placeholder="Customer Number Phone" value={contact} onChangeText={(value) => setContact(value)} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Address</Text>
                    <Input multiline noPad placeholder="Customer Address" value={address} onChangeText={(value) => setAddress(value)} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.inputLabel}>Product</Text>
                    <Input noPad placeholder="Product Name" editable={false} value={product} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Quantity</Text>
                    <Input noPad placeholder="Product Quantity" value={quantity} onChangeText={(value) => countQuantity(value)} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Price</Text>
                    <Input multiline noPad placeholder="Price" editable={false} value={price} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Promotion Product</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openProProd}
                        value={valueProProd}
                        items={itemProProd}
                        setOpen={setOpenProProd}
                        setValue={setValueProProd}
                        setItems={setItemProProd}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                        onChangeValue={() => countproductpromotionDrop(valueProProd)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Additional Promotion Product</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openAddProProd}
                        value={valueAddProProd}
                        items={itemAddProProd}
                        setOpen={setOpenAddProProd}
                        setValue={setValueAddProProd}
                        setItems={setItemAddProProd}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                        onChangeValue={() => countaddproductpromotionDrop(valueAddProProd)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Product Promotion</Text>
                    <Input noPad placeholder="Product Promotion" value={productpromotion} editable={false} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Total Price</Text>
                    <Input noPad placeholder="Total Price" value={totalprice} editable={false} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.inputLabel}>Weight (gram)</Text>
                    <Input noPad placeholder="" value={weight} onChangeText={(value) => setWeight(value)} />
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
                        onChangeValue={() => setWarehouse(valueWarehouse)}
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
                        onChangeValue={() => setSubdistrict(valueSubdistrict)}
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
                        onChangeValue={() => getShippingPrice(valueCourier)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Promotion Shipping</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openProShip}
                        value={valueProShip}
                        items={itemProShip}
                        setOpen={setOpenProShip}
                        setValue={setValueProShip}
                        setItems={setItemProShip}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                        onChangeValue={() => countshippingpromotionDrop(valueProShip)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Additional Promotion Shipping</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openAddProShip}
                        value={valueAddProShip}
                        items={itemAddProShip}
                        setOpen={setOpenAddProShip}
                        setValue={setValueAddProShip}
                        setItems={setItemAddProShip}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                        onChangeValue={() => countaddshippingpromotionDrop(valueAddProShip)}
                    />
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
                        onChangeValue={() => choosePayment(valuePayment)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Shipping Price</Text>
                    <Input noPad placeholder="Shipping Price" value={shippingprice} editable={false} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Shipping Promotion</Text>
                    <Input noPad placeholder="Shipping Promotion" value={shippingpromotion} editable={false} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Total Shipping</Text>
                    <Input noPad placeholder="Total Shipping" value={totalshipping} editable={false} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.inputLabel}>Promotion Admin</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openProAdmin}
                        value={valueProAdmin}
                        items={itemProAdmin}
                        setOpen={setOpenProAdmin}
                        setValue={setValueProAdmin}
                        setItems={setItemProAdmin}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                        onChangeValue={() => countadminpromotionDrop(valueProAdmin)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Additional Promotion Admin</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openAddProAdmin}
                        value={valueAddProAdmin}
                        items={itemAddProAdmin}
                        setOpen={setOpenAddProAdmin}
                        setValue={setValueAddProAdmin}
                        setItems={setItemAddProAdmin}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={2}
                        placeholder=""
                        onChangeValue={() => countaddadminpromotionDrop(valueAddProAdmin)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Shipping Admin Cost</Text>
                    <Input noPad placeholder="Shipping Admin Cost" value={shippingadmin} editable={false} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Promotion Admin Cost</Text>
                    <Input noPad placeholder="Promotion Admin Cost" value={promotionadmin} editable={false} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Total Admin Cost</Text>
                    <Input multiline noPad placeholder="Total Admin Cost" value={totaladmin} editable={false} />
                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.cardName}>Grand Total</Text>
                        <Text style={styles.cardName}>{grandprice}</Text>
                    </View>
                    <Gap height={12} />
                    <Text style={styles.inputLabel}>Upload The Proof</Text>
                    <Gap height={4} />
                    <TouchableOpacity onPress={getImageFromGalery}>
                        <Image source={photo === "" ? Profile : { uri: photo }} style={{ width: 100, height: 100, borderRadius: 20 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 24 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Button text="Cancel" color={colors._white} colorText={colors._black} height={46} fontSize={14} onPress={() => navigation.goBack()} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button text="Save" color={colors._blue} colorText={colors._white} height={46} fontSize={14} onPress={onSaveEditLead} />
                        </View>
                    </View>
                    <Gap height={20} />
                    <Button text="Copy to clipboard" color={colors._blue} colorText={colors._white} height={46} fontSize={14} onPress={copyToClipboard} />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors._white,
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
        marginHorizontal: 24,
        marginTop: 20
    },
    cardName: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors._white
    },
    dropdownText: {
        fontSize: 14,
        color: colors._black,
        fontFamily: fonts.primary[400],
    },
    dropdownBtnStyle: {
        backgroundColor: colors._white,
        borderRadius: 12,
        borderColor: colors._gray,
    },
})

export default DetailLead
