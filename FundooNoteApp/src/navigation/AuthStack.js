import {} from 'react-native';
import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import NewPassword from '../screens/NewPassword';
import Home from '../screens/Home';
//import HomeFundoo from '../screens/HomeFundoo';
const Stack = createNativeStackNavigator();
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '137322567929-1tb3c5meojkiefhkp5md2otav9l418jo.apps.googleusercontent.com',
    });
  });
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
