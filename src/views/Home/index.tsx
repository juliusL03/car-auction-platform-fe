import {NextPage} from 'next'

import MainNav from '@/components/common/layouts/MainNav'

import AuctionList from './auction'

const Home: NextPage = () => {

	return (
		<MainNav>
			<AuctionList />
		</MainNav>
	)
}

export default Home
