import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, TextInput, Dimensions, Button } from 'react-native';
import patistore from './patistore.json';
import Card from './src/components/Card/Card';

function App() {
    const [counter, setCounter] = useState(0);

    function increaseCounter(){
        setCounter(counter + 1);
    }

    function decreaseCounter(){
        setCounter(counter - 1);
    }

    return (
        <View>
            <Text style ={{fontSize: 40}}>Counter: {counter}</Text>
            <Button title = "Update Counter" onPress={increaseCounter}></Button>
            <Button title = "Decrease Counter" onPress={decreaseCounter}></Button>
        </View>
    );
}



export default App;
