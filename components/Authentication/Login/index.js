import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StatusBar } from "react-native";
import styles from "./styles.js";

import { auth } from "../../../firebase.config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const Authentication = (email, password, navigation) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("Login succesfully !");
            navigation.navigate("home");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert("Please check your information !");
        });
};

export default function Login({ navigation }) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    return (
        <View style={styles.LoginContainer}>
            <StatusBar barStyle={"dark-content"} />
            <Text style={styles.Title}>Login</Text>
            <Text style={styles.TitleContent}>To continue your journey</Text>

            <Text style={styles.EmailContent}>Email</Text>
            <TextInput style={styles.Email} placeholder="Abc@abc.com" value={Username} onChangeText={(text) => setUsername(text)} />

            <Text style={styles.PasswordContent}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.Password} placeholder="Enter here" value={Password} onChangeText={(text) => setPassword(text)} />

            <TouchableOpacity style={styles.LoginBtn} onPress={() => Authentication(Username, Password, navigation)}>
                <Text style={styles.LoginBtnTxt}>Login now</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ToRegister} onPress={() => navigation.navigate("register")}>
                <Text style={styles.ToRegisterTxt}>You don't have an account ?</Text>
            </TouchableOpacity>
        </View>
    );
}
