import {createContext, ReactNode, useContext, useEffect} from 'react'
import {shallow} from 'zustand/shallow'

import {TSliceError} from '@/models/common'
import {TUserData} from '@/models/user'
import {TAuthPayload} from '@/store/slices/auth/types'
import useStore from '@/utils/store'

type TAuth = {
	loading: boolean
	authenticated: boolean
	error: TSliceError
	user: TUserData | null
	me: () => void
	authenticate: (payload: TAuthPayload) => void
	logout: () => void
}

type TProps = {
	children: ReactNode
}

const AuthContext = createContext<TAuth | null>(null)

const AuthProvider: React.FC<TProps> = ({children}) => {
	const {loading, error, authenticated, user, authenticate, me, logout} = useStore(
		(state) => ({
			error: state.error,
			loading: state.loading,
			authenticated: state.authenticated,
			user: state.user,
			me: state.me,
			authenticate: state.authenticate,
			logout: state.logout
		}),
		shallow
	)

	useEffect(() => {
		me()
	}, [me])

	return (
		<AuthContext.Provider value={{loading, error, authenticated, user, me, authenticate, logout}}>
			{children}
		</AuthContext.Provider>
	)
}

const useAuth = () => {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider')
	}
	return {...(context as TAuth)}
}

export {AuthProvider, useAuth}
