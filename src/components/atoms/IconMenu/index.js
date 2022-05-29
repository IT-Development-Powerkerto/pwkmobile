import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Budgeting, BudgetingColor, Campaign, CampaignColor, Home, HomeColor, Lead, LeadColor, ProfileUser, ProfileUserColor } from '../../../assets';
import { colors, fonts } from '../../../utils';
import Gap from '../Gap';

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
        if (title === 'Campaign') {
            return active ? <CampaignColor /> : <Campaign />
        }
        if (title === 'Budgeting') {
            return active ? <BudgetingColor /> : <Budgeting />
        }
        return <HomeColor />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Gap height={2} />
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
        color: active ? colors._blue3 : colors._textGray,
        fontFamily: fonts.primary[600],
    })
};

export default IconMenu;