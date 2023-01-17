import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLOR} from '../utility/Theme';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avtar}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 30,
            paddingBottom: 7,
          }}>
          +
        </Text>
      </View>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  avtar: {
    backgroundColor: 'purple',
    width: '12%',
    height: '8%',
    alignItems: 'center',
    borderRadius: 7,
    justifyContent: 'center',
  },
});
