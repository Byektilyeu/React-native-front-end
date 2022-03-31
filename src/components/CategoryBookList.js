import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Book from "./Book";
import useBooks from "../hooks/useBooks";
import Spinner from "./Spinner";

const CategoryBookList = ({
  data,
  style,
  searchLocalValue,
  searchServerValue,
}) => {
  const [books, errorMessage, searchBook, loading] = useBooks(
    data._id,
    searchServerValue
  );

  console.log("---------->");
  const filteredBooks = books.filter((el) =>
    el.name.toLowerCase().includes(searchLocalValue.toLowerCase())
  );

  //   console.log(data);
  return (
    <View style={{ ...style }}>
      <Text
        style={{
          marginLeft: 15,
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: 5,
        }}
      >
        {data.name} - {filteredBooks.length}
      </Text>
      <Text style={{ marginLeft: 15 }}>{data.description}</Text>
      {errorMessage && (
        <Text style={{ color: "red", marginLeft: 15 }}>{errorMessage}</Text>
      )}

      {loading && <Spinner showText={false} />}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={filteredBooks}
        keyExtractor={(book) => book.name}
        renderItem={({ item, index }) => <Book data={item} />}
      />
    </View>
  );
};

export default CategoryBookList;

const css = StyleSheet.create({});
