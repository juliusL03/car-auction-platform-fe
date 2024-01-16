import {useRouter} from 'next/router'
import {useCallback, useEffect, useState} from 'react'
import {FieldValues, SubmitHandler} from 'react-hook-form'

import {TSignupPayload} from '@/utils/store/slices/auth/types'
import {useAuth} from '@/utils/context/auth-context'
import useNotification, {ENotificationType} from '@/utils/hooks/useNotification'
import useCustomForm from '@/components/common/forms/Form/useCustomForm'


import {loginFields} from './fields'

const useLogic = () => {
	const router = useRouter()
	const {loading, error, authenticate, authenticated} = useAuth()
	const {NotificationContextHolder, openNotification} = useNotification()
	const [authenticating, setAuthenticating] = useState(false)

	const submitHandler: SubmitHandler<FieldValues> = useCallback(
		async (formData) => {
			setAuthenticating(true)
			// sent to api
			authenticate(formData as TSignupPayload)
		},
		[authenticate]
	)

	const {submit, Form} = useCustomForm({fields: loginFields, onSubmit: submitHandler})

	useEffect(() => {
		if (authenticated && authenticating) {
			openNotification(ENotificationType.Success, 'Login succeeded', 'top')

			setTimeout(() => {
				router.replace('/')
			}, 400)

			setAuthenticating(false)
		}
	}, [authenticated, authenticating, openNotification, router])

	useEffect(() => {
		if (error && authenticating) {
			openNotification(ENotificationType.Error, 'Login failed, invalid login credentials', 'top')
			setAuthenticating(false)
		}
	}, [authenticating, error, openNotification, router])

	useEffect(() => {
		const listener = (event: KeyboardEvent) => {
			if (event.code === 'Enter' || event.code === 'NumpadEnter') {
				event.preventDefault()
				submit()
			}
		}
		document.addEventListener('keydown', listener)
		return () => {
			document.removeEventListener('keydown', listener)
		}
	}, [submit])

	return {
		error,
		loading,
		submit,
		Form,
		NotificationContextHolder
	}
}

export default useLogic
