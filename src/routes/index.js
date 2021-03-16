import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Main from '../pages/Main';
import TodoList from '../pages/TodoList';

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Main" component={Main} />
        <RootStack.Screen name="TodoList" component={TodoList} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
