import { getAllContentAPI, postContentAPI, deleteItemByIdApi } from "../../api/content/content.api"
import { GET_ALL_CONTENT, POST_NEW_CONTENT, DELETE_CONTENT } from "./content.types"

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


export async function postContentAction(dispatch: any, userId: string, name: string, url: string, type: string, genre: string) {
	try {
		const response: any = await postContentAPI(userId, name, url, type, genre);
		return dispatch({
			type: POST_NEW_CONTENT,
			payload: response.content
		});
	} catch (err) {
		console.log(err);
	}
}

export async function deleteContentAction(dispatch: any, userId: string, content: string, contentState: any) {
	try {
		const contentToDelete: any = await deleteItemByIdApi(content._id, userId)
		if (contentToDelete === 200) {
			const filteredContent = contentState.content.filter((item: any) => item._id !== content._id)

			return dispatch({
				type: DELETE_CONTENT,
				payload: filteredContent
			})
		}
		;
	} catch (err) {
		console.log(err);
	}
}
