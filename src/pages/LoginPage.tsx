import { LinearGradient } from "expo-linear-gradient";
import { useContext, useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import AuthContext from "../auth/AuthContext";

export default function LoginPage() {
  const auth = useContext(AuthContext);

  const [email, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const login = () => {
    auth.signIn(email,password);
  };

  return (
    <LinearGradient
      colors={["rgba(94,123,143,1)", "rgba(172,192,205,1)"]}
      className="absolute bg-white w-full h-full flex flex-row justify-center items-center"
    >
      <View>
        <View>
          <View className="mt-4">
            <Text className="text-gray-200 font-bold">Email</Text>
            <View className="w-[250] h-[40] mt-1 flex items-center justify-center bg-gray-100 rounded-md shadow-md ">
              <TextInput
                onChangeText={setUsername}
                className="w-full h-full px-5"
              />
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-gray-200 font-bold">Hasło</Text>
            <View className="w-[250] h-[40] mt-1 flex items-center justify-center bg-gray-100 rounded-md shadow-md ">
              <TextInput
                onChangeText={setPassword}
                secureTextEntry
                className="w-full h-full px-5"
              />
            </View>
          </View>
          <View>
            <Pressable
              onPress={login}
              className="w-[250] h-[60] mt-16 flex items-center justify-center bg-gray-100 rounded-md shadow-md "
            >
              <Text className="font-roboto-bold text-gray-800 text-lg">
                Zaloguj się
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
