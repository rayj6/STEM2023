import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList } from "react-native";
import styles from "./styles";

import { auth, db } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Dummy_data = [{ id: 0, DoctorName: "Nguyễn Quang Đăng", Work: "Heart sugery", Avatar: require("../../assets/TestAVT.png") }];

export default function UserInfo({ navigation }) {
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

                console.log(`User email: ${email}`);
                console.log(`User first name: ${firstName}`);
                console.log(`User last name: ${lastName}`);
            } else {
                console.log(`User document not found for UID ${userUID}`);
            }
        } else {
            console.log("No user is currently signed in.");
        }
    });

    return (
        <View style={styles.UserInfoContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.AvatarContainer}>
                    <ImageBackground style={styles.Avatar} resizeMode="cover" source={require("../../assets/TestAvatar.jpeg")}>
                        <View style={styles.AvatarCover} />
                    </ImageBackground>
                </View>
                <TouchableOpacity style={styles.BackBtn} onPress={() => navigation.navigate("home")}>
                    <Image style={styles.BackBtnIcon} resizeMode="contain" source={require("../../assets/BackIcon.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ChangeInfo}>
                    <Text style={styles.ChangeInfoText}>Change info</Text>
                </TouchableOpacity>
                <Text style={styles.Username}>
                    {FirstName} {LastName}
                </Text>
                <Text style={styles.UserID}>{UID.toUpperCase()}</Text>
                <View style={styles.FunctionsContainer}>
                    <TouchableOpacity style={styles.FunctionsBtn}>
                        <Image style={styles.FunctionsImage} resizeMode="contain" source={require("../../assets/CompleteProfile.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FunctionsBtn}>
                        <Image style={styles.FunctionsImage} resizeMode="contain" source={require("../../assets/MealPlan.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FunctionsBtn}>
                        <Image style={styles.FunctionsImage} resizeMode="contain" source={require("../../assets/HealthReport.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.FlatlistContainer}>
                    <FlatList showsVerticalScrollIndicator={false} data={Dummy_data} keyExtractor={(item) => item.id} renderItem={RenderHealthReport} />
                </View>
            </ScrollView>
        </View>
    );
}

const RenderHealthReport = ({ item, index }) => {
    return (
        <View style={styles.ItemContainer}>
            <Image style={styles.ItemAvatar} resizeMode="cover" source={item.Avatar} />

            <Text style={styles.DoctorName}>Dr.{item.DoctorName}</Text>
            <Text style={styles.Work}>{item.Work}</Text>

            <TouchableOpacity style={styles.PhoneContainer}>
                <Image style={styles.PhoneImage} resizeMode="contain" source={require("../../assets/phone.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.MessageContainer}>
                <Image style={styles.MessageImage} resizeMode="contain" source={require("../../assets/healthConsult.png")} />
            </TouchableOpacity>
        </View>
    );
};
