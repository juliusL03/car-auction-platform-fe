import React, {ReactNode} from 'react'
import clsx from 'clsx'

import styles from './content.module.scss'

type TProps = {
	children: ReactNode
}

const Content: React.FC<TProps> = ({children}) => {
	return <div className={clsx(styles.container)}>{children}</div>
}

export default Content
