import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import BookList from "../components/BookList";
import { BookListEntry } from "../types/BookListEntryType";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookDetails from "../components/BookDetails";

const Stack = createNativeStackNavigator();

export default function BookPage() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BookList" component={BookList}/>
      <Stack.Screen name="BookDetails" component={BookDetails}/>
    </Stack.Navigator>
  );
}
