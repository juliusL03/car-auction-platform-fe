import type {MenuProps} from 'antd'
import Link from 'next/link'

export const mainItems: MenuProps['items'] = [

	{
		label: 'Brands',
		key: '/Brands',
		// icon: <CollectionsIcon className={styles.icon} />,
		children: [
			{
				key: '/collections/invoices',
				label: <Link href="/collections/invoices">Invoices</Link>
			},
			{
				key: '/collections/customers',
				label: <Link href="/collections/customers">Customers</Link>
			}
		]
	},
	{
		label: 'Catalog',
		key: '/Catalog',
		
	},
	{
		label: <Link href="/support">Support</Link>,
		key: '/support',
		// icon: <AccountingIcon className={styles.icon} />
	},

]

