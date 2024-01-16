export type TOptions = {
	label: string
	value: string | number
	icon?: any
	onClick?: () => void
}

export type DropdownProps = {
	label: string
	options: TOptions[]
	variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info'
	onSelect: (value: string | number) => void
	className?: string
	buttonStyle?: string
	value: string | number
	iconLeft?: any
	iconRight?: any
}
