import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./src/navigation/RootNavigator";
import { ThemeProvider } from "styled-components/native";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./styled";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const isDark = useColorScheme() === "dark";

  const [ready, setReady] = useState<boolean>(false);

  const prepare = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      await SplashScreen.hideAsync();
      setReady(true);
    }
  };

  useEffect(() => {
    if (!ready) {
      prepare();
    }
  }, [ready]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <RootNavigator />;
    </ThemeProvider>
  );
};

export default App;
