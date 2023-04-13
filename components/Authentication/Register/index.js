import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StatusBar } from "react-native";
import styles from "./styles.js";

import { auth, db } from "../../../firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

const Authentication = (email, password, navigation, firstName, lastName) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);

            const usersCollectionRef = collection(db, "users");
            const userUID = auth.currentUser.uid;
            const currentUserDocRef = doc(usersCollectionRef, userUID);

            const saveUserInfo = async () => {
                await setDoc(currentUserDocRef, {
                    firstName,
                    lastName,
                    email,
                    password,
                });
            };

            saveUserInfo(firstName, lastName, email, password);
            console.log("Create successfully !");
            navigation.navigate("login");

            // ...
        })
        .catch((error) => {
            console.log(error);
            // ..
        });
};

export default function Login({ navigation }) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");

    return (
        <View style={styles.RegisterContainer}>
            <StatusBar barStyle={"dark-content"} />

            <Text style={styles.Title}>Register</Text>
            <Text style={styles.TitleContent}>To start your own journey</Text>

            <Text style={styles.FirstNameContent}>First name</Text>
            <TextInput style={styles.FirstName} placeholder="Ray" value={FirstName} onChangeText={(text) => setFirstName(text)} />

            <Text style={styles.LastNameContent}>Last name</Text>
            <TextInput style={styles.LastName} placeholder="Johnson" value={LastName} onChangeText={(text) => setLastName(text)} />

            <Text style={styles.EmailContent}>Email</Text>
            <TextInput style={styles.Email} placeholder="Abc@abc.com" value={Username} onChangeText={(text) => setUsername(text)} />

            <Text style={styles.PasswordContent}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.Password} placeholder="Enter here" value={Password} onChangeText={(text) => setPassword(text)} />

            <TouchableOpacity style={styles.RegisterBtn} onPress={() => Authentication(Username, Password, navigation, FirstName, LastName)}>
                <Text style={styles.RegisterBtnTxt}>Register now</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ToLogin} onPress={() => navigation.navigate("login")}>
                <Text style={styles.ToLoginTxt}>You have an account ?</Text>
            </TouchableOpacity>
        </View>
    );
}
