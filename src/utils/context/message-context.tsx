import {message as antMessage} from 'antd'
import {MessageInstance} from 'antd/es/message/interface'
import {createContext, JSXElementConstructor, ReactElement, ReactNode, useContext} from 'react'

type TMessage = {
	messageApi: MessageInstance
	messageComponent: ReactElement<unknown, string | JSXElementConstructor<unknown>>
}

type TProps = {
	children: ReactNode
}

const MessageContext = createContext<TMessage | null>(null)

const MessageProvider: React.FC<TProps> = ({children}) => {
	const [messageApi, messageComponent] = antMessage.useMessage()

	return <MessageContext.Provider value={{messageApi, messageComponent}}>{children}</MessageContext.Provider>
}

const useMessage = () => {
	const context = useContext(MessageContext)
	if (context === undefined) {
		throw new Error('useMessage must be used within a MessageProvider')
	}
	return {...(context as TMessage)}
}

export {MessageProvider, useMessage}
