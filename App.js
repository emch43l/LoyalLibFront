import { Text} from 'react-native';
import { useFonts } from 'expo-font'
import Navigation from './src/components/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/auth/AuthProvider';
import LandingPage from './src/pages/LandingPage';
import MainAppNavigation from './src/components/MainAppNavigation';


export default function App() {

  const [fonts] = useFonts({
    'Roboto-Bold': require("./assets/fonts/Roboto-Bold.ttf")
  })

  if(!fonts) {
    return (
      <Text>Loading...</Text>
    )
  }

  return (
    <AuthProvider>
      <MainAppNavigation/>
    </AuthProvider>
  );
}
