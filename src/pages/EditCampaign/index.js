import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, Gap, HeaderBack, Input } from '../../components';
import { colors, fonts } from '../../utils';

const EditCampaign = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [item, setItem] = useState([
        { label: 'Waiting', value: '3' },
        { label: 'Processing', value: '4' },
        { label: 'Closing', value: '5' },
        { label: 'Spam', value: '6' },
        { label: 'Failed', value: '7' },
    ]);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Edit Campaign" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ flex: 1, padding: 24 }}>
                    <Text style={styles.inputLabel}>Campaign Name</Text>
                    <Input noPad placeholder="Campaign Name" />
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
                    />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Facebook Pixel</Text>
                    <Input noPad placeholder="Facebook Pixel" />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Facebook Event From</Text>
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
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Thanks Page</Text>
                    <Input noPad placeholder="Thanks Page" multiline />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Facebook Event WA</Text>
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
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>Customer to CS</Text>
                    <Input noPad placeholder="Customer to CS" multiline />
                    <Gap height={10} />
                    <Text style={styles.inputLabel}>CS to Customer</Text>
                    <Input noPad placeholder="CS to Customer" multiline />
                    <Gap height={30} />
                    <Button text="Submit" color={colors._blue} colorText={colors._white} height={46} fontSize={14} onPress={() => navigation.goBack()} />
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