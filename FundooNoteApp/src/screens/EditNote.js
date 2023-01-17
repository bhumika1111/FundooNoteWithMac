import {View, StyleSheet, TextInput, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import EditNoteTopBar from '../components/EditNoteTopBar';
import EditNoteBottomBar from '../components/EditNoteBottomBar';
import Notification, {setNotification} from '../services/Notification';
import {addNote, updateNote, deleteNote} from '../services/FirebaseNoteService';
import {AuthContext} from '../navigation/AuthProvider';
import ArchieveTopBar from '../components/ArchieveTopBar';
import {Chip} from 'react-native-paper';
import {COLOR} from '../utility/Theme';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
const EditNote = ({navigation, route}) => {
  const noteData = route.params?.noteData;
  const [currentTime, setCurrentTime] = useState('');
  const [date, setDate] = useState(noteData?.reminderData || '');
  const [deleteData, setdeleteData] = useState(noteData?.isDeleted || false);
  const [title, setTitle] = useState(noteData?.title || '');
  const [note, setNote] = useState(noteData?.note || '');
  const [pinData, setPinData] = useState(noteData?.pinData || false);
  const labelData = route.params?.labelData || [];
  const [text, setText] = useState('');
  const [showdate, setShowdate] = useState(false);
  const [archieveData, setIsarchieveData] = useState(
    noteData?.archieveData || false,
  );
  const [reminderData, setReminderData] = useState(
    noteData?.reminderData || '',
  );
  const {user} = useContext(AuthContext);

  useEffect(() => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    setCurrentTime(hours + ' ' + ':' + ' ' + minutes);
  }, []);
  const onBackPress = async () => {
    const userId = user.uid;

    if (noteData?.noteId) {
      await updateNote(
        title,
        note,
        noteData.noteId,
        userId,
        pinData,
        archieveData,
        deleteData,
        date,
        labelData,
      );
    } else {
      await addNote(
        title,
        note,
        userId,
        pinData,
        archieveData,
        deleteData,
        date,
        labelData,
      );
    }
    setNotification(date, title, note);
    navigation.goBack();
  };
  const onDeleteHandle = async () => {
    const userId = user.uid;
    await updateNote(
      title,
      note,
      noteData.noteId,
      userId,
      pinData,
      archieveData,
      deleteData,
      reminderData,
      labelData,
    );
  };
  const onPinHandle = () => {
    setPinData(!pinData);
  };
  const onArchieveHandle = () => {
    setIsarchieveData(!archieveData);
  };
  return (
    <View style={styles.container}>
      <View>
        <EditNoteTopBar
          onBackPress={onBackPress}
          pinData={pinData}
          archieveData={archieveData}
          deleteData={deleteData}
          onPinHandle={onPinHandle}
          onDeleteHandle={onDeleteHandle}
          onArchieveHandle={onArchieveHandle}
          text={text}
          setText={setText}
          date={date}
          setDate={setDate}
        />
      </View>
      <View style={styles.notestyle}>
        <TextInput
          style={styles.titleField}
          placeholder="Title"
          value={title}
          onChangeText={content => setTitle(content)}
        />
        <TextInput
          style={styles.noteField}
          placeholder="Note"
          multiline={true}
          value={note}
          onChangeText={content => setNote(content)}
        />
        <View>
          <Text style={{color: 'black', fontSize: 20, paddingLeft: 20}}>
            {moment(date).format('LLLL')}{' '}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {labelData.map(labels => (
            <Chip style={styles.chip} key={labels.labelId}>
              {labels.label}
            </Chip>
          ))}
        </View>
        <EditNoteBottomBar
          deleteData={deleteData}
          setDeleteData={setdeleteData}
          noteData={noteData}
          navigation={navigation}
          currentTime={currentTime}
        />
      </View>
    </View>
  );
};

export default EditNote;
const styles = StyleSheet.create({
  titleField: {
    padding: 15,
    fontSize: 24,
  },
  noteField: {
    padding: 15,
    fontSize: 21,
    marginTop: -2,
    marginRight: 11,
    marginLeft: 3,
  },
  notestyle: {
    paddingTop: 35,
    marginLeft: 12,
  },
  chip: {
    color: 'black',
    borderWidth: 2,
    margin: 3,
    borderRadius: 1,
    paddingBottom: 10,
  },
  container: {
    // flex:1,
    // backgroundColor:COLOR.THIRD_COLOR,
  },
});
