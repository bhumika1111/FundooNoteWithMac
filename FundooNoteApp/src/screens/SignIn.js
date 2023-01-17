import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Logo from '../assets/images/Logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButton from '../components/SocialSignInButton';
import {WIDTH} from '../utility/Theme';
//import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';

const SignIn = ({navigation}) => {
  //const navigation = useNavigation();
  console.log('email', email);
  console.log('password', password);
  const {login, googleLogin} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSignInPressed = () => {
    // navigation.navigate('Dashboard');

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,32}$/;
    const outputFields = {};
    if (email === '' || !emailRegex.test(email)) {
      outputFields.email = 'Please Enter A Valid Email!';
    }
    if (password === '' || !passwordRegex.test(password)) {
      outputFields.password = 'Please Enter Min.8 and max.32 characters!';
    } else {
      login(email, password);
    }
    setError(outputFields);
  };
  const onForgotPasswordPressed = () => {
    console.log('onForgotPasswordPressed');
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    console.log('onSignUpPressed');
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.text}>Fundoo Note</Text>

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

        <CustomButton text="Sign In" onPress={() => onSignInPressed()} />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="SECONDARY"
        />

        {Platform.OS === 'ios' ? (
          <>
            <CustomButton
              text="Sign In With Google"
              bgColor="#FAE9EA"
              fgColor="#ff4500"
              onPress={() => googleLogin()}
            />
          </>
        ) : null}

        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Don't have an account
          </Text>
          <CustomButton
            text="      Create one"
            onPress={onSignUpPressed}
            type="SECONDARY"
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: WIDTH.WIDTH,
    maxWidth: 300,
    height: 100,
    // marginBottom: 30,
  },
  text: {
    color: '#dc143c',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  error: {
    marginHorizontal: 22,
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
});

export default SignIn;
