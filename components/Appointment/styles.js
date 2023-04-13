import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    AppointmentContainer: {
        width: WIDTH,
        height: HEIGHT,
        flexDirection: "column",
        alignItems: "center",

        backgroundColor: "#fff",
    },

    BackBtn: {
        width: WIDTH / 10,
        height: WIDTH / 10,

        position: "absolute",
        top: HEIGHT / 15,
        left: HEIGHT / 40,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 5,

        backgroundColor: "#3DB6F8",
    },

    BackBtnIcon: {
        width: WIDTH / 20,
        height: WIDTH / 20,
    },

    InputContainer: {
        width: WIDTH / 1.05,
        height: HEIGHT / 18,

        position: "absolute",
        top: HEIGHT / 1.09,

        flexDirection: "row",
        alignItems: "center",

        borderRadius: WIDTH / 5,

        backgroundColor: "#3DB6F8",
    },
    ImageBtn: {
        width: WIDTH / 8,
        height: WIDTH / 8,

        position: "absolute",
        left: 0,

        justifyContent: "center",
        alignItems: "center",

        marginLeft: WIDTH / 20,

        borderRadius: WIDTH / 5,

        // backgroundColor: "#ccc",
    },

    ImageBtnIcon: {
        width: WIDTH / 15,
        height: WIDTH / 15,
    },
    Input: {
        width: WIDTH / 1.6,
        height: "70%",

        position: "absolute",
        left: WIDTH / 5,
        paddingLeft: WIDTH / 30,
        paddingRight: WIDTH / 50,

        fontSize: WIDTH / 30,

        color: "#7A7A7A",
        borderRadius: WIDTH / 5,

        backgroundColor: "#FFFFFF",
    },

    SentBtn: {
        width: WIDTH / 8,
        height: WIDTH / 8,

        position: "absolute",
        right: 0,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 5,

        // backgroundColor: "#ccc",
    },

    SentBtnIcon: {
        width: WIDTH / 15,
        height: WIDTH / 15,
        marginLeft: WIDTH / 60,
    },

    MessageContainer: {
        width: WIDTH / 1.1,
        height: HEIGHT / 1.3,

        position: "absolute",
        top: HEIGHT / 8,

        // backgroundColor: "#ccc",
    },
});
export default styles;
