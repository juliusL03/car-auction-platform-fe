import {Button, Result} from 'antd'
import Link from 'next/link'

const Custom403 = () => {
	return (
		<Result
			status="403"
			title="403"
			subTitle="Sorry, you are not authorized to access this page."
			extra={
				<Button type="link">
					<Link href="/">Back Home</Link>
				</Button>
			}
		/>
	)
}

export default Custom403
