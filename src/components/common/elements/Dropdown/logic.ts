import {useRef, useState} from 'react'

import useOutsideClick from '@/utils/hooks/useOutsideClick'

type Props = {
	onSelect: (value: string | number) => void
}

const useLogic = ({onSelect}: Props) => {
	const dropdownRef = useRef<HTMLDivElement>(null)

	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	useOutsideClick(dropdownRef, () => {
		setIsOpen(false)
	})

	const handleOnSelect = (value: string | number) => {
		onSelect(value)
		setIsOpen(false)
	}

	return {dropdownRef, handleOnSelect, toggleDropdown, isOpen, setIsOpen}
}

export default useLogic
