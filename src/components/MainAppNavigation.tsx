import { NavigationContainer } from "@react-navigation/native";
import LandingPage from "../pages/LandingPage";
import Navigation from "./Navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";

const Nav = createNativeStackNavigator();

export default function MainAppNavigation() {
  const { isTokenValid } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Nav.Navigator>
        {isTokenValid ? (
          <Nav.Screen
            name="Home"
            component={Navigation}
            options={{ headerShown: false }}
          />
        ) : (
          <Nav.Screen
            name="Landing"
            component={LandingPage}
            options={{ headerShown: false }}
          />
        )}
      </Nav.Navigator>
    </NavigationContainer>
  );
}
