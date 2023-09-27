import { MENU } from './menu.data'
import { MenuItem } from './MenuItem'

export function Sidebar() {
	return <aside>
		{MENU.map(item => (
			<MenuItem item={item} key={item.link} />
		))}
	</aside>
}