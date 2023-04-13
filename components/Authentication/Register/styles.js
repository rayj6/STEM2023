import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    RegisterContainer: {
        width: WIDTH,
        height: HEIGHT,

        flexDirection: "column",
    },

    Title: {
        fontSize: WIDTH / 10,
        fontWeight: "600",

        position: "absolute",
        top: HEIGHT / 15,
        left: WIDTH / 15,

        color: "#3DB6F8",
    },

    TitleContent: {
        fontSize: WIDTH / 20,
        fontWeight: "200",

        position: "absolute",
        top: HEIGHT / 8,
        left: WIDTH / 15,

        color: "#3C484F",
    },

    FirstNameContent: {
        position: "absolute",
        top: HEIGHT / 4.5,
        left: WIDTH / 15,

        color: "#3C484F",
    },

    FirstName: {
        width: WIDTH / 2.8,
        height: HEIGHT / 20,

        paddingLeft: WIDTH / 40,
        paddingRight: WIDTH / 60,

        position: "absolute",
        top: HEIGHT / 4,
        left: WIDTH / 15,

        borderWidth: 0.2,
        borderColor: "#3C484F",
    },

    LastNameContent: {
        position: "absolute",
        top: HEIGHT / 4.5,
        left: WIDTH / 1.8,

        color: "#3C484F",
    },

    LastName: {
        width: WIDTH / 2.8,
        height: HEIGHT / 20,

        paddingLeft: WIDTH / 40,
        paddingRight: WIDTH / 60,

        position: "absolute",
        top: HEIGHT / 4,
        left: WIDTH / 1.8,

        borderWidth: 0.2,
        borderColor: "#3C484F",
    },

    EmailContent: {
        position: "absolute",
        top: HEIGHT / 3,
        left: WIDTH / 15,

        color: "#3C484F",
    },

    Email: {
        width: WIDTH / 1.18,
        height: HEIGHT / 20,

        paddingLeft: WIDTH / 40,
        paddingRight: WIDTH / 60,

        position: "absolute",
        top: HEIGHT / 2.8,
        left: WIDTH / 15,

        borderWidth: 0.2,
        borderColor: "#3C484F",
    },

    PasswordContent: {
        position: "absolute",
        top: HEIGHT / 2.3,
        left: WIDTH / 15,

        color: "#3C484F",
    },

    Password: {
        width: WIDTH / 1.18,
        height: HEIGHT / 20,

        paddingLeft: WIDTH / 40,
        paddingRight: WIDTH / 60,

        position: "absolute",
        top: HEIGHT / 2.18,
        left: WIDTH / 15,

        borderWidth: 0.2,
        borderColor: "#3C484F",
    },

    RegisterBtn: {
        width: WIDTH / 3,
        height: HEIGHT / 20,

        justifyContent: "center",
        alignItems: "center",

        position: "absolute",
        top: HEIGHT / 1.7,
        left: WIDTH / 3,

        borderRadius: WIDTH / 80,

        backgroundColor: "#3DB6F8",
    },

    RegisterBtnTxt: {
        color: "#ffffff",
    },

    ToLogin: {
        position: "absolute",
        top: HEIGHT / 1.46,
        left: WIDTH / 3.2,

        justifyContent: "center",
        alignItems: "center",
    },

    ToLoginTxt: {
        textDecorationLine: "underline",
    },
});

export default styles;
