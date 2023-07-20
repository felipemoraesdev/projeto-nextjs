import { Loader } from "@/components/Loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";


interface IRouteProtectedProps {
    
}

interface IRouteProtectedProviderProps {
    children: ReactNode
}

export const RouteProtected = createContext({} as IRouteProtectedProps);

export function RouteProtectedProvider({ children }: IRouteProtectedProviderProps) {

    const { data: session, status } = useSession()
    const route = useRouter();

    if (!session && status === "loading") {
        return (<Loader message='Carregando...' />)
    }

    if (!session && status === "unauthenticated") {
        route.push('/login/?error=true')

        return false
    }

    return (
        <RouteProtected.Provider value={{}}>
            {children}
        </RouteProtected.Provider>
    )
}

export function useRouteProtected() {
    const loader = useContext(RouteProtected);

    return loader;
}

