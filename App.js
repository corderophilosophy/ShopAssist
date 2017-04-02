import React from "react";
import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import NativeTachyons from "react-native-style-tachyons";

import config from './.config/api';
import * as firebase from 'firebase';
import NavRoot from "./app/index";

import SignIn from './app/components/signIn';

const { width } = Dimensions.get("window");

NativeTachyons.build(
  {
    rem: width > 340 ? 22 : 20,
    colors: {
      palette: {
        yellow: "#ffed37",
        blue: "#357edd",
        pink: "#d62288",
        black: "#000000",
        white: "#FFFFFF",
      }
    }
  },
  StyleSheet
);

import { styles as s } from "react-native-style-tachyons";

export default class App extends React.Component {
  render() {
    return (
      <View style={[s.flx_i, s.jcc]}>
        <StatusBar hidden={true}/>
        <SignIn />
      </View>
    );
  }
}
