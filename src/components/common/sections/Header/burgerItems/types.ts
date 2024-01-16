import {NextRouter} from 'next/router'
import type {MenuProps} from 'antd'

export type NavItem = {
	label: string
	link: string
	icon?: any // use any to avoid conflicts on @svgr and babel plugin
}

export type Props = {
	router: NextRouter
	navItems: MenuProps['items']
}
