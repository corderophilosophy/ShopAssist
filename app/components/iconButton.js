import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles as s } from 'react-native-style-tachyons';

function IconButton({ onPress, iconContainerStyle, iconStyle, iconColor, iconSize, iconName }) {
  return (
    <View style={iconContainerStyle}>
      <TouchableHighlight onPress={onPress}>
        <Icon style={iconStyle} name={iconName} size={iconSize} color={iconColor} />
      </TouchableHighlight>
    </View>
  );
}

export default IconButton;
