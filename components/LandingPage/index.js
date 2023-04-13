import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

function Page1({ ToPage }) {
    return (
        <>
            <Text style={styles.Title}>Welcome</Text>
            <Image style={styles.Logo} resizeMode="contain" source={require("../../assets/LandingPage.gif")} />
            <View style={styles.MainPart}>
                <Text style={styles.MainPartTitle}>Get The Best Doctor</Text>
                <Text style={styles.MainPartContent}>The most accurate prediction of your condition based on the symptoms you have</Text>
                <Text style={styles.MainPartTitle2}>Get started</Text>
                <View
                    style={[
                        styles.Page1,
                        {
                            backgroundColor: "#00FF47",
                        },
                    ]}
                />
                <View style={styles.Page2} />
                <View style={styles.Page3} />
                <TouchableOpacity style={styles.NextBtn} onPress={() => ToPage("Page2")}>
                    <Text style={styles.NextBtnTxt}>Next</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

function Page2({ ToPage }) {
    return (
        <>
            <Text style={styles.Title}>Welcome</Text>
            <Image style={styles.Logo} resizeMode="contain" source={require("../../assets/LandingPage2.gif")} />
            <View style={styles.MainPart}>
                <Text style={styles.MainPartTitle}>Online Medical Consultation</Text>
                <Text style={styles.MainPartContent}>
                    Connecting you to the clinic you have been to so that we can advise you about your condition in the best way
                </Text>
                <Text style={styles.MainPartTitle2}>Get started</Text>
                <View style={styles.Page1} />
                <View
                    style={[
                        styles.Page2,
                        {
                            backgroundColor: "#00FF47",
                        },
                    ]}
                />
                <View style={styles.Page3} />
                <TouchableOpacity style={styles.NextBtn} onPress={() => ToPage("Page3")}>
                    <Text style={styles.NextBtnTxt}>Next</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
function Page3({ navigation }) {
    return (
        <>
            <Text style={styles.Title}>Welcome</Text>
            <Image style={styles.Logo} resizeMode="contain" source={require("../../assets/LandingPage3.gif")} />
            <View style={styles.MainPart}>
                <Text style={styles.MainPartTitle}>Meal Planning Support</Text>
                <Text style={styles.MainPartContent}>Based on your condition, we will build you the most reasonable source of nutrition</Text>
                <Text style={styles.MainPartTitle2}>Get started</Text>
                <View style={styles.Page1} />
                <View style={styles.Page2} />
                <View
                    style={[
                        styles.Page3,
                        {
                            backgroundColor: "#00FF47",
                        },
                    ]}
                />
                <TouchableOpacity style={styles.NextBtn} onPress={() => navigation.navigate("login")}>
                    <Text style={styles.NextBtnTxt}>Start</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
export default function LandingPage({ navigation }) {
    const [Page, setPage] = React.useState("Page1");

    if (Page === "Page1") {
        return (
            <View style={styles.LandingPageContainer}>
                <Page1 ToPage={setPage} />
            </View>
        );
    } else if (Page === "Page2") {
        return (
            <View style={styles.LandingPageContainer}>
                <Page2 ToPage={setPage} />
            </View>
        );
    } else if (Page === "Page3") {
        return (
            <View style={styles.LandingPageContainer}>
                <Page3 navigation={navigation} />
            </View>
        );
    } else {
        console.log("Err !");
    }
}
