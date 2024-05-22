import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  RefreshControl,
  TextInput,
  ScrollView,
} from "react-native";
import { BookListEntry } from "../types/BookListEntryType";
import BookListRow from "./BookListRow";
import { useEffect, useState, useCallback, useRef } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import useAxios from "../hooks/useAxios";

export default function BookList() {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [books, setBooks] = useState<BookListEntry[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query,setQuery] = useState<string>("");
  const [applyQuery,setApplyQuery] = useState<boolean>(false);
  const axios = useAxios();


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getBooks();
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, [page,query,applyQuery]);

  const searchBook = () => {
    setApplyQuery(true);
    getBooks();
  }

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  const getBooks = () => {

    const url = !applyQuery ? `books/${page}` : `books/${page}?query=${query}`

    return axios
      .get<BookListEntry[]>(url)
      .then((response) => response.data)
      .then(setBooks)
      .catch(console.log);
  };

  useEffect(() => {
    getBooks()
  }, [page,applyQuery]);

  return (
    <View>
      {books === null ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <View className="my-2">
            <View className="flex flex-row justify-between mx-2 shadow-xl">
              <TextInput className="w-[75%] h-[45] rounded-md bg-white" onChangeText={setQuery}>

              </TextInput>
              <Pressable className="w-[20%] rounded-md bg-sky-600 flex items-center justify-center" onPress={searchBook}>
                <Ionicons name="search" color={"#ffffff"} size={25}></Ionicons>
              </Pressable>
            </View>
          </View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              ></RefreshControl>
            }
            contentContainerStyle={{ paddingBottom: 150 }}
           
          >
            {books.map((book,index) => <BookListRow data={book} key={index}/>) }
          </ScrollView>
          <View className="absolute bottom-0 w-full">
            <View className="flex flex-row justify-between absolute left-0 right-0 bottom-[60] mx-5 mb-5">
              <Pressable
                onPress={prevPage}
                className="bg-white rounded-full p-3 shadow-lg"
              >
                <Ionicons name="arrow-back-outline" size={30}></Ionicons>
              </Pressable>
              <Pressable
                onPress={nextPage}
                className="bg-white rounded-full p-3 shadow-lg"
              >
                <Ionicons name="arrow-forward-outline" size={30}></Ionicons>
              </Pressable>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
