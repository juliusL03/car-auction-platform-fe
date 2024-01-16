import {notification} from 'antd'
import {useCallback} from 'react'

export enum ENotificationType {
	Success = 'success',
	Info = 'info',
	Warning = 'warning',
	Error = 'error'
}

const useNotification = () => {
	const [api, contextHolder] = notification.useNotification()

	const openNotification = useCallback(
		(type: ENotificationType, message: string, placement?: any) => {
			api[type]({message, placement})
		},
		[api]
	)

	return {
		NotificationContextHolder: contextHolder,
		openNotification
	}
}

export default useNotification
