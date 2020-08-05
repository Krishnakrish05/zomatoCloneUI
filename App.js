import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Order from "./screens/Order";
import StackNavigator from "./navigation/AppNavigator";

export default function App() {
  return <StackNavigator />;
}

const styles = StyleSheet.create({});
