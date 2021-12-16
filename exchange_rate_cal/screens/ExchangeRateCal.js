import React from 'react';
import {FlatList, View, Pressable, StatusBar, StyleSheet, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import Padding from '../components/Padding';
import axios from 'axios';
import config from '../config/config';

const ExchangeRateCal = () => {
  const [won, setWon] = React.useState('');
  const [exchangeRate, setExchangeRate] = React.useState([]);
  const baseURL = "http://api.exchangeratesapi.io/v1/latest";
  const [calResult, setCalResult] = React.useState();
  
  const getExchangeRate =() => {
    axios.get(baseURL, {
      params: {
        access_key: config.API_KEY
      }
    })
    .then(response => {
      let rates = response.data.rates;
      let krwMaker = 1 / rates.KRW; // 곱하면 1000원당 원화 비율이 되는 수
      let exchangeRate = [];
      for(let key in rates) {
        rates[key] = (rates[key] * krwMaker).toFixed(6); 
        exchangeRate.push({id: key, rate: rates[key]});
      }
      setExchangeRate(exchangeRate);
      console.log(exchangeRate);
    })
    .catch(err => {
      console.log(err);
    });
  };

  const calulate = (id, rate) => {
      console.log(rate, won);
    setCalResult((rate * won).toFixed(5) + " " + id);
  }

  const Item = ({ id, rate }) => (
    <Pressable style={{
        padding: 10,
        fontSize: 15,
        borderWidth: 1
    }} onPress={() => {calulate(id, rate)}}>
      <Text>{id}</Text>
    </Pressable>
  );

  const renderItem = ({ item }) => (
    <Item id={item.id} rate={item.rate}/>
  );

  React.useEffect(getExchangeRate, []);

    return (
        <Padding style={styles.container}>
            <SearchBar onChangeWon={setWon} won={won} calResult={calResult}></SearchBar>
            <FlatList
                data={exchangeRate}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </Padding>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default ExchangeRateCal;