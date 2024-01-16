import clsx from 'clsx'
import {Space, Table} from 'antd'
import type {TableProps} from 'antd'
import {useState} from 'react'

import Button from '@/components/common/elements/Button'

import DrawerRight from '../Drawer'

import styles from './tableList.module.scss'

interface DataType {
 key: string;
 brand: string;
 year: string;
 color: string;
 mileage: string;
 status: string;
 openingBid: string;
 currentBid: string;
 expired: string;
 productId: string
}

const columns: TableProps<DataType>['columns'] = [
	{
		title: 'Car Brand',
		dataIndex: 'brand',
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
	},
	{
		title: 'Opening Bid',
		dataIndex: 'openingBid',
		key: 'openingBid',
	},
	{
		title: 'Current Bids',
		dataIndex: 'currentBid',
		key: 'currentBid',
	},
	{
		title: 'expired',
		dataIndex: 'expired',
		key: 'expired',
	},
	{
		title: 'Action',
		dataIndex: 'productId',
		key: 'productId',
		render: (id) => (
			<Space size="middle">
				<button>Update - {id}</button>
				<button>Achieve</button>
			</Space>
		),
	},
]

const data: DataType[] = [
	{
		key: '1',
		brand: 'Honda xyz',
		year: '2025',
		color: 'white',
		mileage: '33000',
		status: 'active',
		openingBid: '100',
		currentBid: '300',
		expired: '01/23/2024',
		productId: '1'
	},
	{
		key: '2',
		brand: 'Ford xyz',
		year: '2025',
		color: 'red',
		mileage: '3000',
		status: 'active',
		openingBid: '200',
		currentBid: '300',
		expired: '01/25/2024',
		productId: '2'
	},
]


const TableList: React.FC = () => {
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}
	return (
		<div className={clsx(styles.container)}>
			<div><Button onClick={showDrawer}>Add New</Button></div>
			<Table columns={columns} dataSource={data} />
			<DrawerRight setOpen={setOpen} open={open} />
		</div>
	)
}

export default TableList