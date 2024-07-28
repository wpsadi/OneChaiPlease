import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { SetOrGetOnBoarding } from "@/Actions/user/SetOrGetOnBoarding";
import { AppwriteException, ID, Models } from "node-appwrite";
import { Sdatabase } from "@/models/Client/ServerConfig";
import { AWdata } from "@/models/data";
import { getServerSideProps } from "next/dist/build/templates/pages";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NextAuth, { DefaultSession,Session } from "next-auth";

import {  } from "next-auth";
import { signOut } from "next-auth/react";

const { userCollection } = AWdata;


interface IdAuth{
  userLoggedIn: "loading" | "authenticated" | "unauthenticated"
  sessionInfo:DefaultSession | null 
    hydrated:boolean
    onBoarded:boolean |  null
    setSession(sessionInfo:Session):void
    setHydrated:()=>void
    clearSession:()=>void
}

export const useAuthStore = create<IdAuth>()(
  persist(
    immer((set) => ({
      userLoggedIn: "loading",
        hydrated: false,
        onBoarded: null,
        sessionInfo:null,
        setSession(sessionInfo){
            if (sessionInfo){
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


        clearSession(){
          set({
            userLoggedIn: "unauthenticated",
            sessionInfo:null,
            onBoarded:null
          })
          signOut()
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
