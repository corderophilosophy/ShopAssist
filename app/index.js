import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import ActionButton from "./components/actionButton";
import { styles as s } from "react-native-style-tachyons";

import Header from "./components/header";
import ItemModal from "./components/itemModal";
import StoreModal from "./components/storeModal";

class NavRoot extends Component {
  constructor() {
    super();
    this.state = {
      authStatus: null,
      user: {
        items: null,
        stores: null
      },
      itemsModalVisibility: false,
      storeModalVisibility: false,
      itemInputText: '',
      pickerSelectedValue: '',
      storeInputText: '',
    };
  }
  toggleItemModal(visible) {
    this.setState({
      itemsModalVisibility: visible
    });
  }
  toggleStoreModal(visible) {
    this.setState({
      storeModalVisibility: visible
    });
  }
  handleItemTextChanged(text) {
    this.setState({
      itemInputText: text,
    });
  }
  handleStoreTextChanged(text) {
    this.setState({
      storeInputText: text,
    })
  }
  clearInput(target) {
    this.setState({
      [`${target}InputText`]: '',
    });
  }
  handlePickerValueChange(val) {
    this.setState({
      pickerSelectedValue: val
    });
  }
  addItem() {
    console.log('item added (but not really, you know?)');
  }
  addStore() {
    console.log('store added (but not really, you know?)');
  }
  render() {
    return (
      <View style={[s.h6, s.aic, s.jcc]}>
        <Header label="Shopping List" />
        <StatusBar hidden={true} />
        <ActionButton
          toggleItemModal={this.toggleItemModal.bind(this)}
          toggleStoreModal={this.toggleStoreModal.bind(this)}
        />
        <ItemModal
          modalVisible={this.state.itemsModalVisibility}
          setModalVisible={this.toggleItemModal.bind(this)}
          inputText={this.state.itemInputText}
          clearInput={this.clearInput.bind(this)}
          handleItemTextChanged={this.handleItemTextChanged.bind(this)}
          stores={this.state.user.stores}
          items={this.state.user.items}
          addItem={this.addItem}
        />
        <StoreModal
          modalVisible={this.state.storeModalVisibility}
          setModalVisible={this.toggleStoreModal.bind(this)}
          inputText={this.state.storeInputText}
          handleStoreTextChanged={this.handleStoreTextChanged.bind(this)}
          stores={this.state.user.stores}
          addStore={this.addStore}
        />
      </View>
    );
  }
}

export default NavRoot;
