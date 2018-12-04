export interface State {
    ourList: StateList
}

export interface StateList {
    elements: string[];
}

export const initialState: State = {
    ourList: {
        elements: [
            "Desk phone"
        ]
    }
};