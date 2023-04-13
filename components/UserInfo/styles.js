import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    UserInfoContainer: {
        width: WIDTH,
        height: HEIGHT,

        flexDirection: "column",
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
    AvatarContainer: {
        width: WIDTH,
        height: HEIGHT / 3.5,

        justifyContent: "center",
        alignContent: "center",

        overflow: "hidden",

        borderBottomLeftRadius: WIDTH / 10,
        borderBottomRightRadius: WIDTH / 10,

        backgroundColor: "#ccc",
    },

    Avatar: {
        width: WIDTH,
        height: HEIGHT / 3.5,
    },

    AvatarCover: {
        width: WIDTH,
        height: HEIGHT / 3.5,

        backgroundColor: "#00000066",
    },

    ChangeInfo: {
        width: WIDTH / 3.5,
        height: HEIGHT / 20,

        justifyContent: "center",
        alignItems: "center",

        position: "absolute",
        top: HEIGHT / 3.8,
        left: WIDTH / 2.8,

        borderRadius: WIDTH / 50,

        backgroundColor: "#3DB6F8",
    },

    ChangeInfoText: {
        fontSize: WIDTH / 28,
        fontWeight: "600",
        color: "#FFFFFF",
    },

    Username: {
        position: "absolute",
        top: HEIGHT / 2.9,

        width: WIDTH,
        textAlign: "center",

        fontSize: WIDTH / 15,
        fontWeight: "600",
    },

    UserID: {
        position: "absolute",
        top: HEIGHT / 2.5,

        width: WIDTH,
        textAlign: "center",

        fontSize: WIDTH / 30,
        fontWeight: "300",
    },

    FunctionsContainer: {
        width: WIDTH,
        height: HEIGHT / 18,

        position: "absolute",
        top: HEIGHT / 2.2,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

        borderWidth: 1,
        borderColor: "#ccc",
    },

    FunctionsBtn: {
        width: "30%",
        height: "60%",
    },

    FunctionsImage: {
        width: "100%",
        height: "100%",
    },

    FlatlistContainer: {
        width: WIDTH,
        height: HEIGHT / 1.12,

        marginTop: HEIGHT / 4.4,
    },

    ItemContainer: {
        width: WIDTH / 1.05,
        height: HEIGHT / 4,
        marginTop: HEIGHT / 35,
        marginBottom: HEIGHT / 30,
        marginLeft: WIDTH / 40,

        borderRadius: WIDTH / 30,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        backgroundColor: "#fff",
    },

    ItemAvatar: {
        width: WIDTH / 4,
        height: WIDTH / 4,

        position: "absolute",

        marginTop: WIDTH / 20,
        marginLeft: WIDTH / 20,

        borderRadius: WIDTH / 2,
    },

    DoctorName: {
        position: "absolute",
        marginTop: HEIGHT / 18,
        marginLeft: WIDTH / 3,
        fontSize: WIDTH / 20,
        fontWeight: "500",
    },

    Work: {
        position: "absolute",
        marginTop: HEIGHT / 12,
        marginLeft: WIDTH / 3,
        fontSize: WIDTH / 20,
        fontWeight: "300",
    },

    PhoneContainer: {
        width: WIDTH / 9,
        height: HEIGHT / 20,

        position: "absolute",
        bottom: HEIGHT / 50,
        right: WIDTH / 15,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 40,

        backgroundColor: "#6AE6E0",
    },

    PhoneImage: {
        width: "60%",
        height: "80%",

        tintColor: "#fff",
    },

    MessageContainer: {
        width: WIDTH / 9,
        height: HEIGHT / 20,

        position: "absolute",
        bottom: HEIGHT / 50,
        right: WIDTH / 5,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 40,

        backgroundColor: "#C67700",
    },

    MessageImage: {
        width: "60%",
        height: "80%",

        tintColor: "#fff",
    },
});

export default styles;
