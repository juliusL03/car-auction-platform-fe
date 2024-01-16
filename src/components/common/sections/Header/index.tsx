import React, {useState} from 'react'
import {clsx} from 'clsx'

import useStore from '@/utils/store'

import styles from './header.module.scss'
import HeadbarLogo from './Logo'
import BurgerMenu from './burgerMenu'
import BurgerItemMenu from './burgerItems'
import Auth from './Auth'
import HeadNavMenu from './Menu'
import Profile from './Profile'

const Header: React.FC = () => {
	const [mobileMenu, setMobileMenu] = useState(false)
	const onBurger = () => {
		setMobileMenu(!mobileMenu)
	}

	const {authenticated} = useStore ((state) => ({
		authenticated: state.authenticated
	}))

	return (
		<nav className={clsx(styles.navHeader, mobileMenu && styles['navHeight'])}>
			<div className={clsx(styles.navWrapper)}>
				<div className={clsx(styles.navContent)}>
					<HeadbarLogo />
					<HeadNavMenu />
					{authenticated ? <Profile firstName={'new'} /> : <Auth />}
					<div className={clsx(styles.humberger)}>
						<BurgerMenu onClick={onBurger} />
					</div>
				</div>
			</div>
			<div className={clsx(!mobileMenu && styles.hide, mobileMenu && styles.mobileMenu)}>
				<BurgerItemMenu />
			</div>
		</nav>
	)
}

export default Header

