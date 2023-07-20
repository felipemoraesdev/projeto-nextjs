import { Loader } from "@/components/Loader";
import { createContext, ReactNode, useContext, useState } from "react";


interface ILoaderContextProps {
    show: (message?: string) => void,
    hide: () => void
}

interface ILoaderContextProviderProps {
    children: ReactNode
}

export const LoaderContext = createContext({} as ILoaderContextProps);

export function LoaderContextProvider({ children }: ILoaderContextProviderProps) {

    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const [messageLoader, setMessageLoader] = useState("Carregando...");

    function show(message?: string) {
        setMessageLoader(message ? message : messageLoader);
        setIsLoaderVisible(true);
    }

    function hide() {
        setIsLoaderVisible(false);
    }

    return (
        <LoaderContext.Provider value={{ show, hide }}>
            {children}
            {isLoaderVisible && (<Loader message={messageLoader} />)}
            
        </LoaderContext.Provider>
    )
}

export function useLoader() {
    const loader = useContext(LoaderContext);

    return loader;
}

