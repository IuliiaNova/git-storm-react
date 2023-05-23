import { REGISTER_LOGIN_USER } from "./user.types";

export default function userReducer(state: any, action: any) {
	const { type, payload } = action;

	switch (type) {
		case REGISTER_LOGIN_USER:
			return {
				auth0User: payload.auth0User,
				dbUser: payload.dbUser
			}

		default:
			return state
	}
}