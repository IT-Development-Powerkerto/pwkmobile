import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CampaignWhite, LeadWhite, ProfileWhite } from '../../../assets';
import { colors, fonts } from '../../../utils';
import Gap from '../Gap';

const HeaderPage = ({ title, icon }) => {
  const Icon = () => {
    if (icon == "Lead") {
      return <LeadWhite />
    } else if (icon == "Profile") {
      return <ProfileWhite />
    } else if (icon == "Campaign") {
      return <CampaignWhite />
    }
  }
  return (
    <View style={styles.header} >
      <View style={{ width: 24, height: 24, justifyContent: 'center' }}>
        <Icon />
      </View>
      <Gap width={8} />
      <Text style={{ color: colors._white, fontFamily: fonts.primary[600], fontSize: 18 }}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    backgroundColor: colors._blue,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row'
  }
});

export default HeaderPage
