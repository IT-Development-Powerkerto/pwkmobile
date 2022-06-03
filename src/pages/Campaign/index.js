import React, { useEffect, useState } from 'react'
import { Alert, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Api from '../../Api'
import { CardCampaign, Gap, HeaderPage } from '../../components'
import { colors, fonts, getData } from '../../utils'

const Campaign = ({ navigation }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [token, settoken] = useState("")
    const [dataCampaign, setDataCampaign] = useState([
        {
            id: 0,
            title: "",
            lead_count: "",
            operator_count: "",
        }
    ])
    const gotoCreateCampaign = () => {
        getData('user').then(res => {
            const params = {
                token: res.token
            }
            navigation.navigate('CreateCampaign', params)
        })
    }
    const getCampaign = async () => {
        try {
            const response = await Api.getMyCampaign(token);
            setDataCampaign(response.data)
        } catch (error) {

        }
    }
    const getUser = () => {
        getData('user').then(res => {
            settoken(res.token)
        })
    }
    const onDelete = async (params) => {
        try {
            Alert.alert(
                'Are you sure you want to delete this promotion?',
                '',
                [
                    { text: 'No, dont delete', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    {
                        text: 'Yes, delete', onPress: async () => {
                            const response = await Api.deleteCampaign(params.id, token)
                            onRefresh();
                        }
                    },
                ],
            )
        } catch (error) {

        }
    }
    const onEdit = async (value) => {
        const params = {
            id: value.id,
            token: token,
        }
        navigation.navigate('EditCampaign', params)
    }
    const onRefresh = () => {
        setRefreshing(true);
        getUser();
        getCampaign();
        setRefreshing(false);
    };
    useEffect(() => {
        getUser();
        getCampaign();
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderPage title="Campaign" icon="Campaign" />
            <Gap height={20} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 24 }}>
                <View>
                    <Text style={styles.teks}>Campaign</Text>
                    <Text style={styles.teks2}>{`${dataCampaign.length} Campaigns`}</Text>
                </View>
                <TouchableOpacity onPress={gotoCreateCampaign}>
                    <Text style={styles.teks3}>+ Create Campaign</Text>
                </TouchableOpacity>
            </View>
            <Gap height={20} />
            <View style={styles.listContent}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {dataCampaign.map(data => {
                        const params = {
                            id: data.id
                        }
                        return <CardCampaign
                            key={data.id}
                            title={data.title}
                            lead_count={data.lead_count}
                            operator_count={data.operator_count}
                            onDelete={() => onDelete(params)}
                            onEdit={() => onEdit(params)}
                        />
                    })}
                </ScrollView>
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
    teks4: {
        color: colors._white,
        fontSize: 14,
    },
    listContent: {
        paddingHorizontal: 24,
    },
})
export default Campaign;
