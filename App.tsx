import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
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
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
