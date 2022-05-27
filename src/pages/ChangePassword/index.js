import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { showMessage } from "react-native-flash-message";
import Api from '../../Api';
import { Button, Gap, HeaderBack, Input } from '../../components';
import { colors, fonts } from '../../utils';

const ChangePassword = ({ navigation, route }) => {
    const { token } = route.params;
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setconfirmNewPassword] = useState("")

    const onSaveChange = async () => {
        const error = [];
        if (currentPassword === '') {
            error.push('Current password must not empty')
        }
        if (newPassword === '') {
            error.push('New password must not empty')
        }
        if (newPassword.length < 8) {
            error.push('New password must more 8 characters')
        }
        if (confirmNewPassword === '') {
            error.push('Confirm New password must not empty')
        }
        if (newPassword !== confirmNewPassword) {
            error.push('Mismatch New password and Confirm Password')
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
                    current_password: currentPassword,
                    new_password: newPassword,
                    token: token
                }
                const response = await Api.changePassword(token, data)
                showMessage({
                    icon: `${response.data.success === false ? 'warning' : 'success'}`,
                    message: `Change password ${response.data.success === false ? 'failed' : 'success'}`,
                    type: "default",
                    backgroundColor: response.data.success === true ? colors._green : colors._red2,
                    color: colors._white,
                    animated: true,
                    duration: 3000,
                });
                navigation.replace('MyTabs');
            } catch (error) {
                showMessage({
                    icon: 'warning',
                    message: error.toString(),
                    type: "default",
                    backgroundColor: colors._red2,
                    color: colors._white,
                    animated: true,
                    duration: 1000,
                });
            }
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Change Password" onPress={() => navigation.goBack()} />
            <View style={{ paddingHorizontal: 24, flex: 1 }}>
                <Gap height={20} />
                <Text style={styles.label}>Current Password</Text>
                <Input noPad value={currentPassword} onChangeText={(value) => setCurrentPassword(value)} />
                <Gap height={10} />
                <Text style={styles.label}>New Password</Text>
                <Input noPad value={newPassword} onChangeText={(value) => setNewPassword(value)} />
                <Gap height={10} />
                <Text style={styles.label}>Confirm New Password</Text>
                <Input noPad value={confirmNewPassword} onChangeText={(value) => setconfirmNewPassword(value)} />
                <View style={{ flex: 1 }} />
                <Button text="Save Change" color={colors._blue} colorText='white' height={46} fontSize={14} onPress={onSaveChange} />
                <Gap height={10} />
                <Button text="Cancel" colorText={colors._textBlack} height={46} fontSize={14} onPress={() => navigation.goBack()} />
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
    label: {
        fontSize: 14,
        fontFamily: fonts.primary[500],
        color: colors._textBlack
    }
})
export default ChangePassword;
