import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
    Form as Form,
    FormField as FormField,
    ErrorMessage,
    SubmitButton
} from '../components/form';
import authApi from '../api/auth';
import usersApi from '../api/users';
import Screen from '../components/Screen';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().matches(/^[A-Za-z]+$/, 'Must only contain letters').label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState('');
    const [registerFailed, setRegisterFailed] = useState(false);

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) {
                setRegisterFailed(true);
                setError(result.data.error);
            } else {
                setRegisterFailed(true);
                setError("An unexpected error occured.");
                console.log(result);
            }
            return;
        }

        const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password);
        setRegisterFailed(false);
        auth.logIn(authToken);
    }

    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>
                <Form
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>

                    <ErrorMessage error={error} visible={registerFailed} />

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
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default RegisterScreen;