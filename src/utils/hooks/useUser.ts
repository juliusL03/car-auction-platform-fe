import {useEffect, useState} from 'react'

export function useUser() {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		(async () => {
			const response = await fetch('/api/user')
			if (response.ok) {
				const user = await response.json()
				setUser(user)
			} else {
				setUser(null)
			}
			setLoading(false)
		})()
	}, [])

	return {user, loading}
}
