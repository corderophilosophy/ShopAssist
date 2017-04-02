import React from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import { styles as s } from "react-native-style-tachyons";
import IconButton from "./iconButton";

function StoreModal(
  {
    addStore,
    stores,
    modalVisible,
    clearInput,
    setModalVisible,
    inputText,
    handleStoreTextChanged
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
              <Text style={[s.f6, s.tc]}>Add a Store:</Text>
              <TextInput
                onChangeText={text => handleStoreTextChanged(text)}
                style={[s.pv2, s.f6]}
                placeholder="Add Store..."
                placeholderTextColor="#333333dd"
                value={inputText}
                underlineColorAndroid="transparent"
                />
            </View>
            <View style={[s.flx_row, s.jcc]}>
              <IconButton
                onPress={() => addStore()}
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

export default StoreModal;
