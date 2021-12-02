import React from 'react';
import { View, Text } from "react-native";
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import styled from 'styled-components/native';

const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0;
    border-bottom-color: #aaaaaa;
    border-bottom-width: 1px;
`;
const Label = styled.Text`
    font-size: 20px;
`;

const List = ({navigation}) => {
    const [list, setList] = React.useState([]);
    const load = async () => {
        const data = await AsyncStorage.getItem('list');
        if(data)
            setList(JSON.parse(data));
    }

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            load();
        });

        load();
        return unsubscribe;
    }, [navigation]);

    return (
        <Container>
            <Contents>
                {
                    _.sortBy(list, 'date').map(item => {
                        return (
                            <ListItem key={item.date} onPress={()=>{
                                navigation.navigate('Detail', {date:item.date})
                            }}>
                                <Label>{item.date}</Label>
                            </ListItem>
                        )
                    })
                }
            </Contents>
            <Button onPress={() => {navigation.navigate('Form')}}>
                새 일기 작성
            </Button>
        </Container>
    );
};

export default List;