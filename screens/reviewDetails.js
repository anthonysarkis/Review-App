import React from 'react';
import { Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {

    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <View style={globalStyles.rating}>
                    <Text>Sarkis' rating: </Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    );
}