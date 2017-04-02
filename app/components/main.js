import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles as s } from "react-native-style-tachyons";

import Header from "./header";

class Main extends Component {

  render() {
    return (
      <View style={[s.h6, s.aic, s.jcc]}>
        <Header label="Shopping List" />
      </View>
    );
  }
}

export default Main;
