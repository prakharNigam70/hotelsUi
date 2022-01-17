import { createContext, useEffect, useState } from 'react';
import firebase from 'firebase'
import LoadingSpinner from './LoadingSpinner';

export const UserContext = createContext<firebase.User | null>(null)

interface IProps {
    children : React.ReactNode
}

export default function UserProvider(props : IProps){
    const [user, setUser] = useState<firebase.User | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        })
    }, [])

    return(
        <UserContext.Provider value={user}>
        {isLoading && <LoadingSpinner/>}
        {!isLoading && props.children}
        </UserContext.Provider>
    )
}