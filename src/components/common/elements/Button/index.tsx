import clsx from 'clsx'
import {forwardRef} from 'react'

import styles from './button.module.scss'
import {ButtonProps} from './types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = 'default',
			size = 'md',
			rounded,
			iconLeft: IconLeft,
			iconRight: IconRight,
			className,
			disabled,
			fit,
			children,
			...props
		},
		ref
	) => {
		const classes = clsx(styles.btn, {[styles.disabled]: disabled}, {[styles.rounded]: rounded, [styles.fit]: fit}, styles[variant], styles[size], className)
		return (
			<button ref={ref} {...props} disabled={disabled} className={classes}>
				{IconLeft && <IconLeft className="mr-2" />}
				{children}
				{IconRight && <IconRight className="ml-2" />}
			</button>
		)
	}
)

export default Button
