import {NextPage} from 'next'

import MainNav from '@/components/common/layouts/MainNav'
import TableList from './TableList'

const BidList: NextPage = () => {
	return (
		<MainNav>
			<TableList />
		</MainNav>
	)
}

export default BidList
