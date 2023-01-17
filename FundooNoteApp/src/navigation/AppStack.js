import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import EditNote from '../screens/EditNote';
import Search from '../screens/Search';
import LabelList from '../components/Labels/LabelList';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppDrawer" component={DrawerNavigation} />
      <Stack.Screen name="EditNote" component={EditNote} />
      <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="LabelList" component={LabelList}/>
    </Stack.Navigator>
  );
};

export default AppStack;
