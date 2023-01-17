import React, {useState, useContext} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {COLOR} from '../utility/Theme';
import {AuthContext} from '../navigation/AuthProvider';

const ModalPopup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {logout, user} = useContext(AuthContext);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Signout from fundoo notes!</Text>
            <Text style={styles.text}>{user.email}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => logout()}>
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>B</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 25,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 10,
  },
  buttonOpen: {
    backgroundColor: COLOR.PRIMARY_COLOR,
    width: 32,
    height: 32,
    alignItems: 'center',
    borderRadius: 60,
    justifyContent: 'center',
    marginBottom: 30,
    paddingLeft: 6,
    paddingTop: 6,
  },
  buttonClose: {
    backgroundColor: COLOR.THIRD_COLOR,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:20,
  },
});

export default ModalPopup;
