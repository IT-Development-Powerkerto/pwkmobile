import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { showMessage } from "react-native-flash-message";
import { launchImageLibrary } from 'react-native-image-picker';
import Api from '../../Api';
import { Profile } from '../../assets';
import { Button, Gap, HeaderBack, Input } from '../../components';
import { colors, fonts, getData } from '../../utils';

const EditProfile = ({ navigation, route }) => {
    const { token, id } = route.params;
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [nickname, setNickname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [role, setRole] = useState("")
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
    const getProfile = () => {
        getData('user').then(res => {
            const getUser = async () => {
                const response = await Api.getUser(res.id, res.token);
                setName(response.data.name)
                setUsername(response.data.username)
                setNickname(response.data.nickname)
                setPhone(response.data.phone)
                setEmail(response.data.email)
                setRole(response.data.role)
                setPhoto(response.data.image)
            }
            getUser()
        });
    }
    const editProfile = async () => {
        const error = [];
        if (name === '') {
            error.push('Name must not empty')
        }
        if (username === '') {
            error.push('Username must not empty')
        }
        if (phone === '') {
            error.push('Phone must not empty')
        }
        if (email === '') {
            error.push('Email must not empty')
        } if (error.length > 0) {
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
                    name: name,
                    username: username,
                    nickname: nickname,
                    phone: phone,
                    email: email,
                    image: photoDB
                }
                const response = await Api.changeProfile(token, data, id)
                showMessage({
                    icon: `${response.data.success === false ? 'warning' : 'success'}`,
                    message: `Change profile ${response.data.success === false ? 'failed' : 'success'}`,
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
    useEffect(() => {
        getProfile();
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Edit Profile" onPress={()=> navigation.goBack()}/>
            <ScrollView showsHorizontalScrollIndicator={false} style={{ padding: 24 }}>
                <TouchableOpacity onPress={getImageFromGalery}>
                    <Image source={photo === "" ? Profile : { uri: photo }} style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} />
                </TouchableOpacity>
                <Gap height={10} />
                <Text style={styles.label}>Fullname</Text>
                <Input noPad value={name} onChangeText={(value) => setName(value)} />
                <Gap height={10} />
                <Text style={styles.label}>Username</Text>
                <Input noPad value={username} onChangeText={(value) => setUsername(value)} />
                <Gap height={10} />
                <Text style={styles.label}>Nickname</Text>
                <Input noPad value={nickname} onChangeText={(value) => setNickname(value)} />
                <Gap height={10} />
                <Text style={styles.label}>Phone</Text>
                <Input noPad value={phone} onChangeText={(value) => setPhone(value)} />
                <Gap height={10} />
                <Text style={styles.label}>Email</Text>
                <Input noPad value={email} onChangeText={(value) => setEmail(value)} />
                <Gap height={10} />
                <Text style={styles.label}>Role</Text>
                <Input noPad value={role} editable={false} />
                <Gap height={20} />
                <Button text="Edit Profile" color={colors._blue} colorText={colors._white} height={46} fontSize={14} onPress={editProfile} />
                <Gap height={10} />
                <Button text="Cancel" color={colors._white} colorText={colors._black} height={46} fontSize={14} onPress={() => navigation.goBack()} />
                <Gap height={24} />
            </ScrollView>
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
    label:{
        fontSize: 14, 
        fontFamily: fonts.primary[500], 
        color: colors._textBlack
    }
})
export default EditProfile;
