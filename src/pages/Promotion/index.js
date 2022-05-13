import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Api from '../../Api'
import { Gap, HeaderBack, ListPromotion } from '../../components'
import { colors, fonts } from '../../utils'

const Promotion = ({ route, navigation }) => {
    const { token } = route.params;
    const [ countData, setCountData ] = useState('');
    const [promotion, setPromotion] = useState([
        {
            id: 33,
            user_id: "",
            promotion_type: "",
            product_name: "",
            promotion_name: "",
            promotion_product_price: "",
            promotion_product_percent: "",
            promotion_shippment_cost: "",
            promotion_shippment_percent: "",
            promotion_admin_cost: "",
            promotion_admin_percent: "",
            total_promotion: "",
        }
    ])
    const getPromotion = async () => {
        try {
            const response = await Api.getPromotion(token);
            setPromotion(response.data)
            setCountData(response.data.length)
        } catch (error) {

        }
    }
    const gotoCreatePromotion = () => {
        const params = {
            token: token
        }
        navigation.navigate('CreatePromotion', params)
    }
    useEffect(() => {
        getPromotion();
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
            <HeaderBack teks="Promotion" onPress={() => navigation.goBack()} />
            <Gap height={20} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 24 }}>
                <View>
                    <Text style={styles.teks}>Promotion List</Text>
                    <Text style={styles.teks2}>{`${countData} Data`}</Text>
                </View>
                <TouchableOpacity onPress={gotoCreatePromotion}>
                    <Text style={styles.teks3}>+ Create Promotion</Text>
                </TouchableOpacity>
            </View>
            <Gap height={20} />
            <ScrollView>
                <View style={styles.listContent}>
                    {promotion.map(data => {
                        return <ListPromotion
                            key={data.id}
                            promotion_type={data.promotion_type}
                            product_name={data.product_name}
                            promotion_name={data.promotion_name}
                            promotion_product_price={data.promotion_product_price}
                            promotion_product_percent={data.promotion_product_percent}
                            promotion_shippment_cost={data.promotion_shippment_cost}
                            promotion_shippment_percent={data.promotion_shippment_percent}
                            promotion_admin_cost={data.promotion_admin_cost}
                            promotion_admin_percent={data.promotion_admin_percent}
                            total_promotion={data.total_promotion} />
                    })}
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
export default Promotion;
