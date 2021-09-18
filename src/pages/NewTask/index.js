import React, { useState,  } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "../../config/firebaseconfig";
import { FontAwesome } from "@expo/vector-icons"


import styles from "../NewTask/style";



export default function NewTask( { navigation } ){
    const [description, setDescription] = useState(null)
    const database = firebase.firestore()

    function addTask(){
        database.collection("todo").add(({
            description: description,
            status: false
        }))
        navigation.navigate("Task")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Nova Anotação"
                onChangeText={setDescription}
                value={description}
            />

            <TouchableOpacity 
                style={styles.iconButton}
                onPress={() =>{
                    addTask()
                }}
            >
                <FontAwesome
                    name="save"
                    size={23}
                    color="#fff"
                >
                </FontAwesome>
            </TouchableOpacity>
        </View>
    );
}