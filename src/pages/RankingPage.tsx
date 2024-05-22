import { FlatList, RefreshControl, Text, View } from "react-native";
import useAxios from "../hooks/useAxios";
import { Ranking } from "../types/RankingType";
import { useEffect, useState, useCallback } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RankingPage() {
  const [rankings, setRankings] = useState<Ranking[] | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const axios = useAxios();

  useEffect(() => {
    getRankings();
  }, []);

  const getRankings = () => {
    return axios
      .get<Ranking[]>("ranking")
      .then((response) => response.data)
      .then(setRankings);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getRankings();
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <View>
      {rankings === null ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <FlatList
            data={rankings.sort((a,b) => b.pointsCount - a.pointsCount)}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item,index }) => (
              <View>
                <View className="flex flex-row justify-between mt-2 bg-white rounded-md mx-2 p-4">
                  <View className="flex flex-row justify-center items-center">
                    <Text className="font-roboto-bold">
                        #{index + 1}
                    </Text>
                    <Text className="uppercase font-roboto-bold ml-2 w-[50]" numberOfLines={1}>
                      {item.userName}
                    </Text>
                  </View>
                  <View className="w-[1] bg-black opacity-10"></View>
                  <View className="flex flex-row items-center justify-center">
                    <View className="mr-2">
                      <Text className="text-xs opacity-25 ml-1">
                        Przeczytane książki
                      </Text>
                      <Text className="text-xs opacity-25 ml-1">
                        Ukończone wyzwania
                      </Text>
                    </View>
                    <View className="">
                      <Text className="font-black ml-1">
                        {item.readBooksCount}
                      </Text>
                      <Text className="font-black ml-1">
                        {item.completedChallengesCount}
                      </Text>
                    </View>
                  </View>
                  <View className="w-[1] bg-black opacity-10"></View>

                  <View className="">
                    <Text className="font-black ml-1">Punkty</Text>
                    <Text className="font-black ml-1 text-center">{item.pointsCount}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}
