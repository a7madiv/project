import React, { useState } from "react";
import LoadingScreen from "./components/loading/LoadingScreen";
import FloatingNav from "./components/navigation/FloatingNav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import LoginPage from "./components/auth/LoginPage";
import { useLoading } from "./hooks/useLoading";
import SpeechToTextApp from "./components/SpeechToTextApp ";

export default function App() {
  const isLoading = useLoading();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {showLogin ? (
        <LoginPage onClose={() => setShowLogin(false)} />
      ) : (
        <>
          <FloatingNav onLoginClick={() => setShowLogin(true)} />
          <Hero />
          <Features />
          <SpeechToTextApp />
          <About />
          <Testimonials />
          <Pricing />
          <CTA />
        </>
      )}
    </>
  );
}
