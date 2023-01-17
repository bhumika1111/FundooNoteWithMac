import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const BottomThreeDotPopup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbackground}>
            <Text style={{colo: 'white'}}> Delete </Text>
            <Pressable
              style={{backgroundColor: 'black', margin: 30, borderRadius: 10}}
              onPress={() => {}}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default BottomThreeDotPopup;
const styles = StyleSheet.create({
  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 60,
    marginBottom: 350,
  },
  modalbackground: {
    backgroundColor: 'dimgray',
    flex: 0.75,
    padding: 40,
    borderRadius: 10,
  },
});
