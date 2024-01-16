import {NextPage} from 'next'

import MainNav from '@/components/common/layouts/MainNav'

import TableList from './TableList'

const Seller: NextPage = () => {
	return (
		<MainNav>
			<TableList />
		</MainNav>
	)
}

export default Seller
