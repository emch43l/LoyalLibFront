import {
  Image,
  ScrollView,
  Text,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import { BookListEntry } from "../types/BookListEntryType";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BookListRow({ data }: { data: BookListEntry }) {
  const screenDimensions = Dimensions.get("window").width;
  const aditionalInfoContainerWidth = screenDimensions - 36 - 72;

  console.log(data.author)

  const navigation = useNavigation();

  const clickHandler = () => {
    navigation.navigate("BookDetails", { id: data.id });
  };

  return (
    <View className="flex-1 relative items-center justify-center flex-row bg-white py-2 rounded-xl mb-2">
      <View>
        <Image
          source={{ uri: data.simple_thumb }}
          className="object-contain w-[72] h-[100] rounded-md mr-2"
        />
      </View>
      <View>
        <Text
          numberOfLines={1}
          className="w-[250] flex-shrink font-roboto-bold text-lg"
        >
          {data.title}
        </Text>
        <Text className="text-sm">{data.author}</Text>
        <View>
          <ScrollView
            horizontal
            className="mt-2 flex flex-grow-0 flex-row"
            style={{
              width: aditionalInfoContainerWidth,
            }}
          >
            <Text className="font-roboto-bold text-xs py-[2] px-1 bg-gray-200 rounded-md mx-[2]">
              {data.kind}
            </Text>
            <Text className="font-roboto-bold text-xs py-[2] px-1 bg-gray-200 rounded-md mx-[2]">
              {data.epoch}
            </Text>
            <Text className="font-roboto-bold text-xs py-[2] px-1 bg-gray-200 rounded-md mx-[2]">
              {data.genre}
            </Text>
          </ScrollView>
        </View>
        <View className="mt-2 flex flex-row justify-between items-start">
          <View>
            {data.readByUser ? (
              <View className="flex flex-row">
                <Text className="text-green-600 font-roboto-bold mr-2">
                  Przeczytana
                </Text>
                <Ionicons name="checkmark-done" color={"#16a34a"} size={20}></Ionicons>
              </View>
            ) : null}
          </View>

          <Pressable
            className="bg-sky-600 py-1 px-2 rounded-md"
            onPress={clickHandler}
          >
            <Text className="font-roboto-bold text-white">Sczegóły</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
