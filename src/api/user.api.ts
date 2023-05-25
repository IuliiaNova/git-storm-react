
export const registerLoginUserAPI = async (user: any, token: string): Promise<any> => {
	const params = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	}
	const response = await fetch('http://localhost:4000/api/v1/register-login-user', params)
	const data = await response.json()
	return data
}

export const getAllUsers = async (): Promise<any> => {
	const response = await fetch('http://localhost:4000/api/v1/all-users')
	const data = await response.json()
	return data
}