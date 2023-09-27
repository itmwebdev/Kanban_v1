import { IMenuItem } from '@/components/dashboard-layout/sidebar/menu.interface'
import Icon from '@/components/ui/icon'
import Link from 'next/link'


export function  MenuItem({item}: {item: IMenuItem}) {
	return (
		<div>
			{
				<Link href={item.link} >
					<Icon name={item.icon}/>
					<span>{item.name}</span>
				</Link>
			}
		</div>
	)
}