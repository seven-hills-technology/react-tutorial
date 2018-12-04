import React from "react";
import {ListDisplay} from "./listDisplay"

export interface OurComponentProps {
    elements: string[];
    addNewElementToList(newElement: string): void;
    textColor: string;
}

export interface OurComponentState {
    newElementTextValue: string
}

export class List extends React.Component<OurComponentProps, OurComponentState> {
    constructor(props: OurComponentProps) {
        super(props);

        this.state = {
            newElementTextValue: ""
        }
    }

    addNewElement() {
        // const newList = [
        //     ...this.props.elements,
        //     this.state.newElementTextValue
        // ];
        // this.props.elements = newList;

        this.props.addNewElementToList(this.state.newElementTextValue);
        this.setState({
            ...this.state,
            newElementTextValue: ""
        });
    }

    newElementTextOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;

        this.setState({
            ...this.state,
            newElementTextValue: newValue
        });
    }

    render() {
        const elements = this.props.elements || [];
        return (
            <ListDisplay
                elements={elements}
                textColor={this.props.textColor}
                newElementTextValue={this.state.newElementTextValue}
                newElementTextOnChange={this.newElementTextOnChange.bind(this)}
                addNewElement={this.addNewElement.bind(this)} />
        )
    }
}