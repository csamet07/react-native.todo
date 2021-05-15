import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import styles from './AddTodoButton.style';

const AddTodoButton = () => {
    return (
        <TouchableOpacity
            style={styles.button_container}
        >
            <Text style={styles.button_text} >Kaydet </Text>
        </TouchableOpacity>
    )
}

export default AddTodoButton;