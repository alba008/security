import { useEffect } from "react";

import Hero from "../components/sections/Hero";
import Industries from "../components/sections/Industries";
import TrustedBy from "../components/sections/TrustedBy";
import Stats from "../components/sections/Stats";
import Services from "../components/sections/Services";
import Leadership from "../components/sections/Leadership";

import { supabase } from "../lib/supabase";

export default function Home() {

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from("_dummy_test")
        .select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);
    }

    testConnection();
  }, []);

  useEffect(() => {
    async function testInsert() {
      const { data, error } = await supabase
        .from("quote_requests")
        .insert({
          company_name: "Empire Test",
          contact_person: "Albert",
          email: "test@test.com",
          phone: "555-1234",
          service_needed: "Event Security",
          service_location: "New York",
          description: "Testing Supabase"
        });
  
      console.log("INSERT:", data);
      console.log("ERROR:", error);
    }
  
    testInsert();
  }, []);

  return (
    <>
      <Hero />
      <Industries />
      <Stats />
      <Services />
      <Leadership />
      <TrustedBy />

    </>
  );
}