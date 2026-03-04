import About from "@/components/about";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About – Elhassan Dahmouchi | Full-Stack Developer & AI Enthusiast",
  description:
    "Learn about Elhassan Dahmouchi, a Morocco-based full-stack web developer passionate about AI, SaaS platforms, and building smart solutions — with a Master's in Software Engineering.",
};

export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
}
