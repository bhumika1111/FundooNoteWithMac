import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {AuthContext} from '../navigation/AuthProvider';

const SignUp = ({navigation}) => {
  const {register} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState('');
  const onTermsOfUsePressed = () => {
    console.log('onTermsOfUsePressed');
  };
  const onPrivacyPressed = () => {
    console.log('onPrivacyPressed');
  };
  const onRegisterPressed = () => {
    console.log('onRegisterPressed');

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,32}$/;
    const outputFields = {};
    if (firstName === '') {
      outputFields.firstName = 'Please Enter The First Name!';
    }
    if (lastName === '' || firstName === '') {
      outputFields.lastName = 'Please Enter  The Last Name!';
    }
    if (
      email === '' ||
      !emailRegex.test(email) ||
      firstName === '' ||
      lastName === ''
    ) {
      outputFields.email = 'Please Enter Valid Email!';
    }
    if (
      password === '' ||
      !passwordRegex.test(password) ||
      email === '' ||
      firstName === '' ||
      lastName === ''
    ) {
      outputFields.password = 'Password should be min.8 and max. 32 character!';
    } else if (password !== passwordRepeat) {
      outputFields.passwordRepeat = 'Please! Enter The Correct Password';
    } else if (password === passwordRepeat) {
      register(email, password,firstName,lastName);
    }

    setError(outputFields);
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          value={firstName}
          setValue={setFirstName}
          placeholder="FirstName"
          iconName="user"
          error={error.firstName}
        />
        <CustomInput
          value={lastName}
          setValue={setLastName}
          placeholder="LastName"
          iconName="user"
          error={error.lastName}
        />
        <CustomInput
          value={email}
          setValue={setEmail}
          placeholder="Email"
          iconName="envelope-square"
          error={error.email}
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
          iconName="lock"
          error={error.password}
          secureTextEntry={true}
        />

        <CustomInput
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          placeholder="PasswordReapeat"
          iconName="lock"
          error={error.password}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={() => onRegisterPressed()} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.Link} onPress={onTermsOfUsePressed}>
            {' '}
            Terms of Use{' '}
          </Text>
          and{' '}
          <Text style={styles.Link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <CustomButton
          text="Have an account? Sign in"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#dc143c',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  Link: {
    color: '#3B71F3',
    fontWeight: 'bold',
  },
});

export default SignUp;
