import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LeadWhite, ProfileWhite } from '../../../assets';
import { colors, fonts } from '../../../utils';

const HeaderPage = ({ title, icon }) => {
  const Icon = () => {
    if (icon == "Lead") {
      return <LeadWhite />
    } else if (icon == "Profile") {
      return <ProfileWhite />
    }
  }
  return (
    <View style={styles.header} >
      <View style={{ width: 24, height: 24, justifyContent: 'center' }}>
        <Icon />
      </View>
      <Text style={{ color: colors._white, fontFamily: fonts.primary[600], fontSize: 18 }}>{title}</Text>
      <View style={{ width: 24, height: 24 }} />
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
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    flexDirection: 'row',
  }
});

export default HeaderPage
