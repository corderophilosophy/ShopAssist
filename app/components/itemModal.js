import React from "react";
import {
  Picker,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import { styles as s } from "react-native-style-tachyons";
import IconButton from "./iconButton";

function ItemModal(
  {
    addItem,
    stores,
    handlePickerValueChange,
    pickerSelectedValue,
    modalVisible,
    clearInput,
    setModalVisible,
    inputText,
    handleTextChanged
  }
) {
  return (
    <View>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={[s.flx_i, s.jcc, s.pa2, (modalVisible) ? s.bg_black_50 : s.bg_white_90]}>
          <View style={[s.aic, s.bg_yellow, s.br3, (modalVisible) ? [s.pa2, s.bg_blue] : s.bg_pink ]}>
            <View style={[s.ass]}>
              <Text style={[s.f6, s.tc]}>Add or Select an Item:</Text>
              <TextInput
                onChangeText={text => handleTextChanged(text)}
                style={[s.pv2, s.f6]}
                placeholder="Add Item.."
                placeholderTextColor="#333333dd"
                value={inputText}
                onFocus={() => clearInput('item')}
                underlineColorAndroid="transparent"
                />
              <Picker
                enabled={false}
                onValueChange={val => handlePickerValueChange(val)}
                selectedValue={pickerSelectedValue}
                style={[s.br3]}
                >
                {stores
                  ? stores.map(s => <Picker.Item key={s.store} label={s.store} value={s.val} />)
                  : <Picker.Item
                  style={[s.tc, s.pl2]}
                  label="no_stores_provided"
                  value="no_stores_provided"
                  />}
                </Picker>
            </View>
            <View style={[s.flx_row, s.jcc]}>
              <IconButton
                onPress={() => addItem()}
                iconColor="papayawhip"
                iconContainerStyle={[s.mv1, s.mr4]}
                iconStyle={[s.bg_pink, s.pa2, s.br3]}
                iconSize={22}
                iconName="check"
                />
              <IconButton
                onPress={() => setModalVisible(false)}
                iconColor="papayawhip"
                iconContainerStyle={[s.mv1, s.ml4]}
                iconStyle={[s.bg_pink, s.pa2, s.br3]}
                iconSize={22}
                iconName="close"
                />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ItemModal;
