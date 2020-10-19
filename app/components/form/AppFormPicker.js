import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ name, ...otherProps }) {

    const { setFieldValue, setFieldTouched, errors, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                {...otherProps}
                onPress={() => setFieldTouched(name)}
                selectedItem={values[name]}
                onSelectItem={item => setFieldValue(name, item)} />

            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;