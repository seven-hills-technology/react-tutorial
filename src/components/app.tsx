import React from "react";

export interface AppProps {
    firstName: string;
    lastName: string;
}

export const App = (props: AppProps) => (
    <p>Hello, {props.firstName} {props.lastName}!</p>
);

// export class App extends React.PureComponent<AppProps> {
//     render() {
//         return <p>Hello, {this.props.firstName} {this.props.lastName}!</p>
//     }
// }