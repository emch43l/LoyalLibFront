import { useNavigation } from "@react-navigation/native";
import { Button, View, Text, Pressable, Modal, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useAssets } from "expo-asset";

export default function StartupScreen() {
  const navigation = useNavigation();
  const [open, setOpen] = useState<boolean>(false);
  const [assets, error] = useAssets([require("../../assets/wsei-logo.png")]);

  return (
    <LinearGradient
      colors={["rgba(94,123,143,1)", "rgba(172,192,205,1)"]}
      className="absolute bg-white w-full h-full flex flex-row justify-center items-center"
    >
      <View>
        <View>
          <View>
            <Pressable
              onPress={() => navigation.navigate("Login")}
              className="w-[250] h-[60] mt-5 flex items-center justify-center bg-gray-100 rounded-md shadow-md "
            >
              <Text className="font-roboto-bold text-gray-800 text-lg">
                Logowanie
              </Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => navigation.navigate("Register")}
              className="w-[250] h-[60] mt-5 flex items-center justify-center bg-gray-100 rounded-md shadow-md "
            >
              <Text className="font-roboto-bold text-gray-800 text-lg">
                Rejestracja
              </Text>
            </Pressable>
          </View>
          <View>
            <Pressable onPress={() => setOpen(true)}>
              <Text className="text-center mt-2 text-white font-bold underline text-lg uppercase">
                Twórcy
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={open}
        onRequestClose={() => {
          setOpen(false);
        }}
      >
        <View>
          <View className="mt-8">
            {assets ? (
              <Image
                className="h-[80]"
                resizeMode="contain"
                source={{ uri: assets[0].uri }}
              />
            ) : null}
            <View className="flex items-center">
              <Text className="mt-8 mb-4 font-bold text-2xl">Autorzy</Text>
              <Text>Michał Mierzwa</Text>
              <Text>Tomasz Michniak</Text>
            </View>

            <Pressable
              className="mt-20 border-2 border-black flex items-center w-[50%] mx-auto rounded-md bg-gray-200 py-2"
              onPress={() => setOpen(false)}
            >
              <Text className="font-bold">Zamknij</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}
