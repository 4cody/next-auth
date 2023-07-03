"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignUp = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="">Sign Up</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input type="text" id="username" value={user.username} />
    </div>
  );
}
