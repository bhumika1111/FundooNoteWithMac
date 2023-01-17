import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import {COLOR} from '../utility/Theme';
import { deleteNote } from '../services/FirebaseNoteService';

const TrashTopBar = ({menuPress}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={menuPress}>
        <Icon name="menu" style={styles.icon} size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}> Trash </Text>
      <TouchableOpacity
        style={styles.gridicon}
        onPress={() => setModalVisible(true)}>
        <Icon2 name="dots-three-vertical" size={20} color="black" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbackground}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.text1}> Empty Trash </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    //  backgroundColor: COLOR.THIRD_COLOR,
    flexDirection: 'row',
    // marginTop: 20,
    alignContent: 'flex-start',
    // alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  modalcontainer: {
    flex: 1,
    //justifyContent: 'flex-start',
    //alignItems: 'flex-end',
    //alignContent: 'flex-end',
    width: 90,
    height: 15,
    padding: 10,
    marginLeft: 270,
  },
  text1: {
    color: 'gray',
    fontWeight: 'bold',
    alignContent: 'center',
    marginLeft: 10,
  },
  modalbackground: {
    flex: 0.1,
    backgroundColor: COLOR.THIRD_COLOR,
    justifyContent: 'space-around',
    borderRadius: 2,
  },
  icon: {
    marginLeft: 15,
    marginTop: 15,
    padding: 5,

    paddingVertical: 5,
  },
  text: {
    marginTop: 25,
    borderRadius: 5,
    fontSize: 20,
  },
  gridicon: {
    margin: 15,
    marginTop: 15,
    padding: 5,

    paddingVertical: 5,
  },
});

export default TrashTopBar;
