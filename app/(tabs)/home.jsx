import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const HomePage = () => {
  return (
    <>
      <ThemedView style={{ flex: 1}}>
        <ThemedText> Home Page </ThemedText>
      </ThemedView>
    </>
  );
};

export default HomePage;