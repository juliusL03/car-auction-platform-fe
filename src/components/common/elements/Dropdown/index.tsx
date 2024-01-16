import clsx from 'clsx'
import React from 'react'

import Button from '../Button'

import {DropdownProps} from './types'
import useLogic from './logic'
import styles from './dropdown.module.scss'


const Dropdown: React.FC<DropdownProps> = ({label, value, options, variant = 'default', onSelect, className, iconLeft, iconRight}) => {
	const {dropdownRef, handleOnSelect, toggleDropdown, isOpen} = useLogic({onSelect})
	const currentValue = value !== '' ? options.find((e) => e.value === value)?.label : label

	return (
		<div className={clsx(styles.container, className)} ref={dropdownRef}>
			<Button variant={variant} onClick={toggleDropdown} iconRight={iconRight} iconLeft={iconLeft}>
				{currentValue}
			</Button>
			<div className={clsx(styles.dropdown, isOpen && styles.isOpen)}>
				<ul className={styles.dropdownMenu}>
					{options.map(({label, value, icon: Icons}) => (
						<li key={value} onClick={() => handleOnSelect(value)}>
							<span>
								<div className={styles.icons}>{Icons && <Icons />}</div>
								{label}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Dropdown
