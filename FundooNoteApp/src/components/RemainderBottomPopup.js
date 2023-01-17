import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Modal} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {Clock} from 'react-native-reanimated';

const RemainderBottomPopup = ({
  changeModalVisible,
  setText,
  date,
  setDate,
  text,
}) => {
  const todaysDate = new Date();

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (selectedDate, tDate) => {
    console.log('::::', tDate);
    const currentDate = selectedDate.nativeEvent.timestamp;

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    let fTime = '(' + tempDate.getHours() + ' : ' + tempDate.getMinutes() + ')';
    // console.log(fDate + '(' + fTime + ')');
    setText(fDate + ' ' + fTime);
    setShow(false);
    setDate(tempDate);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
            display={'clock'}
          />
        )}

        <View style={styles.txtView}>
          <Text style={styles.txt}>Add remainder</Text>
          <TouchableOpacity onPress={() => showMode('date')}>
            <Text style={{fontSize: 16, color: 'black'}}>
              {moment(Date.now()).format('LLL')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showMode('time')}>
            <Text style={{fontSize: 30, color: 'black', paddingLeft: 50}}>
              Select time
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showMode('date')}>
            <Text style={{fontSize: 30, color: 'black', paddingLeft: 50}}>
              Select Date
            </Text>
          </TouchableOpacity>
          {/* <Text style={{ fontSize: 16, color: 'black' }} >{text}</Text> */}
          <View style={{flexDirection: 'row', paddingTop: 40}}>
            <TouchableOpacity onPress={() => changeModalVisible(false)}>
              <Text style={styles.buttoncancle}>Cancle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeModalVisible(false)}>
              <Text style={styles.buttonsave}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyConntent: 'center',
    marginTop: 50,
  },
  modal: {
    height: 350,
    width: 370,
    marginTop: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 20,
    padding: 10,
    borderRadius: 30,
  },
  txt: {
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  txtView: {
    flex: 1,
    alignItems: 'flex-start',
  },
  buttoncancle: {
    borderRadius: 6,
    // backgroundColor:'blue',
    // borderWidth:3,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 30,
  },
  buttonsave: {
    marginLeft: 130,
    height: 50,
    width: 70,
    borderRadius: 20,
    // backgroundColor:'blue',
    // borderWidth:3,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
  },
});
export default RemainderBottomPopup;
