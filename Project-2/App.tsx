/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <FlatCards/>
          <ElevatedCards/>
        </View>
      </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(200,200,200)"
  }
})

export default App