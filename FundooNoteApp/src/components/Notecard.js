import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../utility/Theme';
import {Chip} from 'react-native-paper';

const Notecard = props => {
  if (props.pinData) {
    console.log('item is:', props);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>
        <Text style={styles.note}>{props.note}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {props.labelData?.map(labels => (
          <Chip style={styles.chip} key={labels.labelId}>
            {labels.label}
          </Chip>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    margin: 12,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: COLOR.THIRD_COLOR,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    marginBottom: 9,
    paddingBottom: 7,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 15,
    bottom: 10,
  },
  chip: {
    backgroundColor: COLOR.THIRD_COLOR,

    color: 'black',
    borderWidth: 2,
    margin: 3,
    borderRadius: 10,

    marginBottom: 10,
  },
});
export default Notecard;
