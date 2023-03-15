import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from '@expo-google-fonts/rubik/useFonts';

import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
} from '@expo-google-fonts/rubik';

import { Inter_400Regular } from '@expo-google-fonts/inter';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './src/screens/Dashboard';

import Settings from './src/screens/Settings';

import { ThemeProvider } from 'styled-components';

import THEME from './src/theme';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Inter_400Regular,
  });

  useEffect(() => {
    const setSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    setSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return;
  }

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
