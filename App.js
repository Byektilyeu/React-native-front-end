import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawerNavigator from "./src/navigation/MyDrawerNavigator";
import { registerRootComponent } from "expo";

function App() {
  return (
    <NavigationContainer>
      <MyDrawerNavigator />
    </NavigationContainer>
  );
}
registerRootComponent(App);
export default App;
