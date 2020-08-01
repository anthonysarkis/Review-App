import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createStackNavigator();

const Screens = ({navigation}) => {
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
                options={{
                    headerTitle: () => <Header navigation={navigation} title={'About'}/>
                }}
            />
        </Stack.Navigator>
    );
};

export default function AboutStack({ navigation }) {
    return (
        <Screens navigation={navigation}/>
    );
}

