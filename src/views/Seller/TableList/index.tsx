/* eslint-disable sonarjs/no-use-of-empty-return-value */
import clsx from 'clsx'
import {Badge, Space, Table} from 'antd'
import type {TableProps} from 'antd'
import {useState} from 'react'

import Button from '@/components/common/elements/Button'

import DrawerRight from '../Drawer'

import styles from './tableList.module.scss'
import useLogic from './useLogic'

interface DataType {
 brand_name: string
 year: string
 color: string
 mileage: string
 status: string
 start_bid: string
 current_bid: string
 expiry_date: string
 productId: string
 user_id: string
 _id: string
}

const TableList: React.FC = () => {
	const [open, setOpen] = useState(false)

	const {products, user, stopBid, archiveBid} = useLogic()

	const showDrawer = () => {
		setOpen(true)
	}

	const columns: TableProps<DataType>['columns'] = [
		{
			title: 'Car Brand',
			dataIndex: 'brand_name',
			key: 'brand',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Year',
			dataIndex: 'year',
			key: 'year',
		},
		{
			title: 'Mileage',
			dataIndex: 'mileage',
			key: 'mileage',
		},
		{
			title: 'Color',
			dataIndex: 'color',
			key: 'color',
		},
		{
			title: 'status',
			dataIndex: 'status',
			key: 'status',
			render: (tag) => (
				<Space size="middle">
					<Badge count={tag} style={tag === 'active' ? {backgroundColor: '#52c41a'} : {backgroundColor: '#EB1E2B'}}/>
				</Space>
			),
		},
		{
			title: 'Opening Bid',
			dataIndex: 'start_bid',
			key: 'openingBid',
		},
		{
			title: 'Current Bids',
			dataIndex: 'current_bid',
			key: 'currentBid',
		},
		{
			title: 'expired',
			dataIndex: 'expiry_date',
			key: 'expired',
		},
		{
			title: 'Action',
			key: '_id',
			render: (payload) => (
				<Space size="middle">
					{user?._id ? <span className={payload.status === 'active' ? styles.stopBtn : styles.startBtn} onClick={() => stopBid(payload)}>{payload.status === 'active' ? 'Stop' : 'Start'}</span> : ''}
					{user?.admin ? <span className={styles.stopBtn} onClick={() => archiveBid(payload)}>Achieve</span> : ''}
				</Space>
			),
		},
	]
	return (
		<div className={clsx(styles.container)}>
			<div><Button onClick={showDrawer}>Add New</Button></div>
			<Table columns={columns} dataSource={products} />
			<DrawerRight setOpen={setOpen} open={open} />
		</div>
	)
}

export default TableList