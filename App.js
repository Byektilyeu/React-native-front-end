import * as React from "react";
// import { NavigationContainer } from "@react-navigation/stack";

// import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import BookDetailScreen from "./src/screens/BookDetailScreen.js";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <MyDrawerNavigator /> */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: "Амазон номын дэлгүүр",
              headerStyle: { backgroundColor: "#5186F3" },
              headerTintColor: "white",
              headerTitleStyle: { fontSize: 22 },
            })}
          />

          <Stack.Screen
            name="Detail"
            component={BookDetailScreen}
            options={{
              title: "Амазон номын дэлгүүр",
              headerBackTitleVisible: true,
              headerBackTitle: "Буцах",
              headerTruncatedBackTitle: "",
              headerStyle: { backgroundColor: "#5186F3" },
              headerTintColor: "white",
              headerTitleStyle: { fontSize: 22 },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
