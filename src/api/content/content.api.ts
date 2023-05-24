import { Content } from '../../interfaces/content'

export const getAllContentAPI = async (): Promise<any> => {
	const response = await fetch('http://localhost:4000/api/v1/get-content')
	const data = await response.json()
	return data as Content
}