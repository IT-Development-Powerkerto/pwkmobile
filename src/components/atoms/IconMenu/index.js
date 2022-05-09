import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Home, HomeColor, LeadColor, Lead, ProfileUserColor, ProfileUser } from '../../../assets';
import { colors, fonts } from '../../../utils';

const IconMenu = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === 'Home') {
            return active ? <HomeColor /> : <Home />
        }
        if (title === 'Leads') {
            return active ? <LeadColor /> : <Lead />
        }
        if (title === 'Profile') {
            return active ? <ProfileUserColor /> : <ProfileUser />
        }
        return <HomeColor />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.teks(active)}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    teks: active => ({
        fontSize: 10,
        color: active? colors._blue3 : colors._textGray,
        fontFamily: fonts.primary[600],
    })
};

export default IconMenu;