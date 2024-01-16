import clsx from 'clsx'

import styles from './footer.module.scss'

const Footer: React.FC = () => {
	return(
		<div className={clsx(styles.container)}>
			<div className={clsx(styles.navWrapper)}>
			</div>
			<div className={clsx(styles.copyright)}>
				<span>Copyright @ 2024</span>
			</div>
		</div>
	)
}

export default Footer
