import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./src/navigation/RootNavigator";

SplashScreen.preventAutoHideAsync();

const App = () => {
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

  return <RootNavigator />;
};

export default App;
