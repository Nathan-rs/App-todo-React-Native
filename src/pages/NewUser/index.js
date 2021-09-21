import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import firebase from "../../config/firebaseconfig";
import styles from './style';

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewUser({navigation}){
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [erroRegister, setErroRegister] = useState("")


    const register = () =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate('Note', {idUser: user.uid})
            })
        .catch((error) => {
            setErroRegister(true)
            let errorCode = error.code;
            let errorMessage = error.message;
        });
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios"? "padding" : "height"}
            style={styles.container}
        >
        <Text style={styles.title}>Registre-se</Text>

        <TextInput
            style={styles.input}
            placeholder="Entre com seu email"
            type="text"
            onChangeText={(text) => { setEmail(text) }}
            value={email}
        />

        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            type="text"
            onChangeText={(pass) => { setPassword(pass) }}
            value={password}
        />

{erroRegister === true
            ? 
            <View style={styles.contentAlert}>
                <MaterialCommunityIcons
                name="alert-circle"
                size={24}
                color="#bdbdbd"
                />
            <Text style={styles.warningAlert}>Email ou senha invalidos!</Text>
            </View>
            :
            <View/>
            }

            {email === "" || password === ""?
                <TouchableOpacity
                disabled={true}
                style={styles.buttonRegister}
                >
                    <Text style={styles.textButtonRegister}>Register</Text>

                </TouchableOpacity>
                :
                <TouchableOpacity
                style={styles.buttonRegister}
                onPress={register}
                >
                    <Text style={styles.textButtonRegister}>Register</Text>
                </TouchableOpacity>
            }
            <Text style={styles.login}>
                ja possui uma conta?
                <Text style={styles.linkLogin} onPress={()=>navigation.navigate('Login')}>
                    Faça login já!
                </Text>
            </Text>
            <View style={{heigth:100}}/>

        </KeyboardAvoidingView>
    );
}