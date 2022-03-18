import {StyleSheet, Text, View, Image} from 'react-native';

import React from 'react';

const HeaderHome = ({name, role, image}) => {
  return (
    <View style={styles.Header}>
      <View>
        <Text
          style={{color: 'white', fontFamily: 'Poppins-Bold', fontSize: 24}}>
          {`Hello, ${name}`}
        </Text>
        <Text
          style={{color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14}}>
          {role}
        </Text>
      </View>
      <View>
        <Image
          source={{uri: `http://mobile.pwkbackoffice.com/${image}`}}
          style={{width: 54, height: 54, borderRadius: 27}}
        />
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  Header: {
    height: 150,
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
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
});
