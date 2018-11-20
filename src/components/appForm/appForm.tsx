import React from "react";

export interface AppFormProps {
    firstName: string;
    lastName: string;
    onFirstNameChange: (value: string) => void;
    onLastNameChange: (value: string) => void;
}

export const AppForm = (props: AppFormProps) => (
    <table>
        <tbody>
            <tr>
                <td>First name</td>
                <td><input onChange={e => props.onFirstNameChange(e.target.value)} value={props.firstName} /></td>
            </tr>
            <tr>
                <td>Last name</td>
                <td><input onChange={e => props.onLastNameChange(e.target.value)} value={props.lastName} /></td>
            </tr>
        </tbody>
    </table>
);