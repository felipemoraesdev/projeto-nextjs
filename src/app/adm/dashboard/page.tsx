"use client"; // This is a client component 👈🏽

import { HomePageAdmin } from '@/components/adm/HomePageAdmin';
import { RouteProtectedProvider } from '@/hooks/useRouteProtected';

export default function Dashboard() {


  return (
    <RouteProtectedProvider>
      <HomePageAdmin />
    </RouteProtectedProvider>
  )
}
