import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import ZipCodeFinder from './screens/ZipCodeFinder';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ZipCodeFinder></ZipCodeFinder>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    flex: 1
  },
});
