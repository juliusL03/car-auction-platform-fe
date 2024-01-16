// ** Third Party Components
import PropTypes from 'prop-types'
import React, {
	ElementType,
	ReactNode,
	useCallback,
	useEffect,
	useState
} from 'react'
import clsx from 'clsx'

import Button from '@/elements/Button'
import {CloseIcon} from '@/assets/icon'

import styles from './repeater.module.scss'

type RepeaterProps = {
	count?: number,
	tag: ElementType,
	name: string,
	itemClassName?: string,
	children: (item: number) => ReactNode
}

let inited = false

const Repeater = (props: RepeaterProps) => {
	const {count: initialCount = 1, itemClassName, name, tag, children, ...rest} = props

	const [count, setCount] = useState(initialCount || 1)

	useEffect(() => {
		if (!inited) {
			inited = true
		}
	}, [])

	const deleteItem = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
		e.preventDefault()
		if (typeof document !== 'undefined') {
			document.getElementById(`${name}-${i}`)?.remove()
		}
	}, [name])


	const increaseCount = () => {
		setCount(count + 1)
	}

	const Tag = tag

	return (
		<div className="flex flex-col">
			<Tag {...rest}>{Array.from({length: count}).map((_, i) => (
				<div key={`${name}-${i}`} className={clsx(itemClassName, styles.item)} id={`${name}-${i}`}>
					{children(i)}
					<Button type="button" className={styles.closeButton} onClick={(e) => deleteItem(e, i)} ><CloseIcon /></Button>
				</div>
			))}</Tag>
			<Button type="button" variant="primary" className={clsx(styles.addButton)} onClick={increaseCount}>Add New</Button>
		</div>
	)
}

Repeater.propTypes = {
	count: PropTypes.number,
	tag: PropTypes.string.isRequired
}

Repeater.defaultProps = {
	tag: 'div',
	count: 1
}

export default Repeater
