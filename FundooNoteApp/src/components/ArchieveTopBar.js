import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR} from '../utility/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
const ArchieveTopBar = ({menuPress, changeLayout, layout}) => {
  const navigation = useNavigation();
  const toggle= useSelector(state => state.toggle);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={menuPress}>
          <Feather
            name="menu"
            size={28}
            color={COLOR.DASHBOARDSCREEN_TOP_TEXT}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Text style={styles.text}>Archive</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchbar}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <FontAwsome
              name="search"
              size={20}
              color={COLOR.DASHBOARDSCREEN_TOP_TEXT}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity    onPress={() => dispatch({type: 'TOGGLE'})}>
            <MaterialCommunityIcons
              name={toggle   ?  'view-agenda-outline' : 'view-grid-outline' }
              size={28}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 8,
    marginLeft: 5,
    marginRight: 5,
    borderColor: 'black',
   // borderRadius: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR.THIRD_COLOR,
    borderRadius: 16,
    padding: 15,
  },
  text: {
    fontSize: 20,
    paddingLeft: 100,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
  },
  emailText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    paddingLeft: 5,
    paddingRight: 0,
  },
  searchbar: {
    paddingLeft: 110,
    marginTop: 5,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
  },
  grid: {
    paddingLeft: 30,
  },
});
export default ArchieveTopBar;
