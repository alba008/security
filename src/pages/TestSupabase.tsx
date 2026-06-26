import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function TestSupabase() {
  useEffect(() => {
    console.log("Supabase Connected:", supabase);
  }, []);

  return <div>Testing Supabase...</div>;
}