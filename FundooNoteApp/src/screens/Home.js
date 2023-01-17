import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { COLOR } from '../utility/Theme';

const Home = () => {
  const navigation = useNavigation();
  const onSignInPressed = () => {
    console.log('Sign In');
    //validate user
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/Logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>Stay connected with fundoo note!</Text>
        <Text style={styles.text}>Sign in with account!</Text>
        <CustomButton text="Sign In" onPress={onSignInPressed} />
      </View>
    </View>
  );
};
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
   // borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    alignSelf: 'center',
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 15,
    paddingVertical: 10,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
    borderBottomLeftRadius: 10,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textsign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Home;
