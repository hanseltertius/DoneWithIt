import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../Picker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder, width }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                onSelectItem={item => setFieldValue(name, item)}
                width={width} />

            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;