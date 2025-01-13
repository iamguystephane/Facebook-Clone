import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/ThemedContext";
import '@/global.css'
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";
import {
  StatusBar,
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from "expo-status-bar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  
    useEffect(() => {
      const colorSchemeListener = Appearance.addChangeListener(
        ({ colorScheme }) => setColorScheme(colorScheme)
      );
  
      return () => colorSchemeListener.remove();
    }, []);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Update status bar dynamically
  useEffect(() => {
    setStatusBarBackgroundColor(theme.background, true);
    setStatusBarStyle(colorScheme === "dark" ? "light" : "dark");
  }, [colorScheme]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <StatusBar />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
            shadowColor: colorScheme === "dark" ? "#f9f9f9" : "#000",
            elevation: 5,
          },
          contentStyle: {
            width: "100%",
            height: "100%",
          },
          headerStyle: {
            backgroundColor: theme.navBar,
            shadowColor: theme.text,
            elevation: 15,
          },
          headerTitleStyle: {
            color: theme.text,
            fontWeight: "bold",
          }
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="index"
          options={{ headerShown: true, title: "Sign Up" }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
