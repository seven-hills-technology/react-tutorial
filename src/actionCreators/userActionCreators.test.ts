import {userActionTypes} from "../actionTypes/userActionTypes";
import {setUserInformation} from "./userActionCreators";

it('should return action when calling setUserInformation', async () => {
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();
    await setUserInformation({firstName: "test first name", lastName: "test last name"})(mockDispatch, mockGetState);
    expect(mockDispatch).toHaveBeenCalledWith({
        type: userActionTypes.USER_SET_INFORMATION,
        payload: {info: {firstName: "test first name", lastName: "test last name"}}
    });
});