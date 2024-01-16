import {Dropdown, Space} from 'antd'
import clsx from 'clsx'
import {useState} from 'react'
import {DownOutlined, UpOutlined} from '@ant-design/icons'

import styles from './dropdown.module.scss'
type list = string


type props = {
 onSelect: (value: string) => void,
 listItems: list[]
}

const DropdownAnt: React.FC<props> = ({onSelect, listItems}) => {
	const [name, setName] = useState(listItems[0])
	const [open, setOpen] = useState(false)
	const selectHandler = (selected: string) => {
		setName(selected)
		onSelect(selected)
		setOpen(!open)
	}

	const newMenu = listItems.map((item, index) => ({
		key: `${index}`,
		label: (
			<label onClick={() => (selectHandler(item))}>
				{item}
			</label>
		)
	}))

	return <Dropdown menu={{items: newMenu}} placement="bottom">
		<a onClick={(e) => {
			e.preventDefault()
			setOpen(!open)
		}
		}>
			<Space className={clsx(styles.baseText)}>
				{name}
				<div className={clsx(styles.center)}>
					{open ? <UpOutlined /> : <DownOutlined />}
				</div>
			</Space>
		</a>
	</Dropdown>
}

export default DropdownAnt