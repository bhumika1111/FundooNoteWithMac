import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../utility/Theme';
//import Profile from '../components/Profile';
import ModalPopup from './ModalPopUp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {useSelector, useDispatch} from 'react-redux';
const TopBar = ({menuPress, navigation}) => {
  const toggle= useSelector( state => state.toggle);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 20}}>
        <TouchableOpacity
          style={{
            color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
          }}
          onPress={menuPress}>
          <Ionicons name="reorder-three-outline" size={35} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{paddingLeft: 35, paddingTop: 2}}
        onPress={() => navigation.navigate('Search')}>
        <Text style={styles.title}>Search your notes</Text>
      </TouchableOpacity>

      <View
        style={{
          paddingLeft: 65,
          paddingTop: 5,
        }}>
        <TouchableOpacity
          style={{
            color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
          }}
          onPress={() => dispatch({type: 'TOGGLE'})}>
          <MaterialCommunityIcons
            name={toggle ? 'view-grid-outline' : 'view-agenda-outline'}
            size={28}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingLeft: 10, marginBottom: -20}}>
        <TouchableOpacity
          style={{
            marginRight: 15,
            color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
            paddingTop: 12,
            paddingLeft: 9,
          }}
          onPress={() => {}}>
          <ModalPopup />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    height: 57,
    paddingTop: 10,
    paddingRight: 5,

    flexDirection: 'row',
    backgroundColor: COLOR.THIRD_COLOR,
    borderRadius: 35,
    // padding: 60,
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    width: 170,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
    paddingVertical: 2,
    paddingLeft: -30,
  },
  profilelogo: {
    marginLeft: 25,
  },
});
export default TopBar;
