import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Row from './Row';
const SearchBar = ({onChangeWon, won, calResult}) => {
    return (
        <Row>
            <TextInput
                style={styles.input}
                onChangeText={onChangeWon}
                value={won}
                placeholder="원화를 입력하세요."
                keyboardType="numeric"
            />
            <Text>원</Text>
            <Text style={{
                fontSize: 15,
                fontWeight: 600,
                color: "red"
            }}>{calResult}</Text>
        </Row>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default SearchBar;