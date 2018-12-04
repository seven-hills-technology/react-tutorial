import React from "react";

export interface ListDisplayProps {
    elements: string[];
    textColor: string;
    newElementTextValue: string;
    newElementTextOnChange(textElement: React.ChangeEvent<HTMLInputElement>): void;
    addNewElement(): void;
}

export const ListDisplay = (props: ListDisplayProps) => {
    const elements = props.elements || [];
    const style = {color: props.textColor};
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
                <input value={props.newElementTextValue} onChange={props.newElementTextOnChange} />
                <button onClick={props.addNewElement}>Add</button>
            </li>
        </ul>
    )
};