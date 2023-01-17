import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useContext} from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
//import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';
const ForgotPassword = () => {
  console.log('forgot password', forgotpassword);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  //const navigation = useNavigation();
  const {forgotpassword} = useContext(AuthContext);

  const onSendPressed = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const outputFields = {};

    if (email === '' || !emailRegex.test(email)) {
      outputFields.email = 'Please Enter A Valid Email!';
      setError(outputFields);
      return;
    }
    forgotpassword(email);
  };

  const onSignInPressed = () => {
    console.log('onSignInPressed');
    // navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          value={email}
          setValue={setEmail}
          placeholder="Email"
          iconName="envelope-square"
          error={error.email}
        />

        <CustomButton text="Send" onPress={() => onSendPressed()} />

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
    paddingTop: 15,
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

export default ForgotPassword;
