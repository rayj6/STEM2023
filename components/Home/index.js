import React, { useState } from "react";
import { Text, View, StatusBar, Image, FlatList, ImageBackground, TouchableOpacity, ScrollView, Dimensions, Linking } from "react-native";
import { BlurView } from "expo-blur";
import styles from "./styles";

import { auth, db } from "../../firebase.config.js";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const DATA = [
    { id: 0, title: "Suy tim", imageSrc: require("../../assets/dautim.png") },
    { id: 1, title: "Xơ gan", imageSrc: require("../../assets/gan.png") },
];

export default function App({ navigation }) {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [UID, setUID] = useState("");

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log("Current user email: ", user.email);
            console.log("Current user UID: ", user.uid);

            const currentUserDocRef = doc(db, "users", user.uid);
            setUID(user.uid);

            // get the document data for the current user
            const docSnapshot = await getDoc(currentUserDocRef);
            if (docSnapshot.exists()) {
                // extract the user information from the document data
                const userData = docSnapshot.data();
                const email = userData.email;
                const firstName = userData.firstName;
                const lastName = userData.lastName;

                setFirstName(firstName);
                setLastName(lastName);

                // console.log(`User email: ${email}`);
                // console.log(`User first name: ${firstName}`);
                // console.log(`User last name: ${lastName}`);
            } else {
                console.log(`User document not found for UID ${userUID}`);
            }
        } else {
            console.log("No user is currently signed in.");
        }
    });

    const handleCall = () => {
        const url = `tel:+84${868320014}`;
        console.log(url);
        Linking.openURL(url);
    };

    return (
        <View style={styles.Container}>
            <StatusBar barStyle={"default"} />
            <ScrollView style={{ position: "absolute", width: WIDTH, height: HEIGHT }} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.HeaderContainer}>
                    <View style={styles.InfoContainer}>
                        <TouchableOpacity style={styles.InfoImageContainer} onPress={() => navigation.navigate("userInfo")}>
                            <Image style={styles.InfoImage} resizeMode="contain" source={require("../../assets/user.png")} />
                        </TouchableOpacity>
                        <View style={styles.InfoTextContainer}>
                            <Text style={styles.InfoTextTitle}>Xin chào</Text>
                            <Text style={styles.InfoTextUser}>
                                {FirstName} {LastName}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.AlertContainer}>
                        <Image style={styles.AlertImage} resizeMode="contain" source={require("../../assets/alert.png")} />
                    </TouchableOpacity>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}>HÔM NAY BẠN</Text>
                        <Text style={styles.TitleText}>CẢM THẤY</Text>
                        <Text style={styles.TitleText}>THẾ NÀO ?</Text>
                    </View>
                    <View style={styles.HealthCheckContainer}>
                        <TouchableOpacity style={styles.HealthCheckButton} onPress={() => navigation.navigate("healthCheck")}>
                            <Image style={styles.HealthCheckImage} resizeMode="contain" source={require("../../assets/healthCheck.png")} />
                            <Text style={styles.HealthCheckTitle}>Kiểm tra</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.HealthConsultContainer}>
                        <TouchableOpacity style={styles.HealthConsultButton} onPress={() => navigation.navigate("appointment")}>
                            <Image style={styles.HealthConsultImage} resizeMode="contain" source={require("../../assets/healthConsult.png")} />
                            <Text style={styles.HealthConsultTitle}>Tư vấn</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.PhoneContainer} onPress={handleCall}>
                        <Image style={styles.PhoneImage} resizeMode="contain" source={require("../../assets/phone.png")} />
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <Text style={styles.BodyTitle}>Bệnh của bạn</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    style={styles.FlatList}
                    indicatorStyle
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                />

                {/* Bottom Navbar */}
            </ScrollView>
        </View>
    );
}

function RenderItem({ item, index }) {
    return (
        <View style={styles.BodyItemContainer}>
            <ImageBackground
                imageStyle={{ borderRadius: WIDTH / 40 }}
                style={{ width: "100%", height: "100%", alignItems: "center" }}
                resizeMode="contain"
                source={item.imageSrc}
            >
                <View style={{ width: "80%", height: "20%", position: "absolute", bottom: 10, borderRadius: WIDTH / 40, overflow: "hidden" }}>
                    <BlurView
                        intensity={80}
                        tint="light"
                        style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", paddingLeft: 10, paddingRight: 10 }}
                    >
                        <Text style={{ fontSize: WIDTH / 25, fontWeight: "600" }}>{item.title}</Text>
                    </BlurView>
                </View>
            </ImageBackground>
        </View>
    );
}
