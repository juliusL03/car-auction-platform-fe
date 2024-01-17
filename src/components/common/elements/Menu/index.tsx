/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx'
import {useEffect, useRef, useState} from 'react'

import styles from './menu.module.scss'
import {MegaProps, Props} from './types'

const Menu: React.FC<Props> = ({itemsMenu}) => {
	return (
		<div className={clsx(styles.menu)} id="navbar-sticky">
			<ul className={clsx(styles.ul)}>
   
				{
					itemsMenu.map((item) => item.type !== 'megaMenu' ?  (
						<li key={item.name}>
							<a href={item.link} className={clsx(styles.li)}>{item.name}</a>
						</li>
					) : (<MegaMenu key={item.name} options={item.options} name={item.name}/>))
				}
			</ul>
		</div>
	)
}

export const MegaMenu: React.FC<MegaProps> = ({options, name}) => {
	const [showDropdown, setShowDropdown] = useState(false)

	const dropDown = useRef(null)

	useEffect(() => {
		if (!showDropdown) return
		function handleClick(event: { target: any }) {
			if (dropDown.current) {
				setShowDropdown(true)                                                                                                                                                                                                       
			}
		}
		window.addEventListener('click', handleClick)
		return () => window.removeEventListener('click', handleClick)
	}, [showDropdown])
	return (
		<li>
			<a onClick={() => setShowDropdown(b => !b)} className={clsx(styles.li)}>{name}</a>
			{showDropdown && (<div ref={dropDown} className={clsx([styles.megaDropDown])}>
				<div className={clsx(styles.megaDiv)}>
					<ul className={clsx(styles.megaUl)} aria-labelledby="mega-menu-icons-dropdown-button">
						{options && options.map(item => (
							<li key={item.name}>
								<a href={item.link} className={clsx(styles.megaA)}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>)}
		</li>
	)
}

export default Menu
