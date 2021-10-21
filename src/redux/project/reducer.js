import {
	TOGGLE_PROJECT_PREVIEW_MODAL,
} from '../actions';

const initialState = {
	isOpen: false,
	projectKey: null,
};

export const projectReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_PROJECT_PREVIEW_MODAL:
			return {
				...state,
				projectKey: state.isOpen ? null : action.payload.projectKey,
				isOpen: !state.isOpen,
			};

		default:
			return {
				...state
			};
	}
};

export default projectReducer;