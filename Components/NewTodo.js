import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  ActionSheetIOS,
  FlatList,
  Button,
} from "react-native";
import { addTodoRequest } from "../redux/Action/Action";

const NewTodo = ({data}) => {
const [check , setcheck] = useState(false)
const isTodoComplete = (id)=>{
  data.forEach(element => {
        if(element.id === id){
            element.checked = !element.checked; 
            setcheck(!check)
        }    
    });
}
console.log(data , "rghshdghbjfioshbjk")
  return (
    <View style={styles.container}>
      {data.map((item , i)=>{
        return(
          <View style={styles.TodoView} key={i}>
          <TouchableOpacity style={item.checked ? styles.TodoBtnTrue : styles.TodoBtn} onPress={()=>  isTodoComplete(item.id)}>
          {/* <TouchableOpacity style={styles.TodoBtn}> */}
            <Text></Text>
          </TouchableOpacity>
          <Text style={styles.Text}>{item.title}</Text>
        </View>
        )
      })
}
    </View>
  );
};

export default NewTodo;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
  },
  TodoView: {
    display: "flex",
    // justifyContent : "center",
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
  },
  TodoBtn: {
    backgroundColor: "red",
    height: 30,
    width: 30 ,
    borderRadius: 100,
  },
  TodoBtnTrue :{
    backgroundColor: "green",
    height: 30,
    width: 30 ,
    borderRadius: 100,
  },    
  Text: {
    fontSize: 18,
    width: "90%",
    marginLeft: 15,
  },

});
