import React, {Fragment, useEffect, useState} from 'react'
import {useRouter} from 'next/router'

import useStore from '@/utils/store'
import useNotification, {ENotificationType} from '@/utils/hooks/useNotification'

const Logout = () => {
	const router = useRouter()
	const {NotificationContextHolder, openNotification} = useNotification()
	const [authenticating, setAuthenticating] = useState(false)

	const {logout, authenticated, user} = useStore ((state) => ({
		logout: state.logout,
		authenticated: state.authenticated,
		user: state.user
	}))

	useEffect(() => {
		if (authenticated && authenticating) {
			openNotification(ENotificationType.Success, 'Logout successfully', 'top')

			setTimeout(() => {
				router.replace('/signin')
			}, 400)

			setAuthenticating(false)
		}
	}, [authenticated, authenticating, openNotification, router])

	const outHandler = () => {
		setAuthenticating(true)
		logout()
	}

	const Logout = () => <Fragment>
		<label onClick={outHandler}>Logout</label>
	</Fragment>

	return {Logout, NotificationContextHolder, user}


}

export default Logout