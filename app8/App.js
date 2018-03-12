import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './src/Routes';
import reducers from './src/reducers/index';

export default class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyC3i9Tpzr1LMK3Y8YrXhK0k-z2-IG6BmZc',
      authDomain: 'whatsappclone-c8bfc.firebaseapp.com',
      databaseURL: 'https://whatsappclone-c8bfc.firebaseio.com',
      projectId: 'whatsappclone-c8bfc',
      storageBucket: 'whatsappclone-c8bfc.appspot.com',
      messagingSenderId: '187807386462'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
