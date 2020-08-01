import React, { useState } from 'react';
import { Text, View, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air',      rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)',    rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy',          rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style={globalStyles.container}>      
            
            <Modal visible={modalOpen} animationType={'slide'}>
                <View style={globalStyles.modalContent}>
                    <MaterialIcons
                        name="close"
                        size={24}
                        style={{ ...globalStyles.modalToggle, marginTop: 20, marginBottom: 0}}
                        onPress={() => setModalOpen(false)}
                    />
                    <Text>Hello from modal</Text>
                </View>
            </Modal>

            <MaterialIcons 
                name="add"
                size={24}
                style={globalStyles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={ () => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}