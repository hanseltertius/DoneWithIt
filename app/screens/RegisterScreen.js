import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton
} from '../components/form';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().matches(/^[A-Za-z]+$/, 'Must only contain letters').label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>
                <FormField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default RegisterScreen;