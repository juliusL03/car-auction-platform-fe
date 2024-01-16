export const isEmpty = (value: any | any[]) => {
	if (typeof value !== 'object') return true

	if (Array.isArray(value)) return value.length === 0

	return Object.keys(value).length === 0
}
