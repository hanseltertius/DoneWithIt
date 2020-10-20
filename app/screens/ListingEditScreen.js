import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
    AppForm as Form,
    AppFormField as FormField,
    AppFormPicker as Picker,
    SubmitButton
} from '../components/form';
import AppFormPicker from '../components/form/AppFormPicker';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
})

const categories = [
    { backgroundColor: "#fc5c65", name: "floor-lamp", label: "Furniture", value: 1 },
    { backgroundColor: "#fd9644", name: "car", label: "Cars", value: 2 },
    { backgroundColor: "#fed330", name: "camera", label: "Cameras", value: 3 },
    { backgroundColor: "#26de81", name: "cards", label: "Games", value: 4 },
    { backgroundColor: "#2bcbba", name: "shoe-heel", label: "Clothing", value: 5 },
    { backgroundColor: "#45aaf2", name: "basketball", label: "Sports", value: 6 },
    { backgroundColor: "#4b7bec", name: "headphones", label: "Movies & Music", value: 7 },
    { backgroundColor: "#9b66e2", name: "book-open-variant", label: "Books", value: 8 },
    { backgroundColor: "#7b8ca1", name: "application", label: "Other", value: 9 }
];

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>

            <Form
                initialValues={{ title: '', price: '', category: null, description: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>

                <FormField
                    maxLength={255}
                    name="title"
                    placeholder="Title" />

                <FormField
                    maxLength={8}
                    name="price"
                    keyboardType="numeric"
                    placeholder="Price"
                    width="30%" />

                <Picker
                    items={categories}
                    name="category"
                    placeholder="Category"
                    width="50%" />

                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description" />

                <SubmitButton title="Post" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default ListingEditScreen;