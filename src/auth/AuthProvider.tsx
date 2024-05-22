import { useEffect, useState } from "react";
import AuthContext, { Token } from "./AuthContext";
import { TokenResponse } from "../types/TokenResponseType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosPrivate } from "../axios/axios";

const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const [auth,setAuth] = useState<Token>({token: null,isTokenValid: false});

  useEffect(() => {
    saveAuthData()
  },[auth])

  const saveAuthData = () => {
    AsyncStorage.setItem("authorization",JSON.stringify(auth))
  }

  const getAuthData = () => {
    AsyncStorage.getItem("authorization").then(data => setAuth(JSON.parse(data)))
  }

  if(auth.token === null) {
    getAuthData()
  }

  const signIn = (email: string, password: string) => {
    axiosPrivate
        .post<TokenResponse>("auth/login",{
          email: email,
          password: password
        })
        .then(response => response.data)
        .then(data => setAuth({token: data.token,isTokenValid: true}))
  }

  const register = (email: string, username: string, password: string) => {
    axiosPrivate
        .post<TokenResponse>("auth/register",{
          email: email,
          password: password,
          username: username,
        })
        .then(response => response.data)
        .then(data => setAuth({token: data.token,isTokenValid: true}))
  }

  const singOut = () => {
    setAuth(prevState => {
        return {...prevState,isTokenValid: false}
    })
  }

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        signIn: signIn,
        signOut: singOut,
        register: register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
