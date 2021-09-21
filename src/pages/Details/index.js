import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"

import styles from "../Details/style";
import firebase from "../../config/firebaseconfig";

export default function Details( {navigation, route} ){

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const database = firebase.firestore()
    const idTask = route.params.id

    function editTask(description, id){
        database.collection(route.params.idUser).doc(id).update({
            description: descriptionEdit,
        })
        navigation.navigate('Note')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descripition</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Notas"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            <TouchableOpacity 
                style={styles.btnSave}
                onPress={()=>{
                    editTask(descriptionEdit, idTask)
                }}
            >
                <FontAwesome 
                    name="check"
                    color="#fff"
                    size={20}
                >
                </FontAwesome>
            </TouchableOpacity>
        </View>
    );
}