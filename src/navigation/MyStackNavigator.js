// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// import HomeScreen from "../screens/HomeScreen.js";
// import BookDetailScreen from "../screens/BookDetailScreen.js";

// const Stack = createStackNavigator();

// export default () => (
//   <Stack.Navigator initialRouteName="Home">
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={({ navigation }) => ({
//         title: "Амазон номын дэлгүүр",
//         headerStyle: { backgroundColor: "#5186F3" },
//         headerTintColor: "white",
//         headerTitleStyle: { fontSize: 22 },
//       })}
//     />

//     <Stack.Screen
//       name="Detail"
//       component={BookDetailScreen}
//       options={{
//         title: "Амазон номын дэлгүүр",
//         headerBackTitleVisible: true,
//         headerBackTitle: "Буцах",
//         headerTruncatedBackTitle: "",
//         headerStyle: { backgroundColor: "#5186F3" },
//         headerTintColor: "white",
//         headerTitleStyle: { fontSize: 22 },
//       }}
//     />
//   </Stack.Navigator>
// );
