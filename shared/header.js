import React from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 80,   //must specify the height
        elevation: 3,    //add elevation for shadow effect
    },
    headerText: {
        color: "#444",
        letterSpacing: 1,
        fontSize: 20,
        fontWeight: "bold",
    },
    icon: {
        position: "absolute",
        left: 16,
        paddingTop: 10,    //put some padding to push the icon a little bit
    },
    headerTitle: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,     //same as icon
    },
    headerImage: {
        height: 20,
        width: 20,
        marginHorizontal: 10,
    },
});