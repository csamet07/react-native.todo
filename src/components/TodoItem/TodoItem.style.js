import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#7da453',
        padding: 12,
        paddingLeft:20,
        borderRadius: 12
    },
    container_completed: {
        margin: 10,
        backgroundColor: '#37474f',
        padding: 12,
        paddingLeft:20,
        borderRadius: 12
    },
    text_wait: {
        color:'white'
    },
    text_completed: {
        color:'#7d7e7e',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    }
});