export const uuid = (): string => `${new Date().getTime().toString(36)}${Math.random().toString(36).slice(2)}`

export const capitalize = (str: string): string => {
	if (!str) return ''

	const arr = str.split(' ')

	for (let i = 0; i < arr.length; i += 1) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
	}

	return arr.join(' ')
}

export const lowercase = (str: string): string => {
	const arr = str.split(' ')

	for (let i = 0; i < arr.length; i += 1) {
		arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1)
	}

	return arr.join(' ')
}

export const underscoreToSpace = (str: string): string => {
	return str.replace(/_/g, ' ')
}

export const periodToLineSeparator = (str: string): string => {
	return str.replace(/\./g, ' | ')
}

export const dashToSpace = (str: string): string => {
	if (!str) return ''

	return str.replace(/-/g, ' ')
}

export const formatFieldsetName = (str: string): string => {
	return capitalize(underscoreToSpace(str.replace(/\./g, ' - '))).replace(/\[.*?\]/g, '')
}

export const extractNameFromFieldKey = (fieldKey: string): string => {
	const temp = fieldKey.split('.')
	return formatFieldsetName(temp[temp.length - 1])
}

export const extractContentHeaderFromRoute = (header: string): string => {
	const arr = header.split('/')

	return capitalize(arr[arr.length - 1])
}

export const calculateProgressPercentageFromString = (progress: string): number => {
	const arr = progress.split('/')
	const currProgress = parseInt(arr[0])
	const totalProgress = parseInt(arr[1])

	return Math.floor((currProgress / totalProgress) * 100)
}

export const extractBaseURI = (uri: string): string => {
	return `${uri.split('/')[1]}${!!uri.split('/')[2] ? ' | ' + uri.split('/')[2] : ''}`
}

export const capitalizeFirstChar = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export const isValidEmail = (email: string) => {
	const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	return pattern.test(email)
}

export const stringToObject = (inputString: string, value: unknown = ''): Record<string, any> => {
	const keys = inputString.split('.')
	const result: Record<string, any> = {}

	keys.reduce((acc, key, index) => {
		if (index === keys.length - 1) {
			acc[key] = value
		} else {
			acc[key] = acc[key] || {}
		}
		return acc[key]
	}, result)

	return result
}

export const hasPeriod = (inputString: string): boolean => {
	return inputString.includes('.')
}
