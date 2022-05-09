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
      <Icon />
      <Text style={{ color: colors._white, fontFamily: fonts.primary[600], fontSize: 18, marginLeft: 8 }}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    backgroundColor: colors._blue,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    shadowColor: colors._black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 12,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
  }
});
export default HeaderPage
