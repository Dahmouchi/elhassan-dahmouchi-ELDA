import Service from "@/components/service";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services | Elhassan Dahmouchi – Web, AI & Mobile Development",
  description:
    "Discover the development services offered by Elhassan Dahmouchi — full-stack web development, AI integration, SaaS platforms, mobile app development with React Native, and modern UI/UX design.",
};

export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  );
}
