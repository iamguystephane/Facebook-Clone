import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const HomePage = () => {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedText>Hello, this is the homepage.</ThemedText>
      <ThemedText>
        <Link href="/(tabs)/notifications">Profile Page</Link>
      </ThemedText>
    </ThemedView>
  );
};

export default HomePage;
