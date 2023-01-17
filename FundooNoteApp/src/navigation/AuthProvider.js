import firestore from '@react-native-firebase/firestore';
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const usersCollection = firestore().collection('UserData');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,

        login: async (email, password) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                console.log('User account created & signed in!');
              })
              .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                }

                if (error.code === 'auth/wrong-password') {
                  console.log('Password is invalid!');
                }

                if (error.code === 'auth/user-not-found') {
                  console.log('user not Exist');
                }

                console.error(error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password, firstname, lastname) => {
          try {
            const userDetails = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );

            usersCollection
              .doc(userDetails.user.uid)
              .set({email: email, firstname: firstname, lastname: lastname});

            console.log('User account created & signed in!');

            console.log(userDetails);
          } catch (e) {
            console.log(e);
          }
        },

        forgotpassword: async email => {
          try {
            await auth().sendPasswordResetEmail(email);
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async () => {
          try {
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth()
              .signOut()
              .then(() => console.log('User signed out!'));
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
