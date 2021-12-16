import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import axios from 'axios';
import config from './config/config';
import ExchangeRateCal from './screens/ExchangeRateCal';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ExchangeRateCal />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
