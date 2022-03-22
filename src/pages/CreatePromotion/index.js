import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button, Gap, HeaderBack, Input } from '../../components';
import { colors, fonts } from '../../utils';
import DropDownPicker from 'react-native-dropdown-picker'


const CreatePromotion = () => {
    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(false);
    const [value, setValue] = useState('');
    const [values, setValues] = useState('');
    const [item, setItem] = useState([
        { label: 'Today', value: 'today' },
        { label: 'Yesterday', value: 'yesterday' },
        { label: 'Last Week', value: 'last_week' },
        { label: 'Last Month', value: 'last_month' },
        { label: 'All', value: 'all' }
    ]);
    const [items, setItems] = useState([
        { label: 'Today', value: 'today' },
        { label: 'Yesterday', value: 'yesterday' },
        { label: 'Last Week', value: 'last_week' },
        { label: 'Last Month', value: 'last_month' },
        { label: 'All', value: 'all' }
    ]);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Create Promotion" />
            <View style={{ paddingHorizontal: 24, flex: 1 }}>
                <Gap height={20} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Promotion Type</Text>
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
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Product Type</Text>
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
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Promotion Name</Text>
                <Input noPad />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Promotion Product Price</Text>
                <Input noPad />
                <Gap height={5} />
                <Input noPad />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Total Promotion</Text>
                <Input noPad />
                <Gap height={10} />
                <View style={{ flex: 1 }} />
                <Button text="Submit" color={colors._blue2} colorText='white' height={46} fontSize={14} />
                <Gap height={10} />
                <Button text="Cancel" height={46} fontSize={14} />
                <Gap height={10} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors._white,
        flex: 1,
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
    listContent: {
        paddingHorizontal: 24,
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
        borderColor: colors._gray,
    },
})
export default CreatePromotion;
