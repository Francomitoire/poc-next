"use client";

import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "@/app/lib/firebase-config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { graphqlClientFetch } from "@/app/lib/graphqlClientFetch";

export const Login = () => {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return;
      }
      const token = await userCred.user.getIdToken();
      const now = new Date();
      const inOneMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      if (token != null) {
        document.cookie = `accessToken=${token}; expires=${inOneMonth.toUTCString()}; path=/`;
      } else {
        document.cookie = `accessToken=; expires=${inOneMonth.toUTCString()}; path=/`;
      }
    });
  }, []);

  const signIn = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
};
