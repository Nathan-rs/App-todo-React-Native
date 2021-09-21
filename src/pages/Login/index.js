import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from "react-native"

import firebase from "../../config/firebaseconfig";
import styles from './style';

import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Login({ navigation }){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [erroLogin, setErroLogin] = useState("")

    const loginFireBase = () => {
     
     
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate('Note', {idUser: user.uid})
        })
        .catch((error) => {
            setErroLogin(true)
            let errorCode = error.code;
            let errorMessage = error.message;
        });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate('Note', {idUser: user.uid})
            }
        });

    }, []);


    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios"? "padding" : "height"}
        style={styles.container}
        >
            <Text style={styles.title}>Conecte-se</Text>

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
            {erroLogin === true
            ? 
            <View style={styles.contentAlert}>
                <MaterialCommunityIcons
                name="alert-circle"
                size={24}
                color="#bdbdbd"
                />
            <Text style={styles.warningAlert}>Invalid e-mail or password</Text>
            </View>
            :
            <View/>
            }

            {email === "" || password === ""?
                <TouchableOpacity
                disabled={true}
                style={styles.buttonLogin}
                >
                    <Text style={styles.textButtonLogin}>Login</Text>

                </TouchableOpacity>
                :
                <TouchableOpacity
                style={styles.buttonLogin}
                onPress={loginFireBase}
                >
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
            }
            <Text style={styles.registration}>
                Não possui uma conta?
                <Text style={styles.linkSubscribe} onPress={()=>navigation.navigate('NewUser')}>
                    Inscreva-se
                </Text>
            </Text>
            <View style={{heigth:100}}/>


        </KeyboardAvoidingView>
    );
}

const styless = StyleSheet.create({
    btn: {
        marginTop: 20,
        width: 70,
        height: 30,
        padding: 15,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    txt: {
        color: "#fff"
    }
})