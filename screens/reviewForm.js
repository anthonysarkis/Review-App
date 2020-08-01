import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm() {
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: ''}}
                onSubmit={(values) => {
                    
                }}
            >

            </Formik>
        </View>
    );
}