import {Layout} from 'antd'
import Head from 'next/head'

import Header from '../../sections/Header'
import Footer from '../../sections/Footer'

import Container from './Container'
import Content from './Content'

const title = 'Car Auction Platform'

type TProps = {
	children: React.ReactNode
}

const MainNav: React.FC<TProps> = ({children}) => {
	return (
		<Layout>
			<Head>
				<title>{title}</title>
			</Head>
			<Container>
				<Header />
				<Content>{children}</Content>
				<Footer />
			</Container>
		</Layout>
	)
}

export default MainNav
