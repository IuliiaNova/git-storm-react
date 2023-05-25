import { Content } from '../../interfaces/content'

export const getAllContentAPI = async (): Promise<any> => {
	const response = await fetch('http://localhost:4000/api/v1/get-content')
	const data = await response.json()
	return data as Content
}

export const postContentAPI = async (userId: string, name: string, url: string, type: string, genre: string): Promise<any> => {
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, name, url, type, genre }),
  };
  const response = await fetch('http://localhost:4000/api/v1/create-content', params);
  const data = await response.json();
  return data;
};

export const searchContentApi = async (query: string): Promise<any> => {
	const response = await fetch(`http://localhost:4000/api/v1/search-content/${query}`)
	const data = await response.json()
	return data
}

export const getItemByIdApi = async (id: any): Promise<any> => {
	const response = await fetch(`http://localhost:4000/api/v1/memes/${id}`)
	const data = await response.json()
	return data
}

export const deleteItemByIdApi = async (contentId: any, userId: string): Promise<any> => {
	const response = await fetch(`http://localhost:4000/api/v1/memes/${contentId}`, {
    method: 'DELETE',
    headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			userId,
		}),
  });
	const data = await response.json()
	return data
}

