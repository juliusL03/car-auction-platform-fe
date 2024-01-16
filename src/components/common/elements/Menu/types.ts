interface data {
 name: string,
 link: string,
 type: string,
 options?: megaData[]
}

export interface Props {
	itemsMenu: data[]
}

interface megaData {
 name: string,
 link: string
}

export interface MegaProps {
 name: string,
	options: megaData[] | undefined
}