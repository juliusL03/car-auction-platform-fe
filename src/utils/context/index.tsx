import {ConfigProvider as AntdConfigProvider} from 'antd'
import {ReactNode} from 'react'

import theme from '@/styles/antd-themes'

import {AuthProvider} from './auth-context'
import {MessageProvider} from './message-context'

type TProps = {
	children: ReactNode
}

const AppProviders: React.FC<TProps> = ({children}) => (
	<AntdConfigProvider theme={theme}>
		<MessageProvider>
			<AuthProvider>{children}</AuthProvider>
		</MessageProvider>
	</AntdConfigProvider>
)

export default AppProviders
