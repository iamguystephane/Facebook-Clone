import { createContext, useState, useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { Appearance } from "react-native";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  useEffect(() => {
    const colorSchemeListener = Appearance.addChangeListener(
      ({ colorScheme }) => setColorScheme(colorScheme)
    );

    return () => colorSchemeListener.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, colorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
