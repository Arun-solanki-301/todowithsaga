import React from "react";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import Home from "./Components/Home";

// const Tab = createMaterialTopTabNavigator();

const ContainerScreen = () => {
  return (
  //   <NavigationContainer>
  //     <Tab.Navigator screenOptions={{
  //   tabBarLabelStyle: { fontSize: 14 , color : "#fff" },
  //   tabBarItemStyle: { width: 120 },
  //   tabBarStyle: { backgroundColor: '#128c7eab' },

  // }}>
  //       <Tab.Screen name="Home" component={Home} />
  //       <Tab.Screen name="Checked" component={Checked} />
  //       <Tab.Screen name="Unchecked" component={Unchecked} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  <Home />
  );
};

export default ContainerScreen;
