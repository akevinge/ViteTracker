import React from "react";
import Hero from "../components/Hero";
import { UserProvider } from "../UserContext";

function Home() {
  return (
    <div className="home-container">
      <UserProvider>
        <Hero />
      </UserProvider>
    </div>
  );
}

export default Home;
