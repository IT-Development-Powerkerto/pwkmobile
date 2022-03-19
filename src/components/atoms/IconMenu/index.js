import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Home, HomeColor, LeadColor, Lead, ProfileUserColor, ProfileUser } from '../../../assets';

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
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default IconMenu;