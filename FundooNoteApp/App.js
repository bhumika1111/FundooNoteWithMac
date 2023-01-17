import 'react-native-gesture-handler';
import React from 'react';
import {AuthProvider} from './src/navigation/AuthProvider';
import Navigation from './src/navigation/Navigation';
 import {Provider} from 'react-redux';
 import store from './src/redux/Store'
//import Providers from './src/navigation/Providers';
const App = () => {
  return(
    <Provider store={store}>
  <AuthProvider>
        <Navigation/>
        </AuthProvider>
        </Provider>
  )
};

export default App;
