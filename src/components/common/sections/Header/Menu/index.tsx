import clsx from 'clsx'

import useStore from '@/utils/store'
import Menu from '@/components/common/elements/Menu'

import styles from './menu.module.scss'
import {menuItems} from './menu-list'
const HeadNavMenu: React.FC = () => {
	const {authenticated} = useStore ((state) => ({
		authenticated: state.authenticated
	}))

	const menu = authenticated ? menuItems : [menuItems[0]] 
	return (
		<section className={clsx(styles.menu)}>
			<Menu itemsMenu={menu}/>
		</section>
	)
}

export default HeadNavMenu
