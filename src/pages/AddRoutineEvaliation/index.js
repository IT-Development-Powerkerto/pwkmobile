import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { Button, ButtonIcon, Gap, HeaderBack, Input } from '../../components';
import { colors, fonts } from '../../utils';

const AddRoutineEvaliation = () => {
    const [teksField, setTextFiled] = useState("")
    const [teksFieldTime, setTextFiledTime] = useState("")
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dateTime, setDateTime] = useState(new Date())
    const [openTime, setOpenTime] = useState(false)
    
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Routine Evaluation" onPress={()=> navigation.goBack()}/>
            <View style={{ paddingHorizontal: 24, flex: 1 }}>
                <Gap height={20} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Product</Text>
                <Input noPad />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Date</Text>
                <ButtonIcon onPress={() => setOpen(!open)} teks={teksField} type='date' />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    textColor={colors._white}
                    mode="date"
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        setTextFiled(date.toLocaleDateString())
                        setOpen(!open)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Time</Text>
                <ButtonIcon teks={teksFieldTime} type='clock' onPress={() => setOpenTime(!open)}/>
                <DatePicker
                    modal
                    open={openTime}
                    date={dateTime}
                    textColor={colors._white}
                    mode="time"
                    onConfirm={(date) => {
                        setOpenTime(false)
                        setDateTime(date)
                        setTextFiledTime(date.toLocaleTimeString())
                        setOpenTime(!openTime)
                    }}
                    onCancel={() => {
                        setOpenTime(false)
                    }}
                />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Resistance</Text>
                <Input noPad />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Solution</Text>
                <Input noPad />
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
    }
})
export default AddRoutineEvaliation;
