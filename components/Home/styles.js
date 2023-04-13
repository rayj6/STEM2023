import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

let HeaderHeight = HEIGHT / 2;

const styles = StyleSheet.create({
    Container: {
        display: "flex",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },

    HeaderContainer: {
        width: WIDTH,
        height: HeaderHeight,

        borderBottomLeftRadius: WIDTH / 10,
        borderBottomRightRadius: WIDTH / 10,

        alignItems: "center",

        backgroundColor: "#3DB6F8",
    },

    InfoContainer: {
        width: WIDTH / 2.5,
        height: HEIGHT / 15,

        position: "absolute",
        top: HEIGHT / 15,
        left: WIDTH / 20,

        alignItems: "center",
        flexDirection: "row",

        // backgroundColor: "#ccc",
    },

    InfoImageContainer: {
        width: "28%",
        height: "78%",

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 5,

        backgroundColor: "#fff",
    },

    InfoImage: {
        width: "60%",
        height: "80%",
    },

    InfoTextContainer: {
        flexDirection: "column",
        width: "70%",
        height: "80%",

        justifyContent: "center",

        marginLeft: "5%",

        // backgroundColor: "#fff",
    },

    InfoTextTitle: {
        fontSize: WIDTH / 30,
        fontWeight: "400",
        color: "#fff",
    },

    InfoTextUser: {
        fontSize: WIDTH / 25,
        fontWeight: "500",
        color: "#fff",
    },

    AlertContainer: {
        width: WIDTH / 9,
        height: HEIGHT / 20,

        position: "absolute",
        top: HEIGHT / 14,
        right: WIDTH / 20,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 5,

        backgroundColor: "#fff",
    },

    AlertImage: {
        width: "60%",
        height: "60%",
    },

    SearchBtn: {
        width: WIDTH / 9,
        height: HEIGHT / 20,

        position: "absolute",
        top: HEIGHT / 14,
        right: WIDTH / 5,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 5,

        backgroundColor: "#fff",
    },

    SearchBtnImage: {
        position: "absolute",
        top: "25%",

        width: "50%",
        height: "50%",
    },

    Search: {},
    Searching: {},

    TitleContainer: {
        width: WIDTH / 1.2,
        height: HEIGHT / 5,

        position: "absolute",
        top: HEIGHT / 6,
        left: WIDTH / 20,

        justifyContent: "center",

        // backgroundColor: "#ccc",
    },

    TitleText: {
        fontSize: WIDTH / 10,
        fontWeight: "800",
        letterSpacing: 4,

        color: "#fff",
    },

    HealthCheckContainer: {
        width: WIDTH / 3,
        height: HEIGHT / 20,

        position: "absolute",
        bottom: HEIGHT / 30,
        left: WIDTH / 15,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 40,

        backgroundColor: "#fff",
    },

    HealthCheckButton: {
        width: "95%",
        height: "82%",

        flexDirection: "row",
        alignItems: "center",

        borderRadius: WIDTH / 40,

        backgroundColor: "#1F8AF1",
    },

    HealthCheckImage: {
        width: "30%",
        height: "60%",

        tintColor: "#fff",
    },

    HealthCheckTitle: {
        fontSize: WIDTH / 25,
        marginLeft: "5%",

        color: "#fff",
    },

    HealthConsultContainer: {
        width: WIDTH / 3,
        height: HEIGHT / 20,

        position: "absolute",
        bottom: HEIGHT / 30,
        left: WIDTH / 2.3,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: WIDTH / 40,

        backgroundColor: "#fff",
    },

    HealthConsultButton: {
        width: "95%",
        height: "82%",

        flexDirection: "row",
        alignItems: "center",

        borderRadius: WIDTH / 40,

        backgroundColor: "#1F8AF1",
    },

    HealthConsultImage: {
        width: "30%",
        height: "60%",

        tintColor: "#fff",
    },

    HealthConsultTitle: {
        fontSize: WIDTH / 25,
        marginLeft: "5%",

        color: "#fff",
    },

    PhoneContainer: {
        width: WIDTH / 9,
        height: HEIGHT / 20,

        position: "absolute",
        bottom: HEIGHT / 30,
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

    BodyTitle: {
        fontSize: WIDTH / 18,
        fontWeight: "300",

        position: "absolute",
        marginTop: HEIGHT / 1.85,
        left: WIDTH / 15,
    },

    FlatList: {
        width: WIDTH,
        height: HEIGHT / 1.4,
        marginTop: HEIGHT / 10,
        marginBottom: HEIGHT / 30,

        // backgroundColor: "#ccc",
    },

    empty: {
        fontSize: WIDTH / 25,
        fontWeight: "200",

        marginTop: HEIGHT / 20,

        left: WIDTH / 4,
    },

    BodyItemContainer: {
        width: WIDTH / 2.5,
        height: HEIGHT / 5,

        marginLeft: WIDTH / 20,
        marginRight: WIDTH / 20,
        marginTop: HEIGHT / 30,
        marginBottom: HEIGHT / 30,

        borderRadius: WIDTH / 40,

        backgroundColor: "#ccc",
    },

    NavBarSurround: {
        overflow: "hidden",

        width: WIDTH / 1.2,
        height: HEIGHT / 12,

        position: "absolute",
        bottom: 10,

        borderRadius: WIDTH / 40,

        flexDirection: "row",

        alignItems: "center",

        paddingLeft: WIDTH / 15,

        backgroundColor: "#fff",
    },

    AddDisease: {
        overflow: "hidden",
        width: WIDTH / 4,
        height: HEIGHT / 20,

        position: "absolute",
        bottom: 20,
        right: WIDTH / 15,

        borderRadius: WIDTH / 5,

        backgroundColor: "#6AE6E066",
    },
});

export default styles;
