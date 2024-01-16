import clsx from 'clsx'
import {NextPage} from 'next'
import {Button} from 'antd'

import MainNav from '@/components/common/layouts/MainNav'

import styles from './signin.module.scss'
import useLogic from './useLogic'

const SignIn: NextPage = () => {
	const {submit, Form, NotificationContextHolder} = useLogic()

	return (
		<MainNav>
			{NotificationContextHolder}
			<div className={clsx(styles.screen)}>
				<div className={clsx(styles.model)}>
					<h3>Please Log In</h3>
					<hr className={clsx(styles.hr)} />
					<Form />
					<Button className={clsx(styles.signIn)} onClick={submit}>Sign In</Button>
				</div>
			</div>
		</MainNav>
	)
}

export default SignIn
