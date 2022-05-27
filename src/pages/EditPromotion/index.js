import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { showMessage } from "react-native-flash-message";
import Api from '../../Api';
import { Button, Gap, HeaderBack, Input } from '../../components';
import { colors, fonts } from '../../utils';

const EditPromotion = ({ navigation, route }) => {
    const { id, promotion_name, token } = route.params;
    const [typeName, setTypeName] = useState('');
    const [productName, setProductName] = useState('');
    const [promotionName, setPromotionName] = useState(promotion_name);
    const [scPrice, setScPrice] = useState(0);
    const [scPercent, setScPercent] = useState(0);
    const [ppPrice, setPpPrice] = useState(0);
    const [ppPercent, setPpPercent] = useState(0);
    const [acPrice, setAcPrice] = useState(0);
    const [acPercent, setAcPercent] = useState(0);
    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(false);
    const [value, setValue] = useState('');
    const [values, setValues] = useState('');
    const [item, setItem] = useState([
        { label: 'Shipping Cost', value: 'Shipping Cost' },
        { label: 'Product Price', value: 'Product Price' },
        { label: 'Admin Cost', value: 'Admin Cost' },
    ]);
    const [items, setItems] = useState([
        {
            label: '',
            value: ''
        },
    ]);
    const getProductType = async () => {
        try {
            const response = await Api.getProductType(token);
            setItems(response.data)
        } catch (error) {

        }
    }
    const submitPromotion = async () => {
        const error = [];
        if (typeName === '') {
            error.push('Promotion type required')
        }
        if (productName === '') {
            error.push('Product type required')
        }
        if (promotionName === '') {
            error.push('Promotion name required')
        }
        if (typeName === 'Shipping Cost') {
            if (scPrice === 0 && scPercent === 0) {
                error.push('Promotion shipping cost required')
            }
        }
        if (typeName === 'Product Price') {
            if (ppPrice === 0 && ppPercent === 0) {
                error.push('Promotion product price required')
            }
        }
        if (typeName === 'Admin Cost') {
            if (acPrice === 0 && acPercent === 0) {
                error.push('Promotion admin cost required')
            }
        }
        if (error.length > 0) {
            showMessage({
                icon: 'warning',
                message: error[0],
                type: "default",
                backgroundColor: colors._red2,
                color: colors._white,
                animated: true,
                duration: 1000,
            });
        } else {
            try {
                const data = {
                    promotion_type: typeName,
                    product_name: productName,
                    promotion_name: promotionName,
                    promotion_shippment_cost: scPrice,
                    promotion_shippment_percent: scPercent,
                    promotion_product_price: ppPrice,
                    promotion_product_percent: ppPercent,
                    promotion_admin_cost: acPrice,
                    promotion_admin_percent: acPercent,
                    _method: "PUT"
                }
                const response = await Api.editPromotion(id, token, data);
                showMessage({
                    icon: 'success',
                    message: 'Edit promotion success',
                    type: "default",
                    backgroundColor: colors._green,
                    color: colors._white,
                    animated: true,
                    duration: 3000,
                });
                setTypeName('');
                setProductName('');
                setPromotionName('');
                setScPrice(0);
                setScPercent(0);
                setPpPrice(0);
                setPpPercent(0);
                setAcPrice(0);
                setAcPercent(0);
                const params = {
                    token: token
                }
                navigation.replace('Promotion', params)
            } catch (error) {
                showMessage({
                    icon: 'warning',
                    message: error.toString(),
                    type: "default",
                    backgroundColor: colors._red2,
                    color: colors._white,
                    animated: true,
                    duration: 3000,
                });
            }
        }
    }
    useEffect(() => {
        getProductType();
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Edit Promotion" onPress={() => navigation.goBack()} />
            <ScrollView style={styles.content}>
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Promotion Type</Text>
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
                    onChangeValue={() => setTypeName(value)}
                />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Product Type</Text>
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
                    zIndex={1}
                    placeholder="Select product type"
                    onChangeValue={() => setProductName(values)}
                />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Promotion Name</Text>
                <Input noPad value={promotionName} onChangeText={(value) => setPromotionName(value)} />
                <Gap height={10} />
                {typeName === "Shipping Cost" && <>
                    <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>{`Promotion ${typeName}`}</Text>
                    <Input noPad placeholder="Rp" value={scPrice} onChangeText={(value) => setScPrice(value)} />
                    <Gap height={5} />
                    <Input noPad placeholder="%" value={scPercent} onChangeText={(value) => setScPercent(value)} />
                </>}
                {typeName === "Product Price" && <>
                    <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>{`Promotion ${typeName}`}</Text>
                    <Input noPad placeholder="Rp" value={ppPrice} onChangeText={(value) => setPpPrice(value)} />
                    <Gap height={5} />
                    <Input noPad placeholder="%" value={ppPercent} onChangeText={(value) => setPpPercent(value)} />
                </>}
                {typeName === "Admin Cost" && <>
                    <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>{`Promotion ${typeName}`}</Text>
                    <Input noPad placeholder="Rp" value={acPrice} onChangeText={(value) => setAcPrice(value)} />
                    <Gap height={5} />
                    <Input noPad placeholder="%" value={acPercent} onChangeText={(value) => setAcPercent(value)} />
                </>}
                <Gap height={30} />
                <Button text="Submit" color={colors._blue} colorText={colors._white} height={46} fontSize={14} onPress={submitPromotion} />
                <Gap height={10} />
                <Button text="Cancel" color={colors._white} colorText={colors._black} height={46} fontSize={14} onPress={()=> navigation.goBack()}/>
                <Gap height={10} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors._white,
        flex: 1,
    },
    content: {
        padding: 24
    },
    teks: {
        color: colors._textBlack,
        fontSize: 14,
        fontFamily: fonts.primary[600],
    },
    teks2: {
        color: colors._textGray,
        fontSize: 11,
        fontFamily: fonts.primary[600],
    },
    teks3: {
        color: colors._blue,
        fontSize: 12,
        fontFamily: fonts.primary[600],
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
export default EditPromotion;
