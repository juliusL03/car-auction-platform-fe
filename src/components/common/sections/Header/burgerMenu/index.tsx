import React from 'react'
import {MenuOutlined} from '@ant-design/icons'

type props = {
 onClick: () => void
}

const BurgerMenu = ({onClick}: props) => {
	return (
		<MenuOutlined style={{fontSize: '22px'}} onClick={onClick}/>
	)
}

export default BurgerMenu
