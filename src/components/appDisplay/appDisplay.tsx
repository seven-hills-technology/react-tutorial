import React from "react";

export interface AppProps {
    firstName: string;
    lastName: string;
}

export const AppDisplay = (props: AppProps) => (
    <p>Hello, {props.firstName} {props.lastName}!</p>
);