import clsx from 'clsx'
import {Badge, Table} from 'antd'
import type {TableProps} from 'antd'
import Link from 'next/link'

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
			<Badge count={tag} style={{backgroundColor: '#52c41a'}}/>
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

const data: DataType[] = [
	{
		key: '2',
		productName: '2x Honda xyz',
		bid: '$ 110.00',
		currentBid: '$ 110.00',
		productId: '2',
		expired: '01/23/2024',
		status: 'active'	
	},
	{
		key: '3',
		productName: 'ford xyz',
		bid: '$ 120.00',
		currentBid: '$ 210.00',
		productId: '3',
		expired: '01/24/2024',
		status: 'active'
	},
	{
		key: '1',
		productName: 'Honda xyz',
		bid: '$ 120.00',
		currentBid: '$ 120.00',
		productId: '1',
		expired: '01/25/2024',
		status: 'active'
	},
]


const TableList: React.FC = () => {
	return (
		<div className={clsx(styles.container)}>
			<Table columns={columns} dataSource={data} />
		</div>
	)
}

export default TableList