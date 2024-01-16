import {ButtonHTMLAttributes} from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'icon' | 'purple' | 'orange'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	rounded?: boolean
	fit?: boolean
	iconLeft?: any
	iconRight?: any
 className?: any
}

export type TButtonItem = {
	label: string
	onClick?: (e: React.MouseEvent, button: TButtonItem) => void
	active?: boolean
}

export type GroupButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	buttons: TButtonItem[]
}
