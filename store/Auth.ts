import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { SetOrGetOnBoarding } from "@/Actions/user/SetOrGetOnBoarding";
import { AppwriteException, ID, Models } from "node-appwrite";
import { Sdatabase } from "@/models/Client/ServerConfig";
import { AWdata } from "@/models/data";

import NextAuth, { DefaultSession,Session } from "next-auth";

import {  } from "next-auth";
import { signOut } from "next-auth/react";

const { userCollection } = AWdata;


interface IdAuth{
  userLoggedIn: "loading" | "authenticated" | "unauthenticated"
  sessionInfo:DefaultSession | null 
    hydrated:boolean
    onBoarded:boolean 
    setSession(sessionInfo:Session):void
    setHydrated:()=>void
    clearSession:()=>void
    setOnBoardingValue:(value:boolean )=>void
    setSessionByValue(value:"unauthenticated" | "loading"):void
}

export const useAuthStore = create<IdAuth>()(
  persist(
    immer((set) => ({
      userLoggedIn: "loading",
        hydrated: false,
        onBoarded: false,
        sessionInfo:null,
        setSession(sessionInfo){
            if (sessionInfo?.user?.email){
              set({
                userLoggedIn: "authenticated",
                sessionInfo
              
              })
            }
            else{
              set({
                userLoggedIn: "unauthenticated"})
            }
            
        },

        setSessionByValue(value){
            set({
              userLoggedIn: value,
              sessionInfo:null
            })       
        },


        clearSession(){
          set({
            userLoggedIn: "unauthenticated",
            sessionInfo:null,
            onBoarded:false
          })
          signOut()
        },

        setOnBoardingValue(value){
          set({
            onBoarded:value
          })
        },



      setHydrated() {
        set({ hydrated: true });
      },





    })),
    {
      name: "auth",
      onRehydrateStorage() {
        return (state, error) => {
          if (!error) state?.setHydrated();
        };
      },
    }
  )
);
