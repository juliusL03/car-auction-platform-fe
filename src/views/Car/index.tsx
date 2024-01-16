import {NextPage} from 'next'
import {useSearchParams} from 'next/navigation'

import MainNav from '@/components/common/layouts/MainNav'

import CarInfo from './CarInfo'

const Car: NextPage = () => {
	const searchParams = useSearchParams()
	return (
		<MainNav>
			<CarInfo id={searchParams.get('id')}/>
		</MainNav>
	)
}

export default Car
