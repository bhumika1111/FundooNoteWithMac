import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utility/Theme';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../navigation/AuthProvider';
import {addLabel, fetchinglabelData} from '../services/FirebaseLabelServices';
import LabelCard from '../components/Labels/LabelCard';

const CreateNewLabel = () => {
  const {user} = useContext(AuthContext);
  const navigation = useNavigation();
  const [label, setLabel] = useState('');
  const [cross, setCross] = useState(false);
  const [save, setsave] = useState(false);
  const [labelData, setLabelData] = useState([]);
  const userId = user.uid;

  const onSavePress = async() => {
    if (label !== '') {
      
    await  addLabel(userId, label);
    getData();
      setLabel('');
    }
  };
  const getData = async () => {
    const result = await fetchinglabelData(user.uid);
    setLabelData(result);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.arrow}>
        <TouchableOpacity>
        <Ionicons
          name="ios-arrow-back-outline"
          size={26}
          color={'black'}
          onPress={() => navigation.goBack()}
        />
        </TouchableOpacity>

        <View>
          <Text style={styles.text}>Edit Labels</Text>
        </View>
      </View>
      <View>
        <View
          style={[styles.crossIcon, {borderColor: cross ? 'gray' : COLOR.THIRD_COLOR}]}>
          {cross ? (
            <Entypo
              name="cross"
              size={27}
              color="black"
              onPress={() => {
                setCross(!cross);
                setsave(!save);
                setLabel('');
              }}
            />
          ) : (
            <Feather
              name="plus"
              size={26}
              color="black"
              onPress={() => {
                setCross(!cross);
                setsave(!save);
              }}
            />
          )}

          <TextInput
            style={styles.inputtext}
            placeholder="Create new label"
            value={label}
            onChangeText={content => setLabel(content)}
          />
          <View>
            {save ? (
            <MaterialIcons
              style={styles.doneIcon}
              name="done"
              size={26}
              color="black"
              onPress={() => onSavePress()}
            />
            ):null}
          </View>
        </View>
      </View>
      <View>
     
        <FlatList
          data={labelData}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={{}}>
             
             <LabelCard {...item} />
             
            </TouchableOpacity>
          )}
          keyExtractor={item => item.labelId}
          key={item => item.labelId}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 20,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
  
  

    //alignItems: 'flex-start',
  },
  container: {
    paddingTop: 70,
    flex: 1,
    // paddingLeft: 20,
    backgroundColor: COLOR.THIRD_COLOR,
  },
  arrow: {
    marginLeft: 15,
    flexDirection: 'row',
    color: 'black',
  },
  crossIcon: {
    flexDirection: 'row',
    height: 55,
    width: '100%',
    // marginBottom: 5,
    padding: 2,
    boarderWidth: 2,
    marginTop: 25,
    borderColor: 'grey',
    alignItems: 'center',
    paddingLeft: 12,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  inputtext: {
    fontSize: 20,
    paddingLeft: 40,
  
    
  },
  doneIcon: {
    marginTop: 3,
    flex: 1,
    marginLeft: 160,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
      paddingTop:10,
      fontWeight:'bold',
      
  },
});

export default CreateNewLabel;
