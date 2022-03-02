import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ChooseEvent, EventPage, Home, LoadingPage } from "../views";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="EventPage" component={EventPage} />
        <Stack.Screen name="ChooseEvent" component={ChooseEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
