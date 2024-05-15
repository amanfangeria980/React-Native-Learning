import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.redC]}>
          <Text> Red</Text>
        </View>
        <View style={[styles.card, styles.blueC]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.greenC]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  blueC: {
    backgroundColor: 'aqua',
  },
  greenC: {
    backgroundColor: 'green',
  },
  redC: {
    backgroundColor: '#EF5354',
  },
});
