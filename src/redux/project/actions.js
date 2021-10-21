import {
	TOGGLE_PROJECT_PREVIEW_MODAL,
} from '../actions';

export const toggleProjectPreviewModal = (projectKey) => ({
	type: TOGGLE_PROJECT_PREVIEW_MODAL,
	payload: { projectKey }
});