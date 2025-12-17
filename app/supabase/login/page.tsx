"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
    } else {
      router.push("/supabase/todos"); // redirect to todos after login
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Supabase User Login</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={signIn}>Login</button>

      <p style={{ marginTop: 20 }}>
        New user?{" "}
        <Link href="/supabase/signup" style={{ color: "blue" }}>
          Sign up here
        </Link>
      </p>
    </div>
  );
}
