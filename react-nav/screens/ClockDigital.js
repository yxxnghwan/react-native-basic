import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import {DateTime} from 'luxon';
import Container from '../components/Container';
import Row from '../components/Row';
import TimeText from '../components/TimeText';
import Second from '../components/Second';


const image = {uri:"https://placeimg.com/640/480/nature"};

function ClockDigital() {
  const [date, setDate] = React.useState(DateTime.now());

  React.useEffect(()=>{
    const id = setInterval(() => {
      setDate(DateTime.now());
    }, 500);
    return () => clearInterval(id);
  }, [date])
  return (
    <Container source={image} resizeMode="stretch">
      <Row>
        <TimeText>{date.toFormat('HH:mm')}</TimeText>
      </Row>
      <Row>
        <Second>{date.toFormat('ss')}</Second>
      </Row>
      <Row>
        <Text></Text>
      </Row>
      
    </Container>
  );
}

export default ClockDigital;


