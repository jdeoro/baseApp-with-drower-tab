import { } from 'react-native'
import React, {createContext,PropsWithChildren,useContext} from 'react'

export const AuthContext = createContext({})


const AuthProvider = ({children}: PropsWithChildren) => {
  return (
    <AuthContext.Provider value={{ userName:"Jorge"}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)