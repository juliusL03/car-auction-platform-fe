import {UserOutlined} from '@ant-design/icons'
import {Avatar, Dropdown, MenuProps, Space} from 'antd'
import {Fragment} from 'react'
import clsx from 'clsx'

import logout from './logout'
import styles from './profile.module.scss'

type props = {
 firstName: string | undefined
}

const Profile: React.FC<props> = ({firstName = 'newbie'}) => {

	const {Logout, NotificationContextHolder} = logout()

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
					<h3>Hi {firstName}!</h3>
					<Dropdown menu={{items}} placement="bottom" arrow>
						<Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
					</Dropdown>
				</Space>
			</div>
			
		</Fragment>
	)
}

export default Profile