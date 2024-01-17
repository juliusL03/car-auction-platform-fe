import {UserOutlined} from '@ant-design/icons'
import {Avatar, Dropdown, MenuProps, Space} from 'antd'
import {Fragment} from 'react'
import clsx from 'clsx'

import logout from './logout'
import styles from './profile.module.scss'

const Profile: React.FC = () => {

	const {Logout, NotificationContextHolder, user} = logout()
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Logout />
			),
		},
	]

	return (
		<Fragment>
			{NotificationContextHolder}
			<div className={clsx(styles.space)}>
				<Space size={16} wrap>
					<h3>Hi {user?.name}!</h3>
					<Dropdown menu={{items}} placement="bottom" arrow>
						<Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
					</Dropdown>
				</Space>
			</div>
			
		</Fragment>
	)
}

export default Profile