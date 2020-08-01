import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const Stack = createStackNavigator();

const Screens = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#333',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen
                name="About"
                component={About}
            />
        </Stack.Navigator>
    );
};

export default function AboutStack() {
    return (
        <Screens/>
    );
}

