import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {

    const dropDownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'Option 1' },
        { key: 'Option 2', value: 'Option 2' },
        { key: 'Option 3', value: 'Option 3' }
    ]

    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' }
    ]

    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' }
    ]

    const initialValues = {
        email: '',
        description:'',
        selectOption:'',
        radioOption: '',
        checkboxOption:[],
        birthDate: null
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required('Required email'),
        description: Yup.string().required('Required textarea'),
        selectOption: Yup.string().required('Required Select'),
        radioOption: Yup.string().required('Required Option'),
        checkboxOption: Yup.array().required('Required checkbox'),
        birthDate: Yup.date().required('Required').nullable()
    })
    const onSubmit = (values, onSubmitProps) => {
        console.log('Form Data', values)        
        console.log('date value', JSON.parse(JSON.stringify(values)))
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
        
    }
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount enableReinitialize>
                {
                    formik => <Form>
                        <FormikControl control='input' type='email' label='Email' name='email' />
                        <FormikControl control='textarea' label='Description' name='description' />
                        <FormikControl control='select' label='Select a topic' name='selectOption' options={dropDownOptions} />
                        <FormikControl control='radio' label='Radio Topic' name='radioOption' options={radioOptions} />
                        <FormikControl control='checkbox' label='Checkbox Topic' name='checkboxOption' options={checkboxOptions} />
                        <FormikControl control='date' label='Select Date' name='birthDate' />
                        <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default FormikContainer
