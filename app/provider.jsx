// ./provider.jsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

export const UserDetailContext = createContext();

function DashboardProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const loggedInUser = session?.user;
      if (!loggedInUser) return;

      const { data: existingUsers } = await supabase
        .from("Users")
        .select("*")
        .eq("email", loggedInUser.email);

      if (!existingUsers.length) {
        await supabase.from("Users").insert([{
          name: loggedInUser.user_metadata?.name || "",
          email: loggedInUser.email,
          picture: loggedInUser.user_metadata?.picture || "",
        }]);
        const { data: newUser } = await supabase
          .from("Users")
          .select("*")
          .eq("email", loggedInUser.email)
          .single();
        setUser(newUser);
      } else {
        setUser(existingUsers[0]);
      }
    };

    checkUser();
  }, []);

  return (
    <UserDetailContext.Provider value={{ user, setUser }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default DashboardProvider;

export const useUser = () => {
  const context = useContext(UserDetailContext);
  if (!context) {
    throw new Error("useUser must be used within a UserDetailContext.Provider");
  }
  return context;
};
