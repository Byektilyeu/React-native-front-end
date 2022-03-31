import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useLayoutEffect } from "react";
// import { useHeaderHeight } from "@react-navigation/stack";
import useBook from "../hooks/useBook";
import { Feather } from "@expo/vector-icons";

const BookDetailScreen = (props) => {
  // booksJs dotor baigaa book nii data ni params gedegeer propsoor ni orj irj bna
  // console.log("<--------------->", props.route.params.book);

  const id = props.route.params.book;
  // console.log(id);
  const [book, error] = useBook(id);

  // headeriin unduriig uzdeg code
  // const height = useHeaderHeight();
  // console.log(height);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Feather
          name="menu"
          size={24}
          color="white"
          style={{ marginRight: 20 }}
          onPress={() => console.log("..")}
        />
      ),
    });
  }, [props.navigation]);

  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа ! {error}</Text>
    );
  }

  if (!book) {
    return null;
  }

  return (
    <View style={{ padding: 20 }}>
      <Image
        style={{ width: 300, height: 400, alignSelf: "center" }}
        source={{ uri: "https://data.internom.mn/media/images" + book.photo }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", padding: 10 }}>
        {book.name}
      </Text>
      <Text>{book.content}</Text>
      <Button onPress={() => props.navigation.goBack()} title="Буцах" />
    </View>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({});
