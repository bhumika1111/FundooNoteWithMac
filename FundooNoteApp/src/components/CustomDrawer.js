import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { COLOR } from '../utility/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../navigation/AuthProvider';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { fetchinglabelData } from '../services/FirebaseLabelServices';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
//import CheckBoxCard from './Labels/CheckBoxCard';
//import LabelDrawerScreen from '../screens/LabelDrawerScreen';
import { useDispatch, useSelector } from 'react-redux';
const CustomDrawer = ({ props, navigation }) => {
  const { user } = useContext(AuthContext);
  //const [labelData, setLabelData] = useState([])
  const labels = useSelector(state=>state.labels)
  const dispatch = useDispatch()
  const userId = user.uid;
 // console.log("###labeldata drawer", labelData)
 
 const getData = useCallback(async () => {
    let result = await fetchinglabelData(user.uid);
    dispatch({type: 'GET_LABELS',payload:result});
  },[])
    //setLabelData(result)

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 30,
              color: COLOR.PRIMARY_COLOR,
              fontFamily: 'arial',
              fontWeight: 'bold',
              paddingLeft: 20,
            }}>
            FundooNotes
          </Text>
        </View>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('Notes');
          }}>
          <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 22 }}>
            <MaterialCommunityIcons
              name="lightbulb-outline"
              size={24}
              color={'gray'}
            />


            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
              }}>
              Notes
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Remainder');
          }}>
          <View style={{ flexDirection: 'row', paddingTop: 27, paddingLeft: 22 }}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={'gray'}
            />
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
                marginBottom: 20,
              }}>
              Remainder
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.labelIcon}>Labels</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Create new label');
              }}>

              <Text style={styles.edit}>Edit</Text>
             
            </TouchableOpacity>
              </View>
          <View style={styles.labels}>

            {labels?.map(item => {
              return (
                <TouchableOpacity key={item.labelId} onPress={()=>navigation.navigate('LabelDrawerTop',{...item})
                }>
                  <View 
                    style={styles.header}>
                    <Icon1 size={22}
                      style={styles.icon}
                      name="label-outline"
                      color={"black"} />
                    <Text style={styles.text1}> {item.label}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}


          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Create new label');
            }}>
            <View style={{ flexDirection: 'row', paddingTop: 27, paddingLeft: 22 }}>
              <Entypo name="plus" size={24} color={'gray'} />
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                  fontFamily: 'arial',
                  paddingLeft: 17,
                  marginBottom: 20,
                }}>
                CreateNewLabel
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Archieve');
          }}>
          <View style={{ flexDirection: 'row', paddingTop: 27, paddingLeft: 22 }}>
            <Ionicons name="archive-outline" size={24} color={'gray'} />
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
              }}>
              Archieve
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Trash');
          }}>
          <View style={{ flexDirection: 'row', paddingTop: 27, paddingLeft: 22 }}>
            <AntDesign name="delete" size={24} color={'gray'} />
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
              }}>
              Trash
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <View style={{ flexDirection: 'row', paddingTop: 27, paddingLeft: 22 }}>
            <Ionicons name="settings-outline" size={24} color={'gray'} />
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'arial',
                paddingLeft: 17,
              }}>
              Setting
            </Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomDrawer;
const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'blue',
    paddingHorizontal:5,
    
    
  },
  icon: {
    flexDirection: 'column',
    // marginTop: 10,
    //  alignContent: 'flex-start',
    // alignItems: 'flex-start',
    // justifyContent: 'space-between',
    // margin: 5,
    // padding: 5,
    // paddingHorizontal: 15,
    // paddingVertical: 9,
  },
  edit: {
    paddingLeft: 150,
    marginTop: 20,
    fontSize: 17,
    

  },
  labelIcon: {
    flexDirection: 'row',
    fontSize: 17,
    marginLeft: 20,
   // marginBottom: 8,
    marginTop:20,
  },


  text1: {
    width: 100,
    color: 'black',
    //marginRight: 180,
    //marginTop: 15,
    size: 20,
    fontSize: 18,
    marginLeft: 20,

  },
  header: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 15,
  }



});
