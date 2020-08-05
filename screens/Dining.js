import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Dining = (props) => {
  return (
    <View style={styles.container}>
      <Text> Dining Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Dining;
