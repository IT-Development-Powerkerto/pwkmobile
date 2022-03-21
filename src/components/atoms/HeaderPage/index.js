import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LeadWhite, ProfileWhite } from '../../../assets';

const HeaderPage = ({ title, icon }) => {
  const Icon = () => {
    if (icon == "Lead") {
      return <LeadWhite />
    } else if (icon == "Profile") {
      return <ProfileWhite />
    }
  }
  return (
    // <View style={styles.container} >
    <View style={[styles.Header, styles.shadowProp]} >
      <Icon />
      <Text
        style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 18, marginLeft: 20, marginTop: 5 }}>
        {title}
      </Text>
    </View>
    // </View>
  );
}

export default HeaderPage

const styles = StyleSheet.create({
  Header: {
    height: 60,
    backgroundColor: '#009EF7',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 12,
    elevation: 10,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 21,
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }
});