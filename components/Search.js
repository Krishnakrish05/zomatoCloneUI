import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Search = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Ionicons
          style={styles.icon}
          name="ios-search"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.text}
          placeholder="Search for restaurants, cuisines"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  search: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E7E7E7",
    marginTop: 20,
    flexDirection: "row",
    width: 330,
    height: 50,
  },
  text: {
    marginLeft: 5,
  },
  icon: {
    padding: 12,
  },
});
export default Search;
