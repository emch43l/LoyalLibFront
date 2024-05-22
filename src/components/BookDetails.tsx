import { useRoute } from "@react-navigation/native";
import { View, Text, Pressable, Image, Linking } from "react-native";
import { BookDetailsScreenProps } from "../types/AppNavigationTypes";
import { useEffect, useState } from "react";
import { Book } from "../types/BookType";
import useAxios from "../hooks/useAxios";

export default function BookDetails() {
  const [book, setBook] = useState<Book | null>(null);
  const { params } = useRoute<BookDetailsScreenProps<"BookDetails">["route"]>();
  const axios = useAxios();

  useEffect(() => {
    getBook()
  }, []);

  const getBook = () => {
    return axios
      .get<Book>(`books/single/${params.id}`)
      .then((response) => response.data)
      .then(setBook);
  };

  const readBook = () => {
    console.log(book.id);
    axios.post(`challenges`, { bookId: book.id }).then(getBook);
  };

  return (
    <View>
      {book === null ? (
        <Text>Loading...</Text>
      ) : (
        <View className="w-full h-full flex items-center mt-[25%]">
          <View className="w-full">
            <View className="mx-5">
              <View className="flex flex-row items-center">
                <View className="mr-5">
                  <Image
                    className="h-48 w-32 object-fill rounded-xl"
                    source={{ uri: book.simple_thumb }}
                  />
                </View>
                <View className="h-48 w-[2] bg-gray-200 mr-5"></View>
                <View>
                  <View>
                    <Text className="text-xs">Tytuł</Text>
                    <Text
                      className="font-roboto-bold text-xl w-[150] leading-6"
                      numberOfLines={3}
                    >
                      {book.title}
                    </Text>
                  </View>

                  <View className="mt-4">
                    <Text className="text-xs">Autor</Text>
                    <Text
                      className="font-roboto-bold text-md w-[150] leading-4"
                      numberOfLines={2}
                    >
                      {book.author}
                    </Text>
                  </View>
                  <View className="mt-2">
                    <Text className="text-xs">Gatunek</Text>
                    <Text
                      className="font-roboto-bold text-md w-[150] leading-4"
                      numberOfLines={1}
                    >
                      {book.genre}
                    </Text>
                  </View>
                  <View className="mt-2">
                    <Text className="text-xs">Epoka</Text>
                    <Text
                      className="font-roboto-bold text-md w-[150] leading-4"
                      numberOfLines={1}
                    >
                      {book.epoch}
                    </Text>
                  </View>
                  <View className="mt-2">
                    <Text className="text-xs">Rodzaj</Text>
                    <Text
                      className="font-roboto-bold text-md w-[150] leading-4"
                      numberOfLines={1}
                    >
                      {book.kind}
                    </Text>
                  </View>
                </View>
              </View>
              <View className="mt-10">
                {book.readByUser ? (
                  <Pressable
                    style={{ backgroundColor: book.cover_color }}
                    className="w-full h-[50] flex flex-row items-center justify-center rounded-md mt-2 opacity-50"
                  >
                    <Text className="text-white font-roboto-bold uppercase">
                      Przeczytana
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable
                    style={{ backgroundColor: book.cover_color }}
                    className="w-full h-[50] flex flex-row items-center justify-center rounded-md mt-2"
                    onPress={readBook}
                  >
                    <Text className="text-white font-roboto-bold uppercase">
                      Oznacz jako przeczytaną
                    </Text>
                  </Pressable>
                )}

                <View className="mt-5">
                  <Pressable onPress={() => Linking.openURL(book.url)}>
                    <Text className="text-center underline text-lg">
                      Strona na której przeczytasz książkę
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
