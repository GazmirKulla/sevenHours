import update from 'immutability-helper';
import { REHYDRATE } from 'redux-persist';
import {
	USER,
	USER_LIST_GET_SUCCESS,
	USER_UPDATE
} from 'constants/actionTypes';

const INIT_STATE = {
	userList: [],
	loading: false,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {

		case USER:
			return update(state, { $merge: action.payload });

		case USER_LIST_GET_SUCCESS:
			return update(state, { userList: { $set: action.payload } });

		case USER_UPDATE:
			return update(state, {
				userList: {
					[action.payload.userId]:
					{
						$merge: action.payload.newVal
					}
				}
			});

			case REHYDRATE:
				return update(state, { $merge: action.payload ? action.payload.user : state });

		default: return { ...state };
	}
}
