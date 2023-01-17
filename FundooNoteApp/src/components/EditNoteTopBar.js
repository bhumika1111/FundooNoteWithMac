import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RemainderBottomPopup from './RemainderBottomPopup';
import moment from 'moment';
const EditNoteTopBar = ({

  onBackPress,
  pinData,
  archieveData,
  deleteData,
  onPinHandle,
  onDeleteHandle,
  onArchieveHandle,
  text,
  setText,
  date,
  setDate,
  
}) => {

  const [mode, setMode] = useState('date')
  const [showTime, setShowTime] = useState(false)
  const [showDate, setshowDate] = useState(false)
  const [time, setTime] = useState(new Date())

  const refRBSheet = useRef()
  const [isVisible, setIsVisible] = useState(false)
  // let tomorrowMorning = moment().add(1, 'days').hours(8).minutes(0);
  // console.log("tomorrow",tomorrowMorning);
   
  const changeModalVisible = bool => {
    setIsVisible(bool)
  }
  const tomorrowMorning = ()=>{
  let newDate = moment().add(1, 'days').hours(8).minutes(0).format();
  setDate(newDate)
}
const tomorrowEvening = ()=>{
  let newDate = moment().add(1, 'days').hours(18).minutes(0).format('hh:mm a');
  setDate(newDate)
}
const tuesDayMorning = ()=>{
  let newDate = moment().add(5, 'days').hours(8).minutes(0).format('LLLL');
  setDate(newDate)
}
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => onBackPress(pinData, deleteData, archieveData)}>
        <Ionicons name="ios-arrow-back-outline" size={26} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPinHandle()} style={styles.pushPin}>
        <AntDesign name={pinData ? 'pushpin' : 'pushpino'} size={26} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.bellIcon} onPress={() => refRBSheet.current.open()
      }>
        <Ionicons name="notifications-outline" size={26} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{ wrapper: { backgroundColor: 'transparent', }, draggableIcon: { backgroundColor: '#000', }, }}>
        <View>
          <TouchableOpacity style={styles.iconView} onPress={() =>{tomorrowMorning()
          }}>
            <MaterialCommunityIcons
              name="alarm"
              color={'black'}
              size={23}
              
            />
            <Text style={styles.txt}>Tomorrow Morning</Text>
            <Text style={styles.timetxt}>8:00 am</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconView} onPress={()=>{tomorrowEvening()}} >
            <MaterialCommunityIcons
              name="alarm"
              color={'black'}
              size={23}
            
            />
            <Text style={styles.txt}>Tomorrow evening</Text>
            <Text style={styles.timetxt}>6.00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconView} onPress={()=>{tuesDayMorning()}}>
            <MaterialCommunityIcons
              name="alarm"
              color={'black'}
              size={23}
            
            />
            <Text style={styles.txt}>Tuesday morning</Text>
            <Text style={styles.timetxt}>Tue 08.00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconView}
            onPress={() => changeModalVisible(true)}>
            <MaterialCommunityIcons
              name="alarm"
              color={'black'}
              size={23}
            
            />
            <Text style={styles.txt}>Pick a date & time</Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            animationType="fade"
            visible={isVisible}
            onRequestClose={() => changeModalVisible(false)}>
            <RemainderBottomPopup changeModalVisible={changeModalVisible} text={text} setText={setText} date={date} setDate={setDate} />
          </Modal>
        </View>
      </RBSheet>
      <TouchableOpacity
        onPress={() => onArchieveHandle()}
        style={styles.bellIcon}>
        <Ionicons name="archive-outline" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default EditNoteTopBar;
const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    paddingLeft: 15,
    marginTop: 55,

  },
  bellIcon: {
    marginLeft: 19,
    padding: 6,
  },
  pushPin: {
    marginLeft: 220,
    padding: 6,
    transform: [{ rotate: '45deg' }],
  },
  iconView: {
    borderRadius: 30,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    paddingTop: 5,

  },
  txt: {
    color: 'black',
    fontSize: 20,
    marginLeft: 15,
  },
  timetxt: {
    fontSize: 18,
    color: 'black',
    marginLeft: 'auto',
  },
});
