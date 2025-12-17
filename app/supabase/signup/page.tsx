"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const signUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      router.push("/supabase/login"); // redirect to login after signup
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Supabase User Sign Up</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
      <button onClick={signUp}>Sign Up</button>
      <p>
        Already have an account? <Link href="/supabase/login" style={{ color: "blue" }}> Login here</Link>
      </p>
    </div>
  );
}
