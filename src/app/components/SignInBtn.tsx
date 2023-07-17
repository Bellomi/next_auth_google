//this is a client component because we use de useSession here, so I add
"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInBtn = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gar-4 ml-auto">
        <p className="text-sky-900">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
      Sign In
    </button>
  );
};

export default SignInBtn;
