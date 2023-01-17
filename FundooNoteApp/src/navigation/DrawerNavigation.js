import {} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeFundoo from '../screens/HomeFundoo';
import Remainder from '../screens/Remainder';
import CustomDrawer from '../components/CustomDrawer';
import Trash from '../screens/Trash';
import CreateNewLabel from '../screens/CreateNewLabel';
import Setting from '../screens/Setting';
import Archieve from '../screens/Archieve';
import LabelDrawerTop from '../screens/LabelDrawerTop';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Notes" component={HomeFundoo} />
      <Drawer.Screen name="Remainder" component={Remainder} />
      <Drawer.Screen name="Create new label" component={CreateNewLabel} />
      <Drawer.Screen name="LabelDrawerTop" component={LabelDrawerTop} />
      <Drawer.Screen name="Archieve" component={Archieve} />
      <Drawer.Screen name="Trash" component={Trash} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
