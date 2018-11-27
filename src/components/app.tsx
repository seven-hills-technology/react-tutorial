import React from "react";
import {List} from "./list";

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

        this.state = {
            listElements: ["Bosley"]
        }
    }

    addNewElement(newElementValue: string) {
        this.setState({
            ...this.state,
            listElements: [
                ...this.state.listElements,
                newElementValue
            ]
        })
    }

    removeElement(elementValue: string) {
        this.setState({
            ...this.state,
            listElements: [
                ...this.state.listElements.filter(x => x !== elementValue)
            ]
        })
    }

    render() {
        return (
            <>
                <p>Welcome!</p>
                <List
                    elements={this.state.listElements}
                    textColor={"#00ffff"}
                    addNewElementToList={this.addNewElement.bind(this)}>
                </List>
                <List
                    elements={this.state.listElements}
                    textColor={"#ffffff"}
                    addNewElementToList={this.addNewElement.bind(this)}>
                </List>
            </>
        )
    }
}