import clsx from 'clsx'

import styles from './bidInput.module.scss'
import {ItemProps} from './type'

const BidInput: React.FC<ItemProps> = ({setValue, value, currentBid}) => {

	const increment = () => {
		if(value === 0) {
			setValue(parseInt(currentBid ? currentBid : '') + parseInt(value) + 25)
		} else {
			setValue(parseInt(value) + 25)
		}
		
	}

	const decrement = () => {
		if(value !== 0){
			setValue(parseInt(value) - 25)
		} else {
			if (value) {
				setValue(parseInt(currentBid ? currentBid : '') + parseInt(value) - 25)
			}
		}

		
	}
	
	return (
		<div className={clsx(styles.container)}>
			<span className={clsx(styles.incrementBtn)} onClick={decrement}>-</span>
			<input 
				type="number" 
				className={clsx(styles.input)}
				onWheel={ event => event.currentTarget.blur()}
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
			<span className={clsx(styles.incrementBtn)} onClick={increment}>+</span>
		</div>
	)
}

export default BidInput