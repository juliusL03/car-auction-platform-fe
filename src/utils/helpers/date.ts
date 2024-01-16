import {addMinutes, format, parseISO} from 'date-fns'
import {Dayjs} from 'dayjs'

export const getPassedDate = (current: Dayjs, compareTo?: Dayjs) => {
	return !!compareTo 
		? current.valueOf() < compareTo.valueOf() 
		: current.valueOf() < Date.now()
}

export const toISOStringSGT = (date: Date): string => {
	let dt = new Date(date)

	// Singapore Standard Time is 8 hours ahead of UTC.
	const offset = 8 * 60

	// Add the timezone offset from the local time and convert to UTC.
	dt = addMinutes(dt, dt.getTimezoneOffset() + offset)

	// Convert the UTC date to an ISO string.
	// Return the ISO string.
	return format(dt, 'yyyy-MM-dd\'T\'HH:mm:ssXXX')
}

export const formatDate = (dateStr: string | undefined): string => {
	if (!dateStr) return ''
	const date = parseISO(dateStr)
	return format(date, 'MMMM do, yyyy hh:mm a')
}

export const nowStr = (): string => toISOStringSGT(new Date())

export const formatDateString = (dateStr: string | undefined): string => {
	if (!dateStr) return ''
	const date = parseISO(dateStr)
	return format(date, 'dd MMM yyyy')
}
