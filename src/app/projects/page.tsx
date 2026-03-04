import Projects from "@/components/projects";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | Elhassan Dahmouchi – Full-Stack & AI Work",
  description:
    "Explore the projects of Elhassan Dahmouchi — including SaaS platforms, alert reporting systems, e-commerce solutions, school management systems, and mobile applications built with Next.js, React Native, and more.",
};

export default function index() {
  return (
    <Wrapper>
      <Projects />
    </Wrapper>
  );
}
