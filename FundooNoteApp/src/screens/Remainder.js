import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../utility/Theme';
//import Profile from '../components/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Remainder = ({menuPress}) => {
    const navigation = useNavigation()
  const toggle= useSelector( state => state.toggle);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 20}}>
        <TouchableOpacity
          style={{
            color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
          }}
          onPress={()=>{navigation.openDrawer()}}>
          <Ionicons name="reorder-three-outline" size={35} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{paddingLeft: 35, paddingTop: 2}}
        onPress={() => navigation.navigate('Search')}>
        <Text style={styles.title}>Remainder</Text>
      </TouchableOpacity>

      <View
        style={{
          paddingLeft: 65,
          paddingTop: 5,
        }}>
        <TouchableOpacity
          style={{
            color: COLOR.DASHBOARDSCREEN_TOP_TEXT,paddingLeft:50,
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
          
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
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
    paddingLeft: 50,
  },
  profilelogo: {
    marginLeft: 25,
  },
});
export default Remainder;
