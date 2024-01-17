import clsx from 'clsx'
import {NextPage} from 'next'
import {Button} from 'antd'

import MainNav from '@/components/common/layouts/MainNav'

import styles from './signup.module.scss'
import useLogic from './useLogic'

const AdminSignUp: NextPage = () => {
	const {submit, Form, NotificationContextHolder} = useLogic()

	return (
		<MainNav>
			{NotificationContextHolder}
			<div className={clsx(styles.screen)}>
				<div className={clsx(styles.container)}>
					<h3>Create your Account</h3>
					<hr className={clsx(styles.hr)} />
					<div>
						<Form />
					</div>
				
					<Button className={clsx(styles.signUp)} onClick={submit}>Sign Up</Button>
				</div>
			</div>
		</MainNav>
	)
}

export default AdminSignUp
