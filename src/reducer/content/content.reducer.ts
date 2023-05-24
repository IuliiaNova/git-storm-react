import { GET_ALL_CONTENT } from "./content.types";

export default function contentReducer(state: any, action: any) {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_CONTENT:
			return {
				...state,
				content: payload
			}

		default:
			return state
	}
}