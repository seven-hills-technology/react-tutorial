import React from "react";
import {ListDisplay} from "./listDisplay"
import {State} from "../store/state";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addElementToList} from "../actionCreators/ourListActionCreators";

export interface OurComponentProps {
    // addNewElementToList(newElement: string): void;
    textColor: string;
}

export interface OurComponentState {
    newElementTextValue: string
}


type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapActionToProps>;
export type CombinedProps = OurComponentProps & StateProps & DispatchProps;

export class List extends React.Component<CombinedProps, OurComponentState> {
    constructor(props: CombinedProps) {
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

        // this.props.addNewElementToList(this.state.newElementTextValue);
        this.props.actions.addElementToList(this.state.newElementTextValue);
    }

    newElementTextOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;

        this.setState({
            ...this.state,
            newElementTextValue: newValue
        });
    }

    render() {
        const elements = this.props.elements;
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



function mapStateToProps(state: State) {
    return {
        elements: state.ourList.elements
    };
}

function mapActionToProps(dispatch: any) {
    return {
        actions: bindActionCreators({addElementToList}, dispatch)
    };
}

export const ConnectedList = connect(mapStateToProps, mapActionToProps)(List);