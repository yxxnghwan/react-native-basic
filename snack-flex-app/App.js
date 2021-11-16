import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Header, Contents, Footer} from "./components/Layout";
import {viewStyles, textStyles} from './src/Styles';

export default function App() {
  return (
    <View style={viewStyles.container}>
      <Header></Header>
      <Contents />
      <Footer />
    </View>
  );
}
