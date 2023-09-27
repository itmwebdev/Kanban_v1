import { IMenuItem } from '@/components/dashboard-layout/sidebar/menu.interface'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export const MENU:IMenuItem[] = [
	{
		icon: 'dashboard-layout-dashboard',
		link: DASHBOARD_PAGES.HOME,
		name: 'dashboard'
	},
	{
		icon: 'kanban-square',
		link: DASHBOARD_PAGES.TASKS,
		name: 'Tasks'
	},
	{
		icon: 'circle-dashed',
		link: DASHBOARD_PAGES.HABITS,
		name: 'Habits'
	},
	{
		icon: 'timer',
		link: DASHBOARD_PAGES.TIMER,
		name: 'Timer'
	},
	{
		icon: 'circle-dashed',
		link: DASHBOARD_PAGES.TIME_MANAGEMENT,
		name: 'Time management'
	},
	{
		icon: 'cog',
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Setting'
	}
]