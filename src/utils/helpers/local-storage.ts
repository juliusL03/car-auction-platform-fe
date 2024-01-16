const INTEGRATION_DATA = 'pccrits:integration'

export type TIntegratedData = {
	[source: string]: {
		connected: boolean
		email: string
	}
}

export const setIntegrationData = (integrationDataValue: string) =>
	window.localStorage.setItem(INTEGRATION_DATA, integrationDataValue)
export const getIntegrationData = () => window.localStorage.getItem(INTEGRATION_DATA) ?? '{}'
export const removeIntegrationData = () => window.localStorage.removeItem(INTEGRATION_DATA)
