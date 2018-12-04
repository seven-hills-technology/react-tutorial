import React from "react";
import {ConnectedList, List} from "./list";

export interface AppProps {
    firstName: string;
    lastName: string;
}

export interface AppState {
    listElements: string[]
}

export class App extends React.PureComponent<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }

    // addNewElement(newElementValue: string) {
    //     this.setState({
    //         ...this.state,
    //         listElements: [
    //             ...this.state.listElements,
    //             newElementValue
    //         ]
    //     })
    // }
    //
    // removeElement(elementValue: string) {
    //     this.setState({
    //         ...this.state,
    //         listElements: [
    //             ...this.state.listElements.filter(x => x !== elementValue)
    //         ]
    //     })
    // }

    render() {
        return (
            <>
                <p>Welcome!</p>
                <ConnectedList
                    textColor={"#00ffff"}>
                </ConnectedList>
                <ConnectedList
                    textColor={"#ffffff"}>
                </ConnectedList>
            </>
        )
    }
}