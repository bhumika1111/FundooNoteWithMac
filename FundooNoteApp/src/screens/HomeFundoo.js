import {
  View,
  TouchableOpacity,
  Text,
  SectionList,
  FlatList,
  StyleSheet,
  
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import {AuthContext} from '../navigation/AuthProvider';
import Notecard from '../components/Notecard';
import {fetchingNote} from '../services/FirebaseNoteService';
import {useSelector} from 'react-redux';

const HomeFundoo = ({navigation}) => {
  
  const {user} = useContext(AuthContext);

  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [noteData, setNoteData] = useState([]);
  const [layout,setLayout]=useState()
   const toggle = useSelector((state)=> state.toggle);
  const getData = async () => {
    const result = await fetchingNote(user.uid);
    let pinnedData = [];
    let otherData = [];
    result.forEach(text => {
      if (!text.archieveData && !text.deleteData && !text.pinData) {
        otherData.push(text);
      }
      if (!text.archieveData && !text.deleteData && text.pinData) {
        pinnedData.push(text);
      }
    });

    setPinnedNotes(pinnedData);
    setNoteData(otherData);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

   const changeLayout = () => {
     setLayout(!layout);
  };

  // eslint-disable-next-line no-shadow
  const sections = [
    {title: 'PINNED', data: [{list: pinnedNotes}]},
    {title: 'OTHERS', data: [{list: noteData}]},
  ];

  const renderSection = ({item}) => {
    return (
      <FlatList
        data={item.list}
        renderItem={({item}) => (
          <TouchableOpacity
            style={toggle ? styles.grid : styles.list}
            onPress={() => navigation.navigate('EditNote', {noteData:item})}>
            <Notecard {...item} layout={layout} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.noteId}
        numColumns={toggle ? 2 : 1}
        key={toggle ? 2 : 1}
      />
    );
  };

  const renderSectionHeader = ({section}) => {
    if (pinnedNotes?.length) {
      return (
        <View>
          <Text style={{color: 'black'}}>{section.title}</Text>
        </View>
      );
    }
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <TopBar
          menuPress={() => navigation.toggleDrawer()}
          navigation={navigation}
          toggle={toggle}
        />
      </View>
      <SectionList
        style={{flex: 1}}
        sections={sections}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSection}
      />

      <View style={{justifyContent: 'flex-end'}}>
        <BottomBar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    width: '50%',
  },
  list: {
    width: '100%',
  },
});
export default HomeFundoo;
