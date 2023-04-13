import { View, Text, ScrollView } from "react-native";
import styles from "./styles";

export default function ResponseAnswer({ navigation }) {
    return (
        <View style={styles.ResponseAnswerContainer}>
            <ScrollView bounces={false} pagingEnabled={"200"} showsVerticalScrollIndicator={false} style={styles.ScrollView}>
                <View style={styles.GraphContainer}></View>
                <View style={styles.AdviceContainer}>
                    <Text style={styles.AdviceTitle}>Advice</Text>
                    <Text style={styles.AdviceTitle2}>For your symptom</Text>
                </View>
                <View style={{ width: 10, height: 200 }} />
            </ScrollView>
        </View>
    );
}
