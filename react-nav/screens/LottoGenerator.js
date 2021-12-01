import * as React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import styled from "styled-components/native";


let numbers = [];
_.times(45, n => numbers.push(n + 1));
numbers = _.shuffle(numbers);

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight}px;
  align-items: center;
`

const Row = styled.View`
  flexDirection: row;
  margin-bottom: 24
`

const Ball = styled.View`
  width: 50px;
  height: 50px;
  background: ${props => {
    if(props.value < 11) {
      return "#e5e251";
    } else if( props.value < 21 ) {
      return "#517fe5";
    } else if( props.value < 31) {
      return "#e54036";
    } else if(props.value < 41) {
      return "#e5e5e5";
    } else {
      return "#43bf74";
    }
  }}
  //background-color: #e5e5e5;
  border-radius: 25;
  justify-content: center;
  align-items: center;
`

const Label = styled.Text`
  border-color: #000000;
  font-weight: bold;
  font-size: 20px;
`

function LottoGenerator() {

  const [displayNumbers, setNumbers] = React.useState(numbers);
  
  return (
    <Container>
      <Row>
        <Ball value={displayNumbers[0]}>
          <Label>{displayNumbers[0]}</Label>
        </Ball>
        <Ball value={displayNumbers[1]}>
          <Label>{displayNumbers[1]}</Label>
        </Ball>
        <Ball value={displayNumbers[2]}>
          <Label>{displayNumbers[2]}</Label>
        </Ball>
        <Ball value={displayNumbers[3]}>
          <Label>{displayNumbers[3]}</Label>
        </Ball>
        <Ball value={displayNumbers[4]}>
          <Label>{displayNumbers[4]}</Label>
        </Ball>
        <Ball value={displayNumbers[5]}>
          <Label>{displayNumbers[5]}</Label>
        </Ball>
      </Row>

      <Button title="다시하기" onPress={() => {setNumbers(_.shuffle(numbers))}}/>
    </Container>
  );
}

export default LottoGenerator;
