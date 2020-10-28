import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Display = ({display}) => (
  <View style={styles.container}>
    <Text style={styles.display}>{display}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    width: 360
  },
  display: {
    fontSize: 80,
    color: "white",
    textAlign:"right"
  },
})
