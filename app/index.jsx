import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemedContext";
import {
  Image,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Facebook from "@/assets/images/logo-no-bg.webp";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const styles = StyleSheet.create({
    textInput: {
      borderWidth: 1,
      borderColor: "#ccc",
      color: theme.text,
      fontSize: 18,
      padding: 10,
      height: 55,
      width: 380,
      borderRadius: 8,
      backgroundColor: theme.background,
      marginBottom: 14,
    },
    scrollStyle: {
      flexGrow: 1,
      width: "100%",
      height: "100vh",
      alignItems: "center",
      justifyContent: "space-between",
    },
    button: {
      width: 380,
      borderRadius: 30,
      textAlign: "center",
      backgroundColor: "#0064e0",
      color: "white",
      padding: 15,
      fontWeight: "bold",
    },
    createAccount: {
      width: 380,
      borderRadius: 30,
      textAlign: "center",
      backgroundColor: "#0064e0",
      color: "white",
      padding: 15,
      fontWeight: "bold",
    },
  });
  return (
    <ThemedView
      className="flex-1 items-center justify-center"
      lightColor="#eff6fe"
    >
      <SafeAreaProvider>
        <SafeAreaView>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView contentContainerStyle={styles.scrollStyle}>
              <ThemedView
                style={{
                  width: "100%",
                  height: "80%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                lightColor="#eff6fe"
              >
                <Image
                  source={Facebook}
                  className="w-40 h-40"
                  style={{ marginBottom: 70 }}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter number or email"
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter number or email"
                />
                <Pressable className="w-full">
                  <ThemedText style={styles.button}>Log in</ThemedText>
                </Pressable>
                <ThemedText style={{ marginTop: 20 }}>
                  <Link href=""> Forgot Password? </Link>
                </ThemedText>
              </ThemedView>
              <ThemedText style={{ marginTop: 20, backgroundColor: 'red' }}>
                <Link href="" style={styles.createAccount}>
                  {" "}
                  Create new account{" "}
                </Link>
              </ThemedText>
            </ScrollView>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemedView>
  );
};

export default HomePage;
