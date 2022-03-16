import { AsyncStorage } from 'react-native';

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
    }
}

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

export const removeUserDetail = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
        // await AsyncStorage.removeItem('@OrderList:key')
    } catch (err) {
        console.log('Something went wrong!')
    }
}