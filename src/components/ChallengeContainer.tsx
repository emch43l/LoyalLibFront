import { View, Text, Pressable } from "react-native";
import { Challenge } from "../types/ChallengeType";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function ChallengeContainer({
  challenge,
}: {
  challenge: Challenge;
}) {
  return (
    <View className="bg-white mt-3 mx-2 rounded-md px-2 py-2">
      <View className="flex flex-row justify-between">
        <View>
          <Text className="font-roboto-bold text-lg">{challenge.name}</Text>
        </View>
        <LinearGradient
          colors={["rgb(253 230 138)", "rgb(254 243 199)"]}
          start={[0.8, 0.3]}
          className="flex flex-row items-center px-3  rounded-md"
        >
          <Ionicons name="trophy" size={18} color={"gold"}></Ionicons>
          <Text className="font-roboto-bold text-lg ml-2 shadow-md">
            {challenge.points}
          </Text>
        </LinearGradient>
      </View>
      <View className="mb-2">
        <Text>Status przeczytanych książek</Text>
        {challenge.booksCount == challenge.completedBooksCount ? (
          <Text className="font-roboto-bold text-green-600">
            {challenge.completedBooksCount} / {challenge.booksCount} Ukończorny
          </Text>
        ) : (
          <Text className="font-roboto-bold">
            {challenge.completedBooksCount} / {challenge.booksCount}
          </Text>
        )}
      </View>
      <View className="h-[1] bg-black opacity-5"></View>
      {challenge.books.map((b,i) => (
        <View key={i} className="mt-2">
          <View className="flex justify-between flex-row items-center">
            <View>
              <Text
                className="text-md font-roboto-bold w-[250]"
                numberOfLines={1}
              >
                {b.title}
              </Text>
              <Text className="text-xs">{b.author}</Text>
            </View>
            {b.isCompleted ? (
              <View className="bg-green-300 px-2 py-1 rounded-md">
                <Ionicons name="checkmark" size={20}></Ionicons>
              </View>
            ) : (
              <View className="bg-gray-100 px-2 py-1 rounded-md">
                <Ionicons name="checkmark" size={20}></Ionicons>
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}
