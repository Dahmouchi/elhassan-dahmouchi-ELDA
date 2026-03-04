import SingleProject from "@/components/single-project";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Project Details | Elhassan Dahmouchi – Full-Stack & AI Work",
  description:
    "A detailed look at one of Elhassan Dahmouchi's projects — exploring the technology stack, problem-solving approach, and outcomes of real-world web, AI, and mobile development work.",
};

export default function index() {
  return (
    <Wrapper>
      <SingleProject />
    </Wrapper>
  );
}
