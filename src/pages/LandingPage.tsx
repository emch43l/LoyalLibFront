import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartupScreen from "./StartupScreen";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { View } from "react-native";

const LandingPageStack = createNativeStackNavigator();

export default function LandingPage() {
  return (
    <LandingPageStack.Navigator>
      <LandingPageStack.Screen
        name="StartupScreen"
        component={StartupScreen}
        options={{ headerShown: false, }}
      />
      <LandingPageStack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <LandingPageStack.Screen
        name="Register"
        component={RegisterPage}
        options={{ headerShown: false }}
      />
    </LandingPageStack.Navigator>
  );
}
