import { SET_USER, SET_USER_ID } from "./actions";

const initialState = {
	user: [],
	userID: 1,
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.payload };
		case SET_USER_ID:
			return { ...state, userID: action.payload };
		default:
			return state;
	}
}

export default userReducer;
