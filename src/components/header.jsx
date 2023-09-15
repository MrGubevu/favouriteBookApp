import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageDiv}>
          <Image
            source={require("../assets/logos-01-01.png")}
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.favourite}>
        {" "}
        <Text style={styles.textTitle}> Add New Book </Text>{" "}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    aliginItems: "center"
  },
  logo: {
    height: 100,
    width: 240
  },
  textTitle: {
    color: "#006b61",
    fontSize: 15,
    fontWeight: 700
  },
  favourite: {
    flexDirection: "row",
    aliginItems: "center",
    justifyContent: "center"
  }
});
