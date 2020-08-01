import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#333',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={ {
                    title: 'GameZone', 
                }} 
            />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{title: 'Review Details'}} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
};

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Navigation/>
        </NavigationContainer>
    );
}

