import clsx from 'clsx'
import {Badge, Table} from 'antd'
import type {TableProps} from 'antd'
import Link from 'next/link'
import {useEffect} from 'react'

import useLogic from '../useLogic'

import styles from './tableList.module.scss'

interface DataType {
 key: string;
 productName: string;
 bid: string;
 currentBid: string;
 status: string;
 expired: string;
 productId: string;
}

const columns: TableProps<DataType>['columns'] = [
	{
		title: 'Car Name',
		dataIndex: 'productName',
		key: 'productName'
	},
	{
		title: 'Bid',
		dataIndex: 'bid',
		key: 'bid',
	},
	{
		title: 'Current Bid',
		dataIndex: 'currentBid',
		key: 'currentBid',
	},
	{
		title: 'Status',
		key: 'status',
		dataIndex: 'status',
		render: (tag) => (
			<Badge count={tag} style={tag === 'active' ? {backgroundColor: '#52c41a'} : {backgroundColor: '#EB1E2B'}}/>
		),
	},
	{
		title: 'Expire Date',
		dataIndex: 'expired',
		key: 'expired',
	},
	{
		title: 'Action',
		key: 'productId',
		dataIndex: 'productId',
		render: (id) => (
			<Link href={`/car?id=${id}`}>Show</Link>
		),
	}
]

const TableList: React.FC = () => {
	const {getBidList, user, bids} = useLogic()

	useEffect(() => {
		getBidList({
			page: 1, limit: 10,
			user_id: user?._id
		})
	}, [getBidList, user?._id])

	const listData = bids.map((list, index) => ({
		key: index,
		productName: list.product.brand_name,
		bid: list.amount,
		currentBid: list.product.current_bid,
		productId: list.product_id,
		expired: list.product.expiry_date,
		status: list.product.status
	}))

	return (
		<div className={clsx(styles.container)}>
			<Table columns={columns} dataSource={listData} />
		</div>
	)
}

export default TableList