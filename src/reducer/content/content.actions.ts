import { getAllContentAPI } from "../../api/content/content.api"
import { GET_ALL_CONTENT } from "./content.types"

export async function getAllContentAction(dispatch: any) {
	try {
		const response: any = await getAllContentAPI()
		if (response.status === 200) {
			return dispatch({
				type: GET_ALL_CONTENT,
				payload: response.content
			})
		} else {
			throw new Error()
		}
	} catch (err) {
		console.log(err);
	}
}