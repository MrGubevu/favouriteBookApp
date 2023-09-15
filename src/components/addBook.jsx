import React, { useState } from "react";
import {
  TextInput,
  Pressable,
  StyleSheet,
  View,
  Image,
  Text
} from "react-native";
import ImagePicker from "react-native-image-picker";

function AddBook({ submitHandler }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const changeHandler = (val) => {
    setTitle(val);
  };

  const changeAuthorHandler = (val) => {
    setAuthor(val);
  };

  const selectImage = () => {
    const options = {
      title: "Select Book Cover",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User canceled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        setSelectedImage(response.uri);
      }
    });
  };

  return (
    <View>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      )}

      <TextInput
        placeholder="Enter Book Title..."
        onChangeText={changeHandler}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Book Author..."
        onChangeText={changeAuthorHandler}
        style={styles.input}
      />
      <Pressable onPress={selectImage}>
        <Text>Select Image</Text>
      </Pressable>

      <Pressable onPress={() => submitHandler(title, author, selectedImage)}>
        <Text>Add Book</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: "#f9f9f9",
    width: 250,
    height: 35,
    borderRadius: 30
  }
});

export default AddBook;
