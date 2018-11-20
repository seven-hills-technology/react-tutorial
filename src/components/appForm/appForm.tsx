import React from "react";
import { reduxForm, InjectedFormProps, Field } from "redux-form";

export interface AppFormProps {
}

export interface AppFormData {
    firstName: string;
    lastName: string;
}

export type AllProps = AppFormProps & InjectedFormProps<AppFormData, AppFormProps>;

export const AppForm = (props: AllProps) => (
    <form onSubmit={props.handleSubmit}>
        <table>
            <tbody>
                <tr>
                    <td>First name</td>
                    <td><Field name="firstName" component="input" type="text" /></td>
                </tr>
                <tr>
                    <td>Last name</td>
                    <td><Field name="lastName" component="input" type="text" /></td>
                </tr>
                <tr>
                    <td><button type="submit">Submit</button></td>
                </tr>
            </tbody>
        </table>
    </form>
);

export const ConnectedAppForm = reduxForm<AppFormData, AppFormProps>({ form: 'appForm' })(AppForm);