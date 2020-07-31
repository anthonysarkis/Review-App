import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>

            <Button
                title="About"
                onPress={() => navigation.navigate('About')}
            />

            <Button
                title="Go to Review Details"
                onPress={() => navigation.navigate('ReviewDetails')}
            />
        </View>
    );
}