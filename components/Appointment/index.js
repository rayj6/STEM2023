import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions, FlatList, StatusBar } from "react-native";

import { db, auth } from "../../firebase.config.js";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import styles from "./styles";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function LandingPage({ navigation }) {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
        const unsubscribeMessages = onSnapshot(q, (querySnapshot) => {
            const newMessages = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setMessages(newMessages);
        });

        return () => {
            unsubscribeAuth();
            unsubscribeMessages();
        };
    }, []);

    const handleSend = async () => {
        if (text.trim()) {
            await addDoc(collection(db, "messages"), {
                text: text.trim(),
                senderId: currentUser.uid,
                senderName: currentUser.displayName,
                createdAt: new Date(),
            });
            setText("");
        }
    };

    const renderMessage = ({ item }) => {
        const isCurrentUser = item.senderId === currentUser.uid;

        return (
            <View style={{ padding: 10, alignSelf: isCurrentUser ? "flex-end" : "flex-start" }}>
                <View style={{ backgroundColor: isCurrentUser ? "#3DB6F8" : "#AE5400", padding: 10, borderRadius: 5 }}>
                    <Text style={{ color: "white" }}>{item.text}</Text>
                    <Text style={{ fontSize: 12, color: "white" }}>{new Date(item.createdAt.seconds * 1000).toLocaleTimeString()}</Text>
                </View>
            </View>
        );
    };
    return (
        <View style={{ width: WIDTH, height: HEIGHT }}>
            <StatusBar barStyle={"dark-content"} />

            <FlatList data={messages} renderItem={renderMessage} keyExtractor={(item) => item.id} style={{ width: WIDTH, marginTop: 50 }} />
            <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                <TextInput
                    placeholder="Type a message"
                    value={text}
                    onChangeText={setText}
                    style={{ flex: 1, borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, marginBottom: 30, marginTop: 20 }}
                />
                <TouchableOpacity
                    onPress={handleSend}
                    style={{ marginLeft: 10, backgroundColor: "#3DB6F8", padding: 10, borderRadius: 5, marginBottom: 30, marginTop: 20 }}
                >
                    <Text style={{ color: "white" }}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
