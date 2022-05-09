import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils';


const HeaderHome = ({ name, role, image }) => {
  return (
    <View style={styles.Header}>
      <View style={{maxWidth: '80%'}}>
        <Text
          style={{ color: 'white', fontFamily: 'Poppins-Bold', fontSize: 20 }}>
          {`Hello, ${name}`}
        </Text>
        <Text
          style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14 }}>
          {role}
        </Text>
      </View>
      <Image
        source={{ uri: image }}
        style={{ width: 60, height: 60, borderRadius: 27 }}
      />
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  Header: {
    paddingVertical: 12,
    backgroundColor: colors._blue,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
});
