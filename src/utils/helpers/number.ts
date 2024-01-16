export const formatCurrency = (amount = 0, currencyCode = 'USD') => {
	// Use the Intl.NumberFormat object to format the number as currency
	const formatter = new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency: currencyCode
	})

	// Return the formatted currency string
	return formatter.format(amount)
}

export const sanitizeCurrency = (amount: number) => {
	return amount.toFixed(2)
}
