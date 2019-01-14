
import React from 'react';
import {vibrate} from './utils'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      minutes: 25,
      seconds: 0,
      break: false,
      running: false
    }
  }

  decrementTime = () => {
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      vibrate()
      if (this.state.break) {
        this.setState({
          minutes: 25,
          break: false
        })
      }
      else {
        this.setState({
          minutes: 5,
          break: true
        })
      }
    }
    else {
      if (this.state.seconds === 0) {
        this.setState(prevState => ({
          minutes: prevState.minutes - 1,
          seconds: 59
        }))
      }
      else {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1,
        }))
      }
    }
  }

  // componentDidMount() {
  //   this.timerID = setInterval(this.decrementTime, 1000)
  // }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  start = () => {
    this.timerID = setInterval(this.decrementTime, 1000)
    this.setState({
      running: true
    })
  }

  stop = () => {
    clearInterval(this.timerID);
    this.setState({
      running:false
    })
  }

  reset = () => {
    if (this.state.break) {
      this.setState({
        minutes: 5,
        seconds: 0,
      })
    }
    else {
      this.setState({
        minutes: 25,
        seconds: 0,
      })
    }
  }

  render() {
    let minutes
    let seconds
    if (this.state.minutes < 10) {
      minutes = "0" + this.state.minuteste
    }
    if (this.state.seconds < 10) {
      seconds = "0" + this.state.seconds
    }
    return (
      <View style={styles.container}>
        <Text style ={styles.time}>{minutes+":"+seconds}</Text>
        <Button title="Start" onPress={() => this.start()} />
        <Button title="Stop" onPress={() => this.stop()} />
        <Button title="Reset" onPress={() => this.reset()} />
      </View>
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
  time: {
    fontSize: 30
  }
});
