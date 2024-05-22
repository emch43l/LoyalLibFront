import * as React from "react";
import BookListPage from "../pages/BookPage";
import ProfilePage from "../pages/ProfilePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChallengesPage from "../pages/ChallengesPage";
import RankingPage from "../pages/RankingPage";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon({ size, focused, color }) {
            return (
              <Ionicons name="person" size={size} color={color}></Ionicons>
            );
          },
        }}
      />
      <Tab.Screen
        name="Challenges"
        component={ChallengesPage}
        options={{
          tabBarIcon({ size, focused, color }) {
            return <Ionicons name="star-outline" size={size} color={color}></Ionicons>;
          },
          
        }}
      />
      <Tab.Screen
        name="Rankings"
        component={RankingPage}
        options={{
          tabBarIcon({ size, focused, color }) {
            return <Ionicons name="trophy" size={size} color={color}></Ionicons>;
          },
        }}
      />
      <Tab.Screen
        name="Books"
        component={BookListPage}
        options={{
          tabBarIcon({ size, focused, color }) {
            return <Ionicons name="list" size={size} color={color}></Ionicons>;
          },
        }}
      />
    </Tab.Navigator>
  );
}
