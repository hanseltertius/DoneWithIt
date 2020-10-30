import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
    AppForm as Form,
    AppFormField as FormField,
    ErrorMessage,
    SubmitButton
} from '../components/form';
import usersApi from '../api/users';
import Screen from '../components/Screen';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().matches(/^[A-Za-z]+$/, 'Must only contain letters').label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {

    const auth = useAuth();

    const [errorMessage, setErrorMessage] = useState('');
    const [registerFailed, setRegisterFailed] = useState(false);

    const handleSubmit = async ({ name, email, password }) => {
        const result = await usersApi.register(name, email, password);
        if (!result.ok) {
            setErrorMessage(result.data.error);
            return setRegisterFailed(true);
        }
        setRegisterFailed(false);
        auth.register(result.data);
    }

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>

                <ErrorMessage error={errorMessage} visible={registerFailed} />

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