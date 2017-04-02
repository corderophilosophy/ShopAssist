import React, { Component } from "react";
import { View, TextInput, Text, Picker } from "react-native";
import { styles as s } from "react-native-style-tachyons";

import { Button } from "./button";
import {
  firebaseApp,
  GoogleProvider,
  TwitterProvider,
  FacebookProvider
} from "../utils/base";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      selectedProvider: GoogleProvider,
      providers: [
        { provider: GoogleProvider, label: "Google" },
        { provider: TwitterProvider, label: "Twitter" },
        { provider: FacebookProvider, label: "Facebook" }
      ]
    };
  }
  _handleLogin() {
    let provider = this.state.selectedProvider;
    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  }
  _handlePickerValueChange(value) {
    this.setState({
      selectedProvider: value
    });
  }
  render() {
    return (
      <View style={[s.flx_i, s.jcc, s.bg_black_80]}>
        <Text style={[s.tc, s.f6, s.white_90]}>Choose Auth Provider:</Text>
        <Picker
          style={[s.white, s.mh4]}
          selectedValue={this.state.selectedProvider}
          onValueChange={val => this._handlePickerValueChange(val)}
          >
          {this.state.providers.map(p => {
            return (
              <Picker.Item label={p.label} key={p.label} value={p.provider} />
            );
          })}
        </Picker>
        <Button
          disabled={!this.state.selectedProvider}
          containerStyle={[s.bg_blue, s.pa2, s.jcc, s.aic, s.br2, s.mh4, s.mt2]}
          onPress={this._handleLogin.bind(this)}
          buttonTextStyle={[s.b, s.f5, s.white]}
          label="Login"
        />
      </View>
    );
  }
}

export default SignIn;
