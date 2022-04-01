import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import Search from "../components/Search";
import useCategory from "../hooks/useCategory";
import CategoryBookList from "../components/CategoryBookList";
import Spinner from "../components/Spinner";
import MyHeaderButton from "../components/MyHeaderButton";
import {
  HeaderButtons,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [localSearchText, setLocalSearchText] = useState("");
  const [serverSearchText, setServerSearchText] = useState("");
  const [categories, errorMessage, loading] = useCategory();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Цэс"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, localSearchText]);

  console.log("---------------", navigation);

  const searchBookFromServer = () => {
    console.log(`Serverees ${localSearchText} utgaar haij ehellee`);
    setServerSearchText(localSearchText);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <Spinner />
      ) : (
        <View>
          <Search
            value={localSearchText}
            onValueChange={setLocalSearchText}
            onFinishEnter={searchBookFromServer}
          />

          {errorMessage ? (
            <Text style={{ marginHorizontal: 20, color: "red" }}>
              {errorMessage}
            </Text>
          ) : null}

          <ScrollView style={{ marginTop: 20 }}>
            {categories.map((category) => (
              <CategoryBookList
                searchLocalValue={localSearchText}
                searchServerValue={serverSearchText}
                key={category._id}
                style={{ marginVertical: 10 }}
                data={category}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const css = StyleSheet.create({});
