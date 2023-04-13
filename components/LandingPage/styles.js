import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    LandingPageContainer: {
        width: WIDTH,
        height: HEIGHT,

        alignItems: "center",

        backgroundColor: "#3DB6F8",
    },

    Title: {
        position: "absolute",
        top: HEIGHT / 15,
        left: WIDTH / 15,

        fontSize: WIDTH / 20,
        fontWeight: "800",

        color: "white",
    },

    Logo: {
        width: WIDTH / 1.1,
        height: HEIGHT / 2,

        position: "absolute",
        top: HEIGHT / 10,
    },

    MainPart: {
        position: "absolute",
        bottom: 0,

        width: WIDTH,
        height: HEIGHT / 2.2,

        borderTopLeftRadius: WIDTH / 10,
        borderTopRightRadius: WIDTH / 10,

        backgroundColor: "#ffffff",
    },

    MainPartTitle: {
        fontSize: WIDTH / 15,
        fontWeight: "700",

        position: "absolute",
        top: HEIGHT / 40,
        left: WIDTH / 15,

        color: "#3DB6F8",
    },

    MainPartContent: {
        width: WIDTH / 1.2,

        fontSize: WIDTH / 19,
        fontWeight: "300",

        position: "absolute",
        top: HEIGHT / 12,
        left: WIDTH / 15,

        color: "#3C484F",
    },

    MainPartTitle2: {
        fontSize: WIDTH / 15,
        fontWeight: "700",

        position: "absolute",
        top: HEIGHT / 5,
        left: WIDTH / 15,

        color: "#3DB6F8",
    },

    Page1: {
        width: WIDTH / 30,
        height: WIDTH / 30,

        position: "absolute",
        bottom: HEIGHT / 5.5,
        left: WIDTH / 14,

        borderRadius: WIDTH / 5,

        backgroundColor: "#D9D9D9",
    },

    Page2: {
        width: WIDTH / 30,
        height: WIDTH / 30,

        position: "absolute",
        bottom: HEIGHT / 5.5,
        left: WIDTH / 7.5,

        borderRadius: WIDTH / 5,

        backgroundColor: "#D9D9D9",
    },

    Page3: {
        width: WIDTH / 30,
        height: WIDTH / 30,

        position: "absolute",
        bottom: HEIGHT / 5.5,
        left: WIDTH / 5,

        borderRadius: WIDTH / 5,

        backgroundColor: "#D9D9D9",
    },

    NextBtn: {
        width: WIDTH / 4,
        height: HEIGHT / 25,

        justifyContent: "center",
        alignItems: "center",

        position: "absolute",
        bottom: HEIGHT / 20,
        right: WIDTH / 10,

        borderRadius: WIDTH / 80,
        backgroundColor: "#3DB6F8",
    },

    NextBtnTxt: {
        fontSize: WIDTH / 25,
        fontWeight: "600",

        color: "#FFFFFF",
    },
});

export default styles;
