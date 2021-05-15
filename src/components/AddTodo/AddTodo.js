import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './AddTodo.style';

const AddTodo = props => {
    const [value, setValue] = useState('');
    useEffect(()=>{
        console.log(value);
        // props.item = value;
    },[value])
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Yapılacak ..."
                style={styles.input}
                onChangeText={val => setValue(val)}
            />
            <TouchableOpacity
                style={styles.button_container}
                onPress={props.onAddButton}
            >
                <Text style={styles.button_text} >Kaydet </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddTodo;