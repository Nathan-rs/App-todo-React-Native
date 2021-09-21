import React, { useState,  } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "../../config/firebaseconfig";
import { FontAwesome } from "@expo/vector-icons"

import styles from "../NewNote/style";

export default function NewNote( { navigation, route } ){
    const [description, setDescription] = useState(null)
    const database = firebase.firestore()

    
    function addNote(){
        database.collection(route.params.idUser).add(({
            description: description
        }))
        navigation.navigate('Note')
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
                    addNote()
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