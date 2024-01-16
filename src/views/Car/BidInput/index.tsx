import clsx from 'clsx'

import styles from './bidInput.module.scss'
import {ItemProps} from './type'

const BidInput: React.FC<ItemProps> = () => {
	
	return (
		<div className={clsx(styles.container)}>
			<span className={clsx(styles.incrementBtn)}>-</span>
			<input 
				type="number" 
				className={clsx(styles.input)}
				onWheel={ event => event.currentTarget.blur()}
			/>
			<span className={clsx(styles.incrementBtn)}>+</span>
		</div>
	)
}

export default BidInput