type title = {
 name: string,
 link: string
}

type option = {
 label: string,
 link: string
}

type data = {
 name: title,
 options: option[]
}

export type Props = {
	itemsMenu: data
}
