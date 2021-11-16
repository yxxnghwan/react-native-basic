import * as React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  }
});

export const textStyles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black'
  },
  error: {
    fontWeight: '400',
    color: 'red'
  }
})
