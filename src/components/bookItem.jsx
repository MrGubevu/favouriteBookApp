import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BookItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={styles.imageDiv}>
          <Image source={item.image} style={styles.image} />
        </View>

        <View>
          <Text style={styles.textTitle}> {item.title}</Text>
          <Text style={styles.textAuthor}> {item.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    color: "#006b61",
    fontSize: 15,
    fontWeight: 700
  },
  textAuthor: {
    color: "#006b61",
    fontSize: 12,
    fontWeight: 500
  },
  image: {
    paddingRight: 20,
    height: 50,
    width: 30
  },
  imageDiv: {
    paddingRight: 10
  },
  item: {
    flexDirection: "row",
    marginTop: 24,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    boxShadow: "2px 2px 5px rgba(0.2, 0.1, 0.1, 0.1)",
    color: "white"
  }
});

export default BookItem;
