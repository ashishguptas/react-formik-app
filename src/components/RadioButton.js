import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function RadioButton(props) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <div className='form-control'>
                <label>{label}</label>
                <Field name={name}>{
                    ({ field }) => {
                        console.log(field)
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.value}>
                                    <input type='radio' id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }</Field>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </div>
    )
}

export default RadioButton
