import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LeadWhite } from '../../../assets';

const HeaderPage = () => {
  return (
    <View style={styles.container} >
      <View style={styles.Header} >
				<LeadWhite />
        <Text
          style={{color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 18, marginLeft: 20, marginTop: 5}}>
          LEAD TUNNELING
        </Text>

      </View>
    </View>
  );
}

export default HeaderPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}, 
	Header: {
    height: 90,
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
		marginTop: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
});