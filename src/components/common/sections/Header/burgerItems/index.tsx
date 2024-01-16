import clsx from 'clsx'

import Menu from '@/components/common/elements/Menu'

import {menuItems} from './menu-list'
import styles from './menu.module.scss'
const BurgerItemMenu: React.FC = () => {

	return (
		<div className={clsx(styles.isMobile)}>
			<Menu itemsMenu={menuItems} />
		</div>
	)
}

export default BurgerItemMenu
