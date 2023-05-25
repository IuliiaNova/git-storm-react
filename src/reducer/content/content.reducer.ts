import { GET_ALL_CONTENT, POST_NEW_CONTENT, DELETE_CONTENT } from "./content.types";

export default function contentReducer(state: any, action: any) {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_CONTENT:
			return {
				...state,
				content: payload
			}

			case POST_NEW_CONTENT:
			return {
				...state,
				content: [...state.content, payload]
			}

			case DELETE_CONTENT:
			return {
				...state,
				content: payload
			}


		default:
			return state
	}
}