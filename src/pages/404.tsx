import {Button, Result} from 'antd'
import Link from 'next/link'

const Custom404 = () => {
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page is not exist."
			extra={
				<Button type="link">
					<Link href="/">Back Home</Link>
				</Button>
			}
		/>
	)
}

export default Custom404
