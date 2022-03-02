import { useState } from "react";
import Routes from "./navigation";
import { LoadingPage } from "./views";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

const fetchLoading = async  () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return;
};

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  const prepare = async () => {
    await fetchLoading();
    setAppLoaded(true);
  };

  useEffect(() => {
    prepare();
  }, []);

  if (!appLoaded) {
    return <LoadingPage />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#282828" />
      <Routes />
    </>
  );
}
