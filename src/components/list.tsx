import React from "react";

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
        const style = {color: this.props.textColor};
        return (
            <ul style={style}>
                {
                    elements.map((element, index) =>
                        (
                            <li key={index}>
                                {element}
                            </li>
                        )
                    )
                }
                <li>
                    <input value={this.state.newElementTextValue} onChange={this.newElementTextOnChange.bind(this)} />
                    <button onClick={this.addNewElement.bind(this)}>Add</button>
                </li>
            </ul>
        )
    }
}