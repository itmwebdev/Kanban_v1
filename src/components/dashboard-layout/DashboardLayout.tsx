'use client'
import type { PropsWithChildren } from 'react'
import { Sidebar } from '@/components/dashboard-layout/sidebar/Sidebar'
import { ProfileSection } from '@/components/dashboard-layout/profile/ProfileSection'

export function DashboardLayout({children}: PropsWithChildren) {
	return <div>
		<Sidebar/>
		<ProfileSection/>
		<main>
			{children}
		</main>
	</div>
}