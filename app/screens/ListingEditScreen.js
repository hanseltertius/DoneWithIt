import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/form';
import AppFormPicker from '../components/form/AppFormPicker';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().moreThan(1).lessThan(10000).label("Price"),
    category: Yup.object().required().label("Category")
})

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 }
];

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>

            <AppForm
                initialValues={{ title: '', price: '', category: '', description: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>

                <AppFormField
                    autoCorrect={false}
                    name="title"
                    placeholder="Title" />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="price"
                    keyboardType="numeric"
                    placeholder="Price" />

                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category" />

                <AppFormField
                    autoCorrect={false}
                    name="description"
                    placeholder="Description" />

                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default ListingEditScreen;