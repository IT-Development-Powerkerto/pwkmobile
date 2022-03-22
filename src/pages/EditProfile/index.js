import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Button, ButtonIcon, Gap, HeaderBack, Input } from '../../components';
import { colors, fonts } from '../../utils';

const EditProfile = () => {
    const [imgText, setimgText] = useState("")
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
                const image = response.assets[0].uri;
                const mystring = response.assets[0].fileName
                let mystrings = mystring.split('/file:///data/user/0/com.pwkmobile/cache/').join('/')
                setimgText(mystrings)
            }
        });
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Edit Profile" />
            <View style={{ paddingHorizontal: 24, flex: 1 }}>
                <Gap height={20} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Fullname</Text>
                <Input noPad />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Username</Text>
                <Input noPad />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Phone</Text>
                <Input noPad />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Email</Text>
                <Input noPad />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Role</Text>
                <Input noPad />
                <Gap height={10} />
                <Text style={{ fontSize: 13, fontFamily: fonts.primary[500], color: colors._textBlack }}>Image</Text>
                <ButtonIcon onPress={getImageFromGalery} teks={imgText} type='image'/>
                <View style={{ flex: 1 }} />
                <Button text="Add Lead" color={colors._blue2} colorText='white' height={46} fontSize={14} />
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
export default EditProfile;
