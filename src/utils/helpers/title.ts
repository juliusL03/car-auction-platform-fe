import {NextRouter} from 'next/router'

import {capitalize, extractBaseURI} from './string'

export const getTitle = (router: NextRouter) => {
	return `PcCrits | ${capitalize(extractBaseURI(router.pathname)).toString()}`
}
