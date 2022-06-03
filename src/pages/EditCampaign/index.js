import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { showMessage } from "react-native-flash-message";
import Api from '../../Api';
import { Button, Gap, HeaderBack, Input } from '../../components';
import { colors, fonts } from '../../utils';

const EditCampaign = ({ navigation, route }) => {
    const { id, token } = route.params;
    const [campaignname, setCampaignname] = useState("");
    const [fbp, setFbp] = useState("");
    const [thanks, setThanks] = useState("");
    const [customertocs, setCustomertocs] = useState("");
    const [cstocustomer, setCstocustomer] = useState("");
    const [product, setProduct] = useState("");
    const [fef, setFef] = useState("");
    const [few, setFew] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [item, setItem] = useState([
        { label: '', value: '' },
    ]);
    const [openFef, setOpenFef] = useState(false);
    const [valueFef, setValueFef] = useState('');
    const [itemFef, setItemFef] = useState([
        {
            label: 'Add Payment Info',
            value: '1'
        },
        {
            label: 'Add To Cart',
            value: '2'
        },
        {
            label: 'Add To Wishlist',
            value: '3'
        },
        {
            label: 'Complete Registration',
            value: '4'
        },
        {
            label: 'Contack',
            value: '5'
        },
        {
            label: 'Customize Product',
            value: '6'
        },
        {
            label: 'Lead',
            value: '7'
        },
        {
            label: 'Purchase',
            value: '8'
        },
        {
            label: 'View Content',
            value: '9'
        },
    ]);
    const [openFew, setOpenFew] = useState(false);
    const [valueFew, setValueFew] = useState('');
    const [itemFew, setItemFew] = useState([
        {
            label: 'Add Payment Info',
            value: '1'
        },
        {
            label: 'Add To Cart',
            value: '2'
        },
        {
            label: 'Add To Wishlist',
            value: '3'
        },
        {
            label: 'Complete Registration',
            value: '4'
        },
        {
            label: 'Contack',
            value: '5'
        },
        {
            label: 'Customize Product',
            value: '6'
        },
        {
            label: 'Lead',
            value: '7'
        },
        {
            label: 'Purchase',
            value: '8'
        },
        {
            label: 'View Content',
            value: '9'
        },
    ]);
    const getProductType = async () => {
        try {
            const response = await Api.getProductType(token);
            setItem(response.data)
        } catch (error) {

        }
    }
    const goSubmit = async () => {
        let error = []
        if (campaignname === '') {
            error.push('Campaign name required')
        }
        if (fbp === '') {
            error.push('Facebook pixel required')
        }
        if (thanks === '') {
            error.push('Thanks page required')
        }
        if (customertocs === '') {
            error.push('Customer to CS required')
        }
        if (cstocustomer === '') {
            error.push('CS to Customer required')
        }
        if (product === '') {
            error.push('Product required')
        }
        if (fef === '') {
            error.push('Facebook event from required')
        }
        if (few === '') {
            error.push('Facebook event WA required')
        }
        if (error.length > 0) {
            showMessage({
                icon: 'warning',
                message: error[0],
                type: "default",
                backgroundColor: colors._red2,
                color: colors._white,
                animated: true,
                duration: 3000,
            });
        }
        else {
            try {
                const data = {
                    _method: "PATCH",
                    title: campaignname,
                    product_id: product,
                    fbp: fbp,
                    event_id: fef,
                    tp: thanks,
                    event_wa: few,
                    customer_to_cs: customertocs,
                    cs_to_customer: cstocustomer
                }
                const response = await Api.editCampaign(id, token, data)
                navigation.navigate('Campaign');
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
            <HeaderBack teks="Create Campaign" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ flex: 1, padding: 24 }}>
                    <Text style={styles.inputLabel}>Campaign Name</Text>
                    <Input noPad placeholder="Campaign Name" value={campaignname} onChangeText={(value) => setCampaignname(value)} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Product</Text>
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
                        onChangeValue={() => setProduct(value)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Facebook Pixel</Text>
                    <Input noPad placeholder="Facebook Pixel" value={fbp} onChangeText={(value) => setFbp(value)} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Facebook Event From</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openFef}
                        value={valueFef}
                        items={itemFef}
                        setOpen={setOpenFef}
                        setValue={setValueFef}
                        setItems={setItemFef}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={1}
                        placeholder=""
                        onChangeValue={() => setFef(valueFef)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Thanks Page</Text>
                    <Input noPad placeholder="Thanks Page" multilinevalue value={thanks} onChangeText={(value) => setThanks(value)} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Facebook Event WA</Text>
                    <DropDownPicker
                        listMode='MODAL'
                        open={openFew}
                        value={valueFew}
                        items={itemFew}
                        setOpen={setOpenFew}
                        setValue={setValueFew}
                        setItems={setItemFew}
                        showArrowIcon={true}
                        style={styles.dropdownBtnStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        textStyle={styles.dropdownText}
                        showTickIcon={true}
                        zIndex={1}
                        placeholder=""
                        onChangeValue={() => setFew(valueFew)}
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Customer to CS</Text>
                    <Input noPad placeholder="Customer to CS" multilinevalue value={customertocs} onChangeText={(value) => setCustomertocs(value)} />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>CS to Customer</Text>
                    <Input noPad placeholder="CS to Customer" multiline value={cstocustomer} onChangeText={(value) => setCstocustomer(value)} />
                    <Gap height={30} />
                    <Button text="Submit" color={colors._blue} colorText={colors._white} height={46} fontSize={14} onPress={goSubmit} />
                    <Gap height={10} />
                    <Button text="Cancel" color={colors._white} colorText={colors._black} height={46} fontSize={14} onPress={() => navigation.goBack()} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors._white,
        flex: 1,
    },
    inputLabel: {
        fontSize: 13,
        fontFamily: fonts.primary[500],
        color: colors._black
    },
    dropdownText: {
        fontSize: 14,
        color: colors._black,
        fontFamily: fonts.primary[400],
    },
    dropdownBtnStyle: {
        backgroundColor: colors._white,
        borderRadius: 12,
        borderColor: colors._gray2,
    },
})
export default EditCampaign