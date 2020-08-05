import React from "react";

import Order from "../screens/Order";
import Dining from "../screens/Dining";
import Nightlife from "../screens/Nightlife";
import Explore from "../screens/Explore";
import Profile from "../screens/Profile";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const Stack = createStackNavigator({
  orderscreen: Order,
});

const BottomTab = createBottomTabNavigator(
  {
    Order: {
      screen: Stack,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Feather name="shopping-bag" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    dining: {
      screen: Dining,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="room-service-outline"
              size={35}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    NightLife: {
      screen: Nightlife,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="md-wine" size={30} color={tabInfo.tintColor} />
          );
        },
      },
    },
    explore: {
      screen: Explore,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <SimpleLineIcons
              name="compass"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="face-profile"
              size={27}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#000",
      activeBackgroundColor: "white",
    },
  }
);

export default createAppContainer(BottomTab);
