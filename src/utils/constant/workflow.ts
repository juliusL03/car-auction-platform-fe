import {TCreateUpdateWorkflowPayload} from '@/store/slices/workflow/types'
import {uuid} from '@/utils/helpers/string'
import {TEdgeType, TLogo, TNodeDataType, TNodeType, TTags} from '@/utils/models/workflow'

export const FAST_TRANSFER = 'FAST_TRANSFER'
export const LOW_COST_TRANSFER = 'LOW_COST_TRANSFER'

export const PAYMENT_CHANNEL = ['dbs']
export const EMAIL_CHANNEL = ['sendgrid']

export const GET_DEFAULT_WORKFLOW_DATA = (): TCreateUpdateWorkflowPayload => {
	const triggerId = uuid()
	const placeholderId = uuid()
	const endId = uuid()

	return {
		name: 'Untitled workflow',
		nodes: [
			{
				id: triggerId,
				type: TNodeType.Trigger,
				data: {
					type: TNodeDataType.Trigger,
					title: 'Trigger Type',
					description: 'When do you want to trigger this flow?'
				},
				position: {
					x: 0,
					y: 0
				}
			},
			{
				id: placeholderId,
				type: TNodeType.Placeholder,
				data: null,
				position: {
					x: 0,
					y: 0
				}
			},
			{
				id: endId,
				type: TNodeType.End,
				data: null,
				position: {
					x: 0,
					y: 0
				}
			}
		],
		edges: [
			{
				id: `${triggerId}=>${placeholderId}`,
				source: triggerId,
				target: placeholderId,
				type: TEdgeType.Placeholder
			},
			{
				id: `${placeholderId}=>${endId}`,
				source: placeholderId,
				target: endId,
				type: TEdgeType.Placeholder
			}
		]
	}
}

export const SOURCE_MAPPING: {
	[key: string]: {
		title: string
		logo: TLogo
		tags: TTags[]
	}
} = {
	sendgrid: {
		title: 'Sendgrid',
		logo: {
			path: '/img/logo/Sendgrid.png',
			alt: 'SendGrid Logo'
		},
		tags: [
			{label: 'Operations', color: 'purple'},
			{label: 'Marketing', color: 'red'}
		]
	},
	xero: {
		title: 'Xero',
		logo: {
			path: '/img/logo/Xero.png',
			alt: 'Xero Logo'
		},
		tags: [
			{label: 'Operations', color: 'purple'},
			{label: 'Marketing', color: 'red'}
		]
	},
	dbs: {
		title: 'DBS',
		logo: {
			path: '/img/logo/Paynow.png',
			alt: 'PayNow Logo'
		},
		tags: [
			{label: 'Operations', color: 'purple'},
			{label: 'Marketing', color: 'red'}
		]
	},
	stripe: {
		title: 'Stripe',
		logo: {
			path: '/img/logo/Stripe.png',
			alt: 'Stripe Logo'
		},
		tags: [
			{label: 'Operations', color: 'purple'},
			{label: 'Marketing', color: 'red'}
		]
	},
	pccrits: {
		title: 'PcCrits',
		logo: {
			path: '/img/logo/PcCrits.png',
			alt: 'PcCrits Logo'
		},
		tags: [
			{label: 'Operations', color: 'purple'},
			{label: 'Marketing', color: 'red'}
		]
	}
}
