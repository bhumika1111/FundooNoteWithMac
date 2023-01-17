import { useState, useContext, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView, SafeAreaView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../navigation/AuthProvider';
import { fetchinglabelData, updateLabel } from '../../services/FirebaseLabelServices';
import Icon from 'react-native-vector-icons/Ionicons'
import CheckBoxCard from './CheckBoxCard';
import { COLOR } from '../../utility/Theme';
import { labels } from '../redux/Action'
import { useSelector, useDispatch } from 'react-redux';
const LabelList = ({ navigation, route }) => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState('');
  const [selection, setSelection] = useState([]);
  const [labelData, setLabelData] = useState([]);
  const labels = useSelector(state => state.labels)
  const dispatch = useDispatch()
  const noteData = route.params?.noteData;
  const userId = user.uid;
  const getData = async () => {
    let result = await fetchinglabelData(user.uid);
    setLabelData(result)

  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);



  const onCheckBoxPress = (item) => {
    const index = selection.findIndex(text => text.labelId === item.labelId)
    if (index === -1) {
      setSelection([...selection, item])
    }
    else {
      const selected = [...selection]
      selected.splice(index, 1)
      setSelection(selected)
    }
  }





  return (
    <SafeAreaView style={styles.view}>
      <SafeAreaView style={styles.top}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('EditNote', { labelData: selection, noteData })}>
          <Icon name="arrow-back" size={22} color="black" />
        </TouchableOpacity>
        <TextInput style={styles.input}
          placeholder="Enter label name"
          value={value}
          onChangeText={text => setValue(text)}
          placeholderTextColor={'black'}
        />
      </SafeAreaView>

      <View>
        {labelData.map(item => (
          <CheckBoxCard
            key={item.labelId}
            data={item}
            onCheck={onCheckBoxPress}
            selection={selection} />
        ))}
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    //backgroundColor: COLOR.BACKGROUND_COLOR_DG,
  },
  top: {
    // backgroundColor: COLOR.THIRD_COLOR,
    flexDirection: 'row',
    marginTop: 20,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  label: {
    flexDirection: 'row',
    marginTop: 10,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

  },
  text1: {
    width: 100,
    color: 'black',
    marginRight: 180,
    marginTop: 15,
  },
  input: {
    width: 200,
    height: 45,
    //  backgroundColor: COLOR.THIRD_COLOR,
    marginRight: 280,
    color: 'black',
  },
  icon: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },
  icon1: {
    color: "black",
    marginRight: 20,
    marginTop: 10
  },
})
export default LabelList