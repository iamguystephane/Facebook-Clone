import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeContext } from "@/components/ThemedContext";
import { useContext } from "react";

const TabLayout = () => {
  const { theme, colorScheme } = useContext(ThemeContext);
  return (
    <Tabs
      key={colorScheme}
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: theme.inactiveTint,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.border,
        },
        headerStyle: {
          backgroundColor: theme.navBar,
          shadowColor: theme.text,
          elevation: 5,
        },
        headerTitleStyle: {
          color: theme.text,
          fontWeight: "bold",
        },    
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          headerTitle: () => (
            <ThemedText
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: theme.text,
              }}
            >
              Notifications
            </ThemedText>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Ionicons name="search-outline" size={30} color={theme.text} />
            </View>
          ),
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: "Marketplace",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "storefront" : "storefront-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: "Videos",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "play" : "play-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
