import clsx from 'clsx'

import Link from 'next/link'

import styles from './logo.module.scss'

const HeadbarLogo: React.FC = () => {
	return (
		<Link href="/" className={clsx(styles.logo)}>
			<span>Car <span className={clsx(styles.changeColor)}>Auction</span> Platform</span>
		</Link>
	)
}

export default HeadbarLogo