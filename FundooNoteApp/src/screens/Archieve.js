import React, {useEffect, useContext, useState} from 'react';
import {View,StyleSheet, TouchableOpacity,FlatList} from 'react-native';
import ArchieveTopBar from '../components/ArchieveTopBar';
import Notecard from '../components/Notecard';
import { AuthContext } from '../navigation/AuthProvider';
import { fetchingNote } from '../services/FirebaseNoteService';


import {useSelector, useDispatch} from 'react-redux';
const Trash = ({menuPress, navigation}) => {
  const {user} = useContext(AuthContext);
  const [noteData, setNoteData] = useState([]);
  const toggle= useSelector(state => state.toggle);
  const dispatch = useDispatch();
  const getData = async () => {
    const notes = await fetchingNote(user.uid);
    let archieveData = [];
    notes.forEach(result => {
      if (result.archieveData) {
        archieveData.push(result);
      }
    });

    setNoteData(archieveData);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.view}>
      <ArchieveTopBar
        menuPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={styles.list}>
        <FlatList
          data={noteData}
          renderItem={({item}) => (
            <TouchableOpacity   onPress={() => dispatch({type: 'TOGGLE'})}>
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
    //backgroundColor: ,
    paddingTop:50,
    borderRadius:20,
  },
  list: {
    flex: 8,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Trash;
