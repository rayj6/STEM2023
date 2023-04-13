import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    HealthCheckContainer: {
        width: WIDTH,
        height: HEIGHT,

        flexDirection: "column",
        alignItems: "center",
    },

    Title: {
        position: "absolute",
        top: HEIGHT / 10,
        fontSize: WIDTH / 18,
    },

    EnterSymptom: {
        width: WIDTH / 1.2,
        height: HEIGHT / 20,

        position: "absolute",
        top: HEIGHT / 6.5,

        borderRadius: WIDTH / 80,

        paddingLeft: WIDTH / 20,
        paddingRight: WIDTH / 30,

        borderWidth: 0.2,
    },

    DoneGetSymptom: {
        width: WIDTH / 6,
        height: HEIGHT / 20,

        position: "absolute",
        top: HEIGHT / 6.5,
        right: WIDTH / 12,

        justifyContent: "center",
        alignItems: "center",

        borderTopRightRadius: WIDTH / 80,
        borderBottomRightRadius: WIDTH / 80,

        backgroundColor: "#427941",
    },

    DoneGetSymptomImage: {
        width: "60%",
        height: "60%",
    },

    FlatListContainer: {
        width: WIDTH,
        height: HEIGHT / 1.2,
        position: "absolute",
        top: HEIGHT / 4.5,
        left: 0,
        // backgroundColor: "#ccc",
    },

    FlatList: {
        width: WIDTH,
    },

    FlatListProps: {
        width: WIDTH / 2.5,
        height: HEIGHT / 4,

        marginVertical: HEIGHT / 50,
        marginHorizontal: WIDTH / 20,

        borderRadius: WIDTH / 40,

        alignItems: "center",

        flex: 1,

        borderWidth: 0.2,
    },

    PropsText: {
        width: "95%",
        textAlign: "center",
        position: "absolute",
        bottom: WIDTH / 30,
    },

    PropsImage: {
        width: "80%",
        height: "70%",

        top: WIDTH / 30,

        borderWidth: 0.2,
        borderRadius: WIDTH / 40,
    },

    ScrollView: {
        width: WIDTH,
    },

    ResponseAnswerContainer: {
        width: WIDTH,
        height: HEIGHT,

        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#6DCCFF",
    },

    GraphContainer: {
        width: WIDTH / 1.1,
        height: HEIGHT / 3,

        // position: "absolute",
        top: HEIGHT / 10,
        left: WIDTH / 20,

        borderRadius: WIDTH / 50,

        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 10,
        },
        shadowOpacity: 0.4,
        shadowRadius: 30,
    },

    AdviceContainer: {
        width: WIDTH / 1.1,
        height: HEIGHT / 1.15,

        // position: "absolute",
        top: HEIGHT / 6,
        left: WIDTH / 20,

        padding: 20,

        borderRadius: WIDTH / 50,

        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 10,
        },
        shadowOpacity: 0.4,
        shadowRadius: 30,
    },

    AdviceTitle: {
        fontSize: WIDTH / 12,
        fontWeight: "600",
        color: "#4F91B6",
    },

    AdviceTitle2: {
        fontSize: WIDTH / 25,
        fontWeight: "300",
    },
});

export default styles;
