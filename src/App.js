import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem/TodoItem';

const App = () => {

  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');
  const [willTodoCount, setWillTodoCount] = useState(0);

  const renderTodo = ({ item }) => <TodoItem title={item.title} id={item.id} check={item.check} onComplete={val => {completeProcess(val)}} />

  const addTodoItem = () => {
    setTodo(todo.concat({"id":todo.length,"title":value,"check":false}))
    setValue('')
    setWillTodoCount(willTodoCount + 1)
  }

  const completeProcess = id => {

    console.log(id);
    const list = todo;
    let val = list.filter(x=> x.id == id);
    val[0].check = !val[0].check; 
    setTodo(list)
    setWillTodoCount(willTodoCount - 1)
    console.log(val)

    //devam edecek
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text_first}>
          Yapılacaklar
        </Text>
        <Text style={styles.header_text_second}>
          {todo.filter(qq => !qq.check).length}
        </Text>
      </View>
      <FlatList
        data={todo}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
        onTouchStart={item => console.log(item)}
      />
      <View style={styles.add_container}>
            <TextInput 
                placeholder="Yapılacak ..."
                style={styles.input}
                onChangeText={val => setValue(val)}
                value={value}
            />
            <TouchableOpacity
                style={styles.button_container}
                onPress={addTodoItem}
            >
                <Text style={styles.button_text} >Kaydet </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1
  },
  header: {
    flexDirection: 'row',
    margin: 20,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: '#78909c'
  },
  header_text_first: {
    color: '#ffa500',
    flex: 1,
    fontSize: 25
  },
  header_text_second: {
    color: '#ffa500',
    fontSize: 25
  },
  add_container: {
    backgroundColor: '#37474f',
    margin: 15,
    padding: 15,
    borderRadius: 12
  },
  input: {
    color: '#767879',
    fontWeight: 'bold',
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#78909c'
  },
  button_container: {
    backgroundColor: '#808080',
    padding: 10,
    borderRadius: 12,
    marginTop: 15
  },
  on_button_container: {
    backgroundColor: '#ffa500',
    padding: 10,
    borderRadius: 12,
    marginTop: 15
  },
  button_text: {
    color: 'white',
    textAlign: 'center'
  }
})