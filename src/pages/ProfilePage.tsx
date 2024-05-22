import { useContext } from "react";
import { Button, View } from "react-native";
import AuthContext from "../auth/AuthContext";

export default function ProfilePage() {

  const auth = useContext(AuthContext);

  return <View>
    <Button onPress={auth.signOut} title="Logout"></Button>
  </View>;
}
