import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

type TProps = {
	src: string
	alt: string
	bordered?: boolean
	className?: string
}

const LogoImage: React.FC<TProps> = ({src, alt, bordered = false, className = 'h-12 w-12'}) => {
	return (
		<div
			className={clsx(
				'flex items-center justify-center',
				bordered && 'border p-2 rounded-md bg-white',
				className
			)}
		>
			<Image src={src} alt={alt} height={100} width={100} />
		</div>
	)
}

export default LogoImage
