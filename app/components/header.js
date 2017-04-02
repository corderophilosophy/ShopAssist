import React from "react";
import { View, Text } from "react-native";
import { styles as s } from "react-native-style-tachyons";

function Header(props) {
  return (
    <View style={[s.bg_yellow, s.w6, s.absolute, s.top_0, {elevation: 2}]}>
      <Text style={[s.tc, s.f6, s.mv3, s.pink]}>
       {props.label}
      </Text>
    </View>
  );
}

export default Header;
