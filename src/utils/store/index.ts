import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

import authSlice, {type TAuthSlice} from '@/store/slices/auth'

import productSlice, {type TProductSlice} from './slices/product'
import bidSlice, {type TBidSlice} from './slices/bid'

export type TUseAppStore = TAuthSlice & TProductSlice & TBidSlice
const useStore = create<TUseAppStore>()(
	devtools((...a) => ({
		...authSlice(...a),
		...productSlice(...a),
		...bidSlice(...a)
	}))
)

export default useStore
