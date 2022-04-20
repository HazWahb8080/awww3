import React, { useState, useEffect } from "react";
import Slide from "../components/slide";
import Hero from "../components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function Main() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  return loader ? (
    <div className="loader" />
  ) : (
    <div>
      <Hero /> <Slide/>
      <div className="footer">Build your ideal story today.</div>
    </div>
  );
}