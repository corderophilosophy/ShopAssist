import React from "react";
import { View, Text } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles as s } from "react-native-style-tachyons";

class AddButton extends React.Component {
  render() {
    const { toggleItemModal, toggleStoreModal } = this.props;
    return (
      <ActionButton buttonColor="#d62288" onLongPress={() => toggleItemModal(true)}>
        <ActionButton.Item
          buttonColor="#357edd"
          title="Add Item"
          onPress={() => toggleItemModal(true)}
        >
          <Icon name="cutlery" style={[s.f5]} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#ffed37"
          title="Add Store"
          onPress={() => toggleStoreModal(true)}
        >
          <Icon name="shopping-cart" style={[s.f5]} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

export default AddButton;
