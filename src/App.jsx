import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";
import Header from "./components/header";
import BookItem from "./components/bookItem";
import AddBook from "../src/components/addBook";

export default function App() {
  const [bookList, setBookList] = useState([]);

  const submitHandler = (title, author, image) => {
    setBookList((prevBooks) => {
      return [
        {
          title: title,
          author: author,
          image: image,
          id: Math.random().toString()
        }, // Make sure to include 'id'
        ...prevBooks
      ];
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>

      <View>
        <AddBook submitHandler={submitHandler} />
      </View>

      <View>
        <FlatList
          data={bookList} // Use bookList instead of 'books'
          renderItem={({ item }) => <BookItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 10,
    paddingHorizontal: 20
  }
});
