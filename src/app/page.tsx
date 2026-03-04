import React from "react";

import type { Metadata } from "next";
import Home from "@/components/home";
import Wrapper from "@/layouts/Wrapper";
export const metadata: Metadata = {
  title: "Elhassan Dahmouchi | Full-Stack Developer & AI Enthusiast",
  description:
    "Welcome to the portfolio of Elhassan Dahmouchi — a Morocco-based full-stack web developer and AI enthusiast specializing in SaaS platforms, alert reporting systems, and mobile applications. Available for freelance.",
};

export default function index() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
