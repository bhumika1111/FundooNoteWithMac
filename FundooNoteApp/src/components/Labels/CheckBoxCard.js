import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Checkbox } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'


const CheckBoxCard = ({ data, onCheck, selection }) => {
  const labelValue = data.labelId + '|' + data.label;
  console.log('label value is there', labelValue);

  return (
    <View style={styles.labels}>
      <Icon1 size={22}
        style={styles.icon}
        name="label-outline"
        color="black" />
      <Text style={styles.text}>{data.label}</Text>
      <Checkbox
        color='blue'
        status={selection.includes(data) ? 'checked' : 'unchecked'}
        onPress={() => onCheck(data)} />
    </View>
  )
}
export default CheckBoxCard;

const styles = StyleSheet.create({
  labels: {
    flexDirection: 'row',
    marginTop: 10,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  icon: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 9,
    flexDirection:'row',
  },
  text: {
    width: 100,
    color: 'black',
    marginRight: 180,
    marginTop: 15,
    size: 20,
  },
  container: {

  },
});