export interface State {
    user: StateUser;
}

export interface StateUser {
    firstName: string;
    lastName: string;
}

export const initialState: State = {
    user: {
        firstName: "",
        lastName: ""
    }
};