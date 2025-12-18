"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";
import { User } from "@supabase/supabase-js";
type Todo = {
  id: number;
  title: string;
  created_at: string;
  user_id: string;
};


export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Fetch user once on mount
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) console.error(error.message);
      console.log("My User Data:", user);

      if (!user) router.push("/supabase/login");
      else setUser(user);
    };
    getUser();
    console.log("User fetched");
  }, [router]);

  // Centralized fetchTodos
  const fetchTodos = useCallback(async (userId: string) => {
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", userId)
      .order("id");

    if (error) {
      console.error(error);
      return [];
    }
    return data as Todo[];
  }, []);


  // Fetch todos when user is loaded
  useEffect(() => {
    if (!user) return;
    (async () => {
      const data = await fetchTodos(user.id);
      setTodos(data);
    })();
  }, [user,fetchTodos]);

  // CRUD functions
  const addTodo = async () => {
    if (!newTodo.trim() || !user) return;
    const { error } = await supabase
      .from("todos")
      .insert([{ title: newTodo, user_id: user.id }]);
    if (error) console.error(error);
    setNewTodo("");

    // Refresh todos
    const updated = await fetchTodos(user.id);
    setTodos(updated);
  };

  const updateTodo = async (id: number, title: string) => {
    if (!title.trim() || !user) return;
    const { error } = await supabase
      .from("todos")
      .update({ title })
      .eq("id", id)
      .eq("user_id", user.id);
    if (error) console.error(error);

    // Refresh todos
    const updated = await fetchTodos(user.id);
    setTodos(updated);
  };

  const deleteTodo = async (id: number) => {
    if (!user) return;
    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);
    if (error) console.error(error);

    // Refresh todos
    const updated = await fetchTodos(user.id);
    setTodos(updated);
  };

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Error signing out:", error.message);
    router.push("/supabase/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Supabase Realtime CRUD</h1>
      <p>
        <Link href="/supabase">Supabase Page</Link>
      </p>
      <button onClick={signOutUser}>Sign Out</button>

      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              value={todo.title}
              onBlur={(e) => updateTodo(todo.id, e.target.value)} // 👈 only when leaving the field
              onChange={(e) =>
                setTodos((prev) =>
                  prev.map((t) => (t.id === todo.id ? { ...t, title: e.target.value } : t))
                )
              }
            />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
