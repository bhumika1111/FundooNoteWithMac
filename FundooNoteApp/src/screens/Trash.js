import React, {useEffect, useContext, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import TrashTopBar from '../components/TrashTopBar';
import Notecard from '../components/Notecard';
import {AuthContext} from '../navigation/AuthProvider';
import {fetchingNote} from '../services/FirebaseNoteService';

const Trash = ({menuPress, navigation}) => {
  const {user} = useContext(AuthContext);
  const [noteData, setNoteData] = useState([]);

  const getData = async () => {
    const notes = await fetchingNote(user.uid);
    let deleteData = [];
    notes.forEach(result => {
      if (result.deleteData) {
        deleteData.push(result);
      }
    });

    setNoteData(deleteData);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.view}>
      <TrashTopBar
        menuPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={styles.list}>
        <FlatList
          data={noteData}
          renderItem={({item}) => (
            <TouchableOpacity onPress={{}}>
              <Notecard {...item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.noteId}
          numColumns={2}
          key={item => item.noteId}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  list: {
    flex: 8,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Trash;
