import clsx from 'clsx'

import Menu from '@/components/common/elements/Menu'
import useStore from '@/utils/store'

import {menuItems} from './menu-list'
import styles from './menu.module.scss'
const BurgerItemMenu: React.FC = () => {
	const {authenticated} = useStore ((state) => ({
		authenticated: state.authenticated
	}))

	const menu = authenticated ? menuItems : [menuItems[0], menuItems[3], menuItems[4]]

	return (
		<div className={clsx(styles.isMobile)}>
			<Menu itemsMenu={menu} />
		</div>
	)
}

export default BurgerItemMenu
