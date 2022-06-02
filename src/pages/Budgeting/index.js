import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { HeaderPage } from '../../components'
import { colors } from '../../utils'

const Budgeting = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" hidden={false} backgroundColor={colors._blue} translucent={false} />
      <HeaderPage title="Budgeting" icon="Campaign" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors._white
  }
})

export default Budgeting
