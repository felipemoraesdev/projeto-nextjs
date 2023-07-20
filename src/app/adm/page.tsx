"use client"; // This is a client component 👈🏽

import { HomePageAdmin } from '@/components/adm/HomePageAdmin';
import { Loader } from '@/components/Loader';
import { RouteProtectedProvider } from '@/hooks/useRouteProtected';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {

  // const { data: session, status } = useSession()
  // const route = useRouter();

  // if (status === "loading") {
  //   return (<Loader message='Carregando...' />)
  // }

  // if (status === "unauthenticated") {
  //   route.push('/login/?error=true')

  //   return false
  // }

  return (
    <RouteProtectedProvider>
      <HomePageAdmin />
    </RouteProtectedProvider>
  )
}
