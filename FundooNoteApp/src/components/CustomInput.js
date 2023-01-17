import {View, TextInput, StyleSheet, Text} from 'react-native';
import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLOR} from '../utility/Theme';
const CustomInput = ({
  setValue,
  placeholder,
  secureTextEntry,
  iconName,
  value,
  error,
  onBlur,
}) => {
  return (
    <View style={styles.container}>
      {/* <Text>
      <FontAwesome
        name={iconName}
        color={COLOR.BACKGROUND_COLOR}
        size={14}
        style={{paddingLeft:5, margin: 5,padding:60}}
      />
      </Text> */}

      <TextInput
        value={value}
        onChangeText={setValue}
        onBlur={onBlur}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />

      {error && (
        <View>
          <Text
            style={{
              color: COLOR.ERROR_COLOR,
              paddingBottom: 5,
            }}>
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: 'black',

    height: 40,
    width: 310,
    borderWidth: 1,
    //paddingBottom:-20,
    marginBottom: 23,
    marginVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  input: {
    paddingLeft: 15,
  },
});
export default CustomInput;
