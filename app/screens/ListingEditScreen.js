import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import * as Location from 'expo-location';

import CategoryPickerItem from '../components/CategoryPickerItem';
import {
    AppForm as Form,
    AppFormField as FormField,
    AppFormPicker as Picker,
    AppFormImagePicker as FormImagePicker,
    SubmitButton
} from '../components/form';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';
import useApi from '../hooks/useApi';
import AppText from '../components/Text';
import UploadScreen from './UploadScreen';
import listings from '../api/listings';

const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, "Please select at least one image"),
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    location: Yup.object().label("Location")
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

    const location = useLocation();

    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );

        if (!result.ok) {
            setUploadVisible(false);
            return alert('Could not save the listing.');
        }

        resetForm();
    }

    return (
        <Screen style={styles.container}>

            <UploadScreen
                onDone={() => setUploadVisible(false)}
                visible={uploadVisible}
                progress={progress}
            />

            <Form
                initialValues={{
                    images: [],
                    title: '',
                    price: '',
                    category: null,
                    description: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>

                <FormImagePicker name="images" />

                <FormField
                    maxLength={255}
                    name="title"
                    placeholder="Title" />

                <FormField
                    maxLength={8}
                    name="price"
                    keyboardType="numeric"
                    placeholder="Price"
                    width={120} />

                <Picker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
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