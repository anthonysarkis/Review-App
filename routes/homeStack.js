import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

const Screens = ({ navigation}) => {
    return (
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#333',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                
            }}>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={ {
                    header: () => <Header navigation={navigation} title={'GameZone'} />, 
                }} 
            />
            <Stack.Screen 
                name="ReviewDetails" 
                component={ReviewDetails} 
                options={{title: 'Review Details'}} 
            />
        </Stack.Navigator>
    );
};

export default function HomeStack({ navigation }) {
    return (
        <Screens navigation={navigation}/>
    );
}

