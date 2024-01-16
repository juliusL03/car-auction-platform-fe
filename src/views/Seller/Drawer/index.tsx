import {Drawer} from 'antd'

import Button from '@/components/common/elements/Button'

import useLogic from './useLogic'
import {props} from './type'

const DrawerRight: React.FC<props> = ({setOpen, open}) => {
	const {submit, Form, NotificationContextHolder} = useLogic()

	const onClose = () => {
		setOpen(false)
	}

	const onSubmit = () => {
		submit()
		setOpen(false)
	}

	const footer = <div><Button variant="orange" onClick={onSubmit}>Submit</Button></div>

	return (
		<>
			{NotificationContextHolder}
			<Drawer
				title="Create new auction"
				placement="right"
				onClose={onClose}
				open={open}
				key="right"
				footer={footer}
			>
				<Form />
			</Drawer>
		</>
		
	)
}

export default DrawerRight