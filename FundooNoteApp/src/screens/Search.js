import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {fetchingNote} from '../services/FirebaseNoteService';
import {COLOR} from '../utility/Theme';
import {AuthContext} from '../navigation/AuthProvider';
const Search = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [searchData, setSearchData] = useState([]);
  const [result, setResult] = useState('');

  const getData = async () => {
    const noteData = await fetchingNote(user.uid);

    setSearchData(noteData);
    return noteData;
  };

  const SearchNotes = text => {
    setResult(text);
    const array = searchData.filter(
      data =>
        (text && data.title.toLowerCase().includes(text.toLowerCase())) ||
        (text && data.note.toLowerCase().includes(text.toLowerCase())),
    );
    setSearchData(array);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="arrow-back-outline" size={30} color={'grey'} />
        </TouchableOpacity>

        <TextInput
          style={styles.textBox}
          value={result}
          placeholder="Search Your Note"
          onChangeText={SearchNotes}
        />
      </View>

      <FlatList
        data={searchData}
        numColumns={1}
        keyExtractor={item => {
          return item.noteId;
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.notesTag}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.notes}>{item.note}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    marginTop:40,
  },
  view: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    marginRight: 28,
  },
  textBox: {
    fontSize: 20,
    width: '90%',
    height: 55,
    margin: 10,
    borderRadius: 20,
    backgroundColor: COLOR.THIRD_COLOR,
    paddingLeft: 45,
  },
  notesTag: {
    borderWidth: 5,
    borderColor: COLOR.THIRD_COLOR,
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  notes: {
    fontSize: 18,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
    paddingLeft: 5,
  },
});
