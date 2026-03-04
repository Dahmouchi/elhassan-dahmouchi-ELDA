import Blog from "@/components/blog";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog | Elhassan Dahmouchi – Insights on Web Dev, AI & Tech",
  description:
    "Read articles and insights from Elhassan Dahmouchi — a full-stack developer and AI enthusiast sharing knowledge on web development, SaaS, mobile apps, and emerging technologies.",
};

export default function index() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
}
