import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Modal} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EditNoteBottomBar = ({deleteData, setDeleteData,navigation,noteData,currentTime}) => {
  const [modalVisible, setModalVisible] = useState(false);
 

  return (
    <View style={styles.header}>
      <View style={styles.square}>
        <TouchableOpacity onPress={() => {ClosePopup()}}>
          <Feather name="plus-square" size={27} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => refRBSheet.current.open()} style={styles.board}>
        <MaterialCommunityIcons name="palette-outline" size={27} />
        
      </TouchableOpacity>
      <View style={styles.text}>
        <Text>Edited  {currentTime}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.dotIcon}>
        <Ionicons name="ellipsis-vertical" size={22} />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbackground}>
            <TouchableOpacity
              onPress={() => {
                setDeleteData(!deleteData);
                setModalVisible(!modalVisible);
                
              }}>
              <View style={{flexDirection: 'row'}}>
                <AntDesign name="delete" size={22}/>
                <Text style={styles.del}> Delete</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('LabelList',{noteData})
            setModalVisible(!modalVisible)}}>
            <View style={{flexDirection: 'row',paddingTop:20}}>
                <MaterialIcons name="label-outline" size={22}  />
                <Text style={styles.del}> Label</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditNoteBottomBar;
const styles = StyleSheet.create({
  header: {
    height: 90,
    flexDirection: 'row',
    paddingLeft: 30,
    marginTop: 570,
   //backgroundColor:'pink',
    paddingRight:30,
    paddingVertical:10,
    
  },
  dotIcon: {
    marginLeft: 110,
    paddingTop: 16,
  },
  board: {
    marginLeft: 25,
    padding: 7,
    paddingBottom: 13,
  },
  text: {
    marginLeft: 66,
    paddingTop: 14,
  },
  square: {
    paddingTop: 9,
   // alignItems: 'flex-end',
   // marginLeft:10,
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    //padding: 20,
   marginTop: 750,
   
  },
  modalbackground: {
    backgroundColor: '#e8cad0',
    flex: 1,

    padding: 10,
  
  },
  del: {
    paddingLeft: 10,
    fontSize: 20,
    alignContent: 'space-between',
    marginLeft: 10,
    
  },
  
});
