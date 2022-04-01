import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import MyDrawerNavigator from "./src/navigation/MyDrawerNavigator";

function App() {
  return (
    <NavigationContainer>
      <MyDrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
