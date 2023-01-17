import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utility/Theme';
export default class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {navigation} = this.props;
    console.log('navigate', this.props);
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.checkbox} onPress={() => {}}>
          <Ionicons name="md-checkbox-outline" size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.brush} onPress={() => {}}>
          <Ionicons name="md-brush-outline" size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.mic} onPress={() => {}}>
          <Ionicons name="ios-mic-outline" size={26} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.image} onPress={() => {}}>
          <FontAwesome name="image" size={25} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('EditNote',{object:'object'})}>
          <Ionicons name="add" size={50} color={COLOR.PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: COLOR.THIRD_COLOR,
    borderWidth: 5,
    borderColor: 'white',
    alignItems: 'center',
  },
  floatingButton: {
    backgroundColor: COLOR.THIRD_COLOR,
    position: 'absolute',
    bottom: 30,
    height: 70,
    width: 70,
    borderWidth: 8,
    right: 10,
    borderRadius: 20,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkbox: {
    marginLeft: 15,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
  },
  brush: {
    marginLeft: 15,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
  },
  mic: {
    marginLeft: 15,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
  },
  image: {
    marginLeft: 20,
    color: COLOR.DASHBOARDSCREEN_TOP_TEXT,
  },
});
