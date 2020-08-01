import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        paddingBottom: 5,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    modalContent: {
        flex: 1,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    }
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}