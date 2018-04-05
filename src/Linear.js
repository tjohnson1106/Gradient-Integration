import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo";

import ToggleButton from "./ToggleButton";

class Linear extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["blue", "tomato"]}
          start={[0.1, 0.4]}
          end={[0.5, 0.4]}
          style={{ width: 100, height: 100 }}
        />
        <ToggleButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default Linear;
