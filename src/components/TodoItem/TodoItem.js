import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './TodoItem.style';

const TodoItem = props => {
    const [checking, setChecking] = useState(false);
    const {title, check, id} = props;

    const onPressTodoItem = () => {
        setChecking(!checking)
        props.onComplete(id);
    }

    if(checking){
        return (
            <TouchableOpacity 
                style={styles.container_completed}
                onPress={onPressTodoItem}
            >
                <Text style={styles.text_completed}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }else{
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={onPressTodoItem}
            >
                <Text style={styles.text_wait}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }

    
}

export default TodoItem;