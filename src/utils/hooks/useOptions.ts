import {useEffect, useState} from 'react'

const useOptions = (fetcher: () => Promise<any>) => {
	const [options, setOptions] = useState([])

	useEffect(() => {
		const fetchOptions = async () => {
			const resp = await fetcher()
			const {data} = resp as any

			if (!data) return
			setOptions(data.map((item: any) => ({label: item.name, value: item._id, ...item})))
		}

		fetchOptions()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return {
		setOptions,
		options
	}
}

export default useOptions
