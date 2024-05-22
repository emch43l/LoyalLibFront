import { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, RefreshControl, Pressable, Button } from "react-native";
import { Challenge } from "../types/ChallengeType";
import useAxios from "../hooks/useAxios";
import ChallengeContainer from "../components/ChallengeContainer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/AppNavigationTypes";
import Ionicons from "react-native-vector-icons/Ionicons";


type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;

export default function ChallengesPage({route,navigation} : Props) {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [challenges, setChallenges] = useState<Challenge[] | null>(null);
  const axios = useAxios();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getChallenges();
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  navigation.setOptions({
    headerRight: () => 
      <Pressable className="mr-5 flex flex-row" onPress={generateChallenge}>
        <Ionicons name="dice" size={18}></Ionicons>
        <Text className="ml-2 font-roboto-bold">Generuj</Text>
      </Pressable>
    
  })

  const generateChallenge = () => {
    axios.post("challenges/generate").then(getChallenges)
  }

  const getChallenges = () => {
    return axios
      .get<Challenge[]>("challenges")
      .then((response) => response.data)
      .then(setChallenges)
      .catch(console.log);
  };

  useEffect(() => {
    getChallenges();
  }, []);

  return (
    <View>
      
      <View>
        {challenges === null ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                ></RefreshControl>
              }
              className="rounded-lg"
              contentContainerStyle={{paddingBottom: 10}}
              data={challenges}
              renderItem={(item) => (
                <ChallengeContainer challenge={item.item} key={item.index} />
              )}
            />
          </>
        )}
      </View>
    </View>
  );
}
