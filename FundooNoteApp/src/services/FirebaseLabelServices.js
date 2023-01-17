import {createContext} from 'react';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

const db = firestore().collection('UserData');

export const addLabel = async (userId, label) => {
  try {
    await db.doc(userId).collection('labelData').add({
      label: label,
      
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchinglabelData = async userId => {
  try {
    let labelArray = [];
    await db
      .doc(userId)
      .collection('labelData')
      .get()
      .then(data => {
        data.forEach(labelName => {
          const docData = labelName.data();
          docData.labelId = labelName.id;
          labelArray.push(docData);
        });
      });
    return labelArray;
  } catch (error) {
    console.log(error);
  }
};

export const updateLabel = async (labelName,userId,labelId) => {
  try {
    await db
      .doc(userId)
      .collection('labelData')
      .doc(labelId)
      .update({
       labelName:labelName,
      })
      .then(() => {
        console.log('User updated!');
      });
  } catch (error) {
    console.log("&&&&&~~~~~~",error);
  }
};
export const deletelabel = async (labelId, userId) => {
  try {
    await db
      .doc(userId)
      .collection('labelData')
      .doc(labelId)
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
  } catch (error) {
    console.log(error);
  }
};
