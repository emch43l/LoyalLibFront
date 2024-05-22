import { useNavigation } from "@react-navigation/native";
import { Button, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function StartupScreen() {
  const navigation = useNavigation();

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
        </View>
      </View>
    </LinearGradient>
  );
}
