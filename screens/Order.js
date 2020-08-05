import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Search from "../components/Search";
import Lockdownfood from "../components/Lockdownfood";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MainItems from "../components/MainItems";

const Order = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Search />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.active}>food</Text>
          <Text style={styles.category}>market</Text>
          <Text style={styles.category}>self pickup</Text>
        </View>
        <View style={styles.imgcontainer}>
          <Image
            source={require("../assets/zomatooff.png")}
            style={styles.card}
          />
        </View>
        <View style={styles.food}>
          <Lockdownfood />
        </View>
        <View>
          <MainItems />
        </View>
      </View>
    </ScrollView>
  );
};

Order.navigationOptions = () => {
  return {
    headerTitle: "Your Home Address",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="location" iconName="location-pin" />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  active: {
    fontSize: 22,
    margin: 15,
    marginTop: 10,
    color: "red",
    fontWeight: "100",
  },
  category: {
    fontSize: 22,
    margin: 10,
    marginTop: 10,
    color: "#6E6E6E",
    fontWeight: "100",
  },
  imgcontainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 10,
  },
  card: {
    width: "95%",
    height: 200,
  },
  food: {
    padding: 15,
  },
});

export default Order;
