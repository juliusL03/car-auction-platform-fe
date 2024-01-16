import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

import authSlice, {type TAuthSlice} from '@/store/slices/auth'

export type TUseAppStore = TAuthSlice 

const useStore = create<TUseAppStore>()(
	devtools((...a) => ({
		...authSlice(...a)
	}))
)

export default useStore
