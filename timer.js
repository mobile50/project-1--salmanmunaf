import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Timer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Text>0</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
