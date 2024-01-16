
import clsx from 'clsx'

import styles from './container.module.scss'
import {Props} from './types'

const Container: React.FC<Props> = ({children}) => {
	return <div className={clsx(styles.container)}>{children}</div>
}

export default Container
