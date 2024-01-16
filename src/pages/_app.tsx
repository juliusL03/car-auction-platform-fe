import type {AppProps} from 'next/app'

import AppProviders from '@/utils/context'

const App = ({Component, pageProps}: AppProps) => {
	return (
		<AppProviders>
			<Component {...pageProps} />
		</AppProviders>
	)
}

export default App
