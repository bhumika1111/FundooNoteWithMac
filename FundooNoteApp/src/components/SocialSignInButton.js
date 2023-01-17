import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import React from 'react';
//import CustomButton from './CustomButton';

const SocialSignInButton = ({onPress, text, bgColor, fgColor}) => {
  // const onSignInGoogle = () => {
  //   console.log('Sign In With Google');
  //}
  return (
    <TouchableOpacity onPresss={onPress}>
      <View
        style={[
          StyleSheet.container,
          bgColor ? {backgroundColor: bgColor} : {},
        ]}
      />
      <Text style={[styles.textwrite, fgColor ? {color: fgColor} : {}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  textwrite: {
    fontWeight: 'bold',
  },
});
export default SocialSignInButton;
