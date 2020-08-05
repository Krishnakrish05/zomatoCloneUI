import React from "react";
import { View, Text, FlatList } from "react-native";
import BigCard from "./BigCard";

const ResturauntData = [
  {
    id: 1,
    name: "NIC - Natural Ice Creams",
    uri:
      "https://media.gettyimages.com/photos/colorful-scoops-ice-cream-background-concept-picture-id965401258?b=1&k=6&m=965401258&s=612x612&w=0&h=7MwkS8b31-gc97Dituwyc0Cc21iylbT99uWJhcu5P0U=",
    type: "Ice Cream , Deserts",
  },
  {
    id: 2,
    name: "Bitoo Samosay Wala",
    uri:
      "https://media.istockphoto.com/photos/samosa2-picture-id507066979?b=1&k=6&m=507066979&s=612x612&h=K9-54uD9jHAEfAIDfazlG-Z0d1KdQFUErIYV8EODJuk=",
    type: "Street Food, Chinese",
  },
  {
    id: 3,
    name: "Dominos Pizza ",
    uri:
      "https://images.freeimages.com/images/small-previews/c5e/roasted-tomato-pizza-1538009.jpg",
    type: "Pizza, Fast Food",
  },
  {
    id: 4,
    name: "Burger King",
    uri:
      "https://media.istockphoto.com/photos/burger-king-picture-id458406353?b=1&k=6&m=458406353&s=612x612&h=msD-mLa68mERGIkyp855KaxpEwZ8zXtGoSacubhmHbc=",
    type: "Burger, American",
  },
  {
    id: 5,
    name: "Gulaab",
    uri:
      "https://media.gettyimages.com/photos/nonvegetarian-indian-thali-picture-id174973324?b=1&k=6&m=174973324&s=612x612&w=0&h=MBnZh1-enX5h0P8Nsbpn5nNPE6_rYJur_8vENwnE450=",
    type: "North Indian, StreetFood, Mithai",
  },
];

const MainItems = (props) => {
  return (
    <View>
      <FlatList
        data={ResturauntData}
        keyExtractor={(index) => index.id.toString()}
        renderItem={({ item }) => {
          return <BigCard image={item.uri} name={item.name} type={item.type} />;
        }}
      />
    </View>
  );
};

export default MainItems;
