import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useContext} from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';
const NewPassword = ({navigation}) => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // const navigation = useNavigation();
  const onSubmitPressed = () => {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,32}$/;
    const outputFields = {};
    if (code === '') {
      outputFields.code = 'Please Enter The Verification Code!';
    }
    if (newPassword === '' || !passwordRegex.test(newPassword)) {
      outputFields.newPassword = 'Please Enter Min.8 and Max.32 Characters!';
    }
    if (newPassword !== '' || confirmPassword) {
      outputFields.confirmPassword = 'Password Not Matched!';
    }
    //navigation.navigate('Home');
    setError(outputFields);
  };

  const onSignInPressed = () => {
    console.log('onSignInPressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          value={code}
          setValue={setCode}
          placeholder="Enter your code"
          iconName="lock"
          error={error.code}
        />
        <CustomInput
          value={newPassword}
          setValue={setNewPassword}
          placeholder="Enter your new password"
          iconName="lock"
          error={error.newPassword}
        />
        <CustomInput
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Confirm Password"
          iconName="lock"
          error={error.confirmPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

        <CustomButton text="Back to sign in" onPress={onSignInPressed} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#dc143c',
    margin: 10,
    marginBottom: 30,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  Link: {
    color: '#FDB075',
  },
});

export default NewPassword;
