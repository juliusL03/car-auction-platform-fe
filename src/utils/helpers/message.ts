import {MessageInstance, NoticeType} from 'antd/es/message/interface'

export const showMessage = (messageApi: MessageInstance, type: NoticeType, content: string) => {
	messageApi.open({
		key: 'message-key',
		type,
		content
	})
}
