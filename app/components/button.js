import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { styles as s } from 'react-native-style-tachyons';

const Button = ({
  disabled,
  onPress,
  containerStyle,
  buttonTextStyle,
  label}) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}>
    <View style={containerStyle}>
      <Text style={buttonTextStyle}>
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

Button.PropTypes = {
  onPress: React.PropTypes.func.isRequired,
  containerStyle: React.PropTypes.array,
  buttonTextStyle: React.PropTypes.array,
  label: React.PropTypes.string.isRequired
};

const Icon = (props) => (
  <TouchableNativeFeedback
    onPress={props.onPress}
    background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={props.iconContainerStyle}>
        <FontAwesome
          size={props.iconSize}
          color={props.color}
          name={props.name}
        />
      </View>
    </TouchableNativeFeedback>
);

Icon.PropTypes = {
  onPress: React.PropTypes.func.isRequired,
  iconContainerStyle: React.PropTypes.array,
  iconSize: React.PropTypes.number.isRequired,
  color: React.PropTypes.string,
  name: React.PropTypes.string.isRequired
};

module.exports = { Button, Icon };
