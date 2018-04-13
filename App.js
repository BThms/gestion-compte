import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./app/Containers/Home";
import NavigationRouter from './app/Router/NavigationRouter';

export default class App extends React.Component {
  render() {
    return (
        <NavigationRouter/>
    );
  }
}


