import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/Home/index.js";
import LandingPage from "./components/LandingPage/index.js";
import Appointment from "./components/Appointment/index.js";
import UserInfo from "./components/UserInfo/index.js";
import Register from "./components/Authentication/Register/index.js";
import Login from "./components/Authentication/Login/index.js";
import HealthCheck from "./components/HealthCheck/index.js";
import HealthCheckAnswer from "./components/HealthCheck/ResponseAnswer.js";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle={"default"} />
            <Stack.Navigator initialRouteName="landingPage" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="landingPage" component={LandingPage} />
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="appointment" component={Appointment} />
                <Stack.Screen name="userInfo" component={UserInfo} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="register" component={Register} />
                <Stack.Screen name="healthCheck" component={HealthCheck} />
                <Stack.Screen name="healthCheckAnswer" component={HealthCheckAnswer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
