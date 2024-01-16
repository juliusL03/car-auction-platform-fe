import {Space} from 'antd'
import Link from 'next/link'
import clsx from 'clsx'

import Button from '@/components/common/elements/Button'

import styles from './auth.module.scss'

const Auth: React.FC = () => {
	return (
		<div className={clsx(styles.container)}>
			<Space size={16} wrap>
				<Link href={'/signin'}><Button>Sign In</Button></Link>
				<Link href={'/signup'}><Button variant="orange">Sign up</Button></Link>
			</Space>
		</div>
	)
}

export default Auth